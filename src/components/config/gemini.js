import {GoogleGenAI} from '@google/genai';

// const apiKey = process.env.GEMINI_API_KEY


async function main(prompt) {

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
  const ai = new GoogleGenAI({
    apiKey:API_KEY
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-1.5-flash-8b';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let result = ""
  for await (const chunk of response) {
    result+=chunk.text
  }
  return result
}
export default main 
