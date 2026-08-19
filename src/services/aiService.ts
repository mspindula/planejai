interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[]
    }
  }[]
}

export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: {
    content: string
  }
  suggestions: {
    items: string[]
  }
  extraIncome: {
    items: string[]
  }
  investment: {
    items: string[]
  }
  motivation: {
    content: string
  }
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL_NAME = 'gemini-flash-latest'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

const callGeminiAPI = async (prompt: string, retries = 3) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    })

    if (response.ok) {
      return (await response.json()) as GeminiResponse
    }

    const errorData = await response.json().catch(() => null)

    console.error(`Erro Gemini - tentativa ${attempt + 1}:`, JSON.stringify(errorData, null, 2))

    // 503 = serviço temporariamente indisponível
    if (response.status === 503 && attempt < retries - 1) {
      const delay = 1000 * 2 ** attempt

      await new Promise(resolve => setTimeout(resolve, delay))

      continue
    }

    throw new Error(errorData?.error?.message || `Erro na requisição: ${response.status}`)
  }

  throw new Error('Não foi possível obter resposta do Gemini.')
}

export const getInsight = async (prompt: string) => {
  const response = await callGeminiAPI(prompt)
  const json = response.candidates[0].content.parts[0].text
  return JSON.parse(json) as InsightData
}
