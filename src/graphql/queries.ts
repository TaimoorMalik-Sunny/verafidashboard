import { graphQlApiHandler } from "@/lib/utils";
import { Query, QueryGetWalletAttributesArgs, QueryGetWalletNftsCountArgs } from "@/types/graphql"


export const getWalletAttributes = async ({ input }: QueryGetWalletAttributesArgs) => {
    return await graphQlApiHandler<QueryGetWalletAttributesArgs, { getWalletAttributes: Query['getWalletAttributes'] }>({
        query:  /* GraphQL */`
            query MyQuery($input: GetWalletAttributesInput!) {
                getWalletAttributes(input: $input) {
                    id
                    attrs
                    createdAt
                }
            }
        
        `,
        variables: { input }
    })
}



export const getWalletNftsCount = async ({ input }: QueryGetWalletNftsCountArgs) => {
    return await graphQlApiHandler<QueryGetWalletNftsCountArgs, { getWalletNftsCount: Query['getWalletNftsCount'] }>({
        query:  /* GraphQL */`
        query MyQuery($input: GetWalletNftsCountInput!) {
            getWalletNftsCount(input: $input) {
                noOfTokens
                noOfBlueChipTokens            
        }
        }
        `,
        variables: { input }
    })
}



export const getHighestLtvLoans = async () => {
    return await graphQlApiHandler< { getHighestLtvLoans: Query['getHighestLtvLoans'] }>({
        query:  /* GraphQL */`
        query MyQuery{ getHighestLtvLoans{
            amountUsd amountEth loanDurationSec ltv apr
            asset {contractAddress balance tokenId name symbol imgUrl }
          }
        }
        `
        
    })
}






