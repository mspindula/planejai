import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '../src/components/shared/layout/RootLayout'
import { Historico } from './Pages/Historico'
import { SimulationFormPage } from './Pages/SimulationFormPage'
import { SimulationResultsPage } from './Pages/SimulationResultsPage'
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultsPage />,
      },
      {
        path: '/historico',
        element: <Historico />,
      },
    ],
  },
])
