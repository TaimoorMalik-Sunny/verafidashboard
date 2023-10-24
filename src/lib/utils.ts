import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GraphQLResult } from "@/types"
import axios, { AxiosError } from "axios"
import { GRAPHQL_API } from "@/app-config"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


interface Props<T> { query: string, variables?: T }
export const graphQlApiHandler = async <Input, Output = {}>({ query, variables }: Props<Input>): Promise<GraphQLResult<Output>> => {
    if (!GRAPHQL_API.endpoint) throw Error("Graphql endpoint not found.")
    // if (!GraphqlApiKey.get()) throw Error("Graphql API key not found.")
    try {
        const res = await axios.post(GRAPHQL_API.endpoint, {
            query: query,
            variables
        }, { headers: { 'x-api-key': GRAPHQL_API.apiKey } });
        console.log(res.data)
        return res.data
    } catch (error) {
        return {
            //@ts-ignore
            errors: ((error as AxiosError).response?.data?.errors)
        }
    }
}