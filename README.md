# seattlejs

Live code for talk given at [SeattleJS Conf 2023](https://seattlejs.com/conf) on [Understanding LangChain Agents and Tools in JS with Twilio SMS](https://seattlejs.com/talks/langchain-agents)

You will need an [OpenAI API key](https://beta.openai.com/account/api-keys), and can also use a [Cohere API key](https://dashboard.cohere.ai/api-keys) by importing a Cohere model with `import { Cohere } from "langchain/llms/cohere"` and replacing `const model = new OpenAI({temperature:0.9});` with `const model = new Cohere({temperature:0.9});`. 

You will also need a [SerpAPI API key](https://serpapi.com/manage-api-key) for a LangChain tool to search the web. It is free!

[Slides can be viewed here as well](https://docs.google.com/presentation/d/1lE_e5oGZksRtBhZVUPbKnw4KJjA3dAah5mhm-lJ4agU/edit?usp=sharing).
