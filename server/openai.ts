import {ChatOpenAI} from 'langchain/chat_models/openai';
import {OpenAI} from 'langchain/llms/openai';

export const openAI = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

export const chatAI = new ChatOpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  // modelName: 'gpt-4', // waitlist
});
