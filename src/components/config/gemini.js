import {GoogleGenAI} from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY


async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    
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
