import type { APIContext, APIRoute } from "astro"
import { GetNewIcons } from "~/server/get-new-icons"

export const GET:APIRoute =  async ({params, request}:APIContext) => {
  const res = await GetNewIcons()
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
      data: res
    })
  )
}