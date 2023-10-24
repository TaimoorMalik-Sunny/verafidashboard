import { graphQlApiHandler } from "@/lib/utils";
import { Mutation, MutationCalcWalletAttributesArgs, MutationCalcCreditScoreArgs, MutationCalcPreApprovalArgs, MutationCalcLaonSuccessProbabilityArgs } from "@/types/graphql"


export const calcWalletAttributes = async ({ input }: MutationCalcWalletAttributesArgs) => {
    return await graphQlApiHandler<MutationCalcWalletAttributesArgs, { calcWalletAttributes: Mutation['calcWalletAttributes'] }>({
        query:  /* GraphQL */`
            mutation MyMutation($input: CalcWalletAttributesInput!) {
                calcWalletAttributes(input: $input) {
                    id
                    attrs
                    createdAt
                }
            }
        
        `,
        variables: { input }
    })
}

export const calcCreditScore = async ({ input }: MutationCalcCreditScoreArgs) => {
    return await graphQlApiHandler<MutationCalcCreditScoreArgs, { calcCreditScore: Mutation['calcCreditScore'] }>({
        query:  /* GraphQL */`
            mutation MyMutation($input: CalcCreditScoreInput!) {
                calcCreditScore(input: $input) {
                    score
                }
            }
        
        `,
        variables: { input }
    })
}

export const calcPreApproval = async ({ input }: MutationCalcPreApprovalArgs) => {
    return await graphQlApiHandler<MutationCalcPreApprovalArgs, { calcPreApproval: Mutation['calcPreApproval'] }>({
        query:  /* GraphQL */`
            mutation MyMutation($input: CalcPreApprovalInput!) {
                calcPreApproval(input: $input) {
                    preApprovalNftfi 
                    preApprovalBendDao
                }
            }
        
        `,
        variables: { input }
    })
}

export const calcLaonSuccessProbability = async ({ input }: MutationCalcLaonSuccessProbabilityArgs) => {
    return await graphQlApiHandler<MutationCalcLaonSuccessProbabilityArgs, { calcLaonSuccessProbability: Mutation['calcLaonSuccessProbability'] }>({
        query:  /* GraphQL */`
            mutation MyMutation($input: CalcLaonSuccessProbabilityInput!) {
                calcLaonSuccessProbability(input: $input) {
                    probability
                }
            }
        
        `,
        variables: { input }
    })
}


// calcLaonSuccessProbability(input: CalcLaonSuccessProbabilityInput!): CalcLaonSuccessProbabilityOutput!

