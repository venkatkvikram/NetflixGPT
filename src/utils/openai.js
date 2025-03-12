import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true
})

export default openai; 