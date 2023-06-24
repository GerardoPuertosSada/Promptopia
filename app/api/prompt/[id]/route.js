import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (params) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate
    ('creator')
    if (!prompt) return new Response("PROMPT NOT FOUND", {status: 404}) 

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  }
  catch (error) {
    return new Response('failed to get prompts', {
      status: 500,
    });
  }
}


export const PATCH = async (request, {params}) => {
  const { prompt, tag } = await request.json()

  try {
    await connectToDB()
    const existingPrompt = await Prompt.findById(params.id)
    if (!existingPrompt) return new Response("PROMPT NOT FOUND", {status: 404})

    existingPrompt.prompt = prompt
    existingPrompt.tag = tag
    await existingPrompt.save()
    return new Response(JSON.stringify(existingPrompt), {
      status: 200})
    } catch (error) {
      return new Response('failed to update prompt', {
        status: 500,
      });
    }
  }
