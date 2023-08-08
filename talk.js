//Import the OpenAPI Large Language Model 
import { OpenAI } from "langchain/llms/openai"

//Load env vars 
import * as dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({temperature:0.9});
const name = await model.call("What is a good name for a coffee shop?");
console.log({name});

import { PromptTemplate } from "langchain/prompts";
const template = "What is a good name for a {type} shop with a {theme} theme?";
const prompt = new PromptTemplate({template, inputVariables:["type", "theme"]});
const formatPromptTemplate = await prompt.format({"type": "coffee", "theme": "sports"});
console.log({ formatPromptTemplate});

import { LLMChain } from "langchain/chains";
const chain = new LLMChain({llm: model, prompt });
const res = await chain.call({"type": "coffee", "theme": "sports"});
console.log({res});

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";
import { SerpAPI } from "langchain/tools";

const tools = [new Calculator(), new SerpAPI()];
const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description"
});
const input = "If I get 3 lattes a week and 1 latte costs $5, how much do I spend on lattes each month?" + "Who is the mayor of Seattle?"

const res2 = await executor.call({input});

console.log({res2});

