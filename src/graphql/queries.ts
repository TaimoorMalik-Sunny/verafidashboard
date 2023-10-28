import { graphQlApiHandler } from "@/lib/utils";
import {  Query, QueryGetHighestLtvLoansArgs, QueryGetWalletAttributesArgs, QueryGetWalletNftsCountArgs, QueryGetWalletTokensAndAssetsArgs } from "@/types/graphql"


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
                noOfNftTokens
                noOfBlueChipNftTokens            
        }
        }
        `,
        variables: { input }
    })
}



export const getHighestLtvLoans = async ({ input }: QueryGetHighestLtvLoansArgs|undefined = {}) => {
    return await graphQlApiHandler<QueryGetHighestLtvLoansArgs, { getHighestLtvLoans: Query['getHighestLtvLoans'] }>({
        query:  /* GraphQL */`
       
        query MyQuery($input: GetHighestLtvLoansInput)
        { getHighestLtvLoans(input: $input){
            amountUsd
            apr
            loanDurationSec
            loanPlatform {
              logoUrl
              name
              websiteUrl
            }
            ltv
            amountEth
            asset {
              balance
              contractAddress
              imgUrl
              name
              symbol
              tokenId
            }
          }
        }
        `,
        variables:{ input }
        
    })
}

export const getWalletTokensAndAssets = async ({ input }: QueryGetWalletTokensAndAssetsArgs) => {
    return await graphQlApiHandler<QueryGetWalletTokensAndAssetsArgs, { getWalletTokensAndAssets: Query['getWalletTokensAndAssets'] }>({
        query:  /* GraphQL */`
        query MyQuery($input: GetWalletTokensAndAssetsInput!) {
            getWalletTokensAndAssets(input: $input) {
                nfts {
                    contractAddress imgUrl name tokenId balance 
                   }
                   tokens{
                     name contractAddress imgUrl name symbol balance
                   }        
        }
        }
        `,
        variables: { input }
    })
}






