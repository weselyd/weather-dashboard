const OPENAI_KEY = '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';

// Call OpenAI API
export async function callOpenAI(prompt) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      input: `${prompt}`,
    }),
  });
  if (!response.ok) throw new Error('OpenAI API error');
  const data = await response.json();
  return data;
}