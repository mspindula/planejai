import { ArrowRight, CalendarClock, Goal, PiggyBank, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { PageHero } from '../components/shared/PageHero'
import { useSimulationStorage } from '../hooks/useSimulationStorage'
import { calcMonthlySavings } from '../utils/simulation'

export function Historico() {
  const navigate = useNavigate()
  const { getAllFormData, deleteSimulation } = useSimulationStorage()

  const simulations = getAllFormData()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Confira suas simulações anteriores e consulte seus resultados."
      />

      {simulations.length === 0 ? (
        <div className="bg-input flex flex-col items-center justify-center rounded-2xl p-10 text-center shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
          <Goal className="text-muted-foreground mb-4 size-10" />

          <h2 className="text-foreground text-lg font-semibold">Nenhuma simulação encontrada</h2>

          <p className="text-muted-foreground mt-2 text-sm">
            Faça sua primeira simulação para que ela apareça aqui.
          </p>

          <button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground mt-6 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Nova simulação
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {[...simulations].reverse().map(simulation => {
            const monthlySavings = calcMonthlySavings(simulation)

            return (
              <button
                key={simulation.id}
                onClick={() => navigate(`/resultado/${simulation.id}`)}
                className="bg-input group w-full rounded-2xl p-5 text-left shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-xl">
                        <Goal className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <h2 className="text-foreground truncate font-semibold">
                          {simulation.goalName}
                        </h2>

                        <p className="text-muted-foreground text-sm">
                          Meta: R${' '}
                          {Number(simulation.goalAmount).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:flex sm:items-center">
                    <div>
                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <CalendarClock className="size-4" />
                        Prazo
                      </div>

                      <p className="text-foreground mt-1 text-sm font-medium">
                        {simulation.goalDeadline} meses
                      </p>
                    </div>

                    <div>
                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <PiggyBank className="size-4" />
                        Economia mensal
                      </div>

                      <p className="text-foreground mt-1 text-sm font-medium">
                        R${' '}
                        {monthlySavings.toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={event => {
                          event.stopPropagation()

                          const confirmed = window.confirm(
                            'Tem certeza que deseja excluir esta simulação?',
                          )

                          if (confirmed) {
                            deleteSimulation(simulation.id)
                            window.location.reload()
                          }
                        }}
                        className="text-muted-foreground hover:text-destructive flex size-9 items-center justify-center rounded-lg transition-colors"
                        aria-label={`Excluir simulação ${simulation.goalName}`}
                      >
                        <Trash2 className="size-4" />
                      </button>

                      <ArrowRight className="text-muted-foreground hidden size-5 transition-transform group-hover:translate-x-1 sm:block" />
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </main>
  )
}
