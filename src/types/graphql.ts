import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSJSON: string;
}

export interface Asset {
  __typename?: 'Asset';
  balance: Scalars['Int'];
  contractAddress: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
}

export enum BlockChainType {
  Ethereum = 'ETHEREUM'
}

export interface CalcCreditScoreInput {
  walletAddress: Scalars['String'];
}

export interface CalcCreditScoreOutput {
  __typename?: 'CalcCreditScoreOutput';
  score: Scalars['Int'];
}

export interface CalcLaonSuccessProbabilityInput {
  appliedInterestRate: Scalars['Int'];
  blockchainType?: InputMaybe<BlockChainType>;
  loanRequired_eth: Scalars['Float'];
  purpose?: InputMaybe<Scalars['String']>;
  repaymentDays: Scalars['Int'];
  walletAddress: Scalars['String'];
}

export interface CalcLaonSuccessProbabilityOutput {
  __typename?: 'CalcLaonSuccessProbabilityOutput';
  probability: Scalars['Float'];
}

export interface CalcPreApprovalInput {
  walletAddress: Scalars['String'];
}

export interface CalcPreApprovalOutput {
  __typename?: 'CalcPreApprovalOutput';
  preApprovalBendDao: Scalars['Float'];
  preApprovalNftfi: Scalars['Float'];
}

export interface CalcWalletAttributesInput {
  walletAddress: Scalars['String'];
}

export interface Crypto {
  __typename?: 'Crypto';
  balance: Scalars['Int'];
  contractAddress: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
}

export interface GetHighestLtvLoansInput {
  walletAddress?: InputMaybe<Scalars['String']>;
}

export interface GetWalletAttributesInput {
  walletAddress: Scalars['String'];
}

export interface GetWalletNftsCountInput {
  walletAddress: Scalars['String'];
}

export interface GetWalletNftsCountOutput {
  __typename?: 'GetWalletNftsCountOutput';
  noOfBlueChipNftTokens: Scalars['Int'];
  noOfNftTokens: Scalars['Int'];
}

export interface GetWalletTokensAndAssetsInput {
  walletAddress: Scalars['String'];
}

export interface GetWalletTokensAndAssetsOutput {
  __typename?: 'GetWalletTokensAndAssetsOutput';
  nfts: Array<Maybe<Asset>>;
  tokens: Array<Maybe<Crypto>>;
}

export interface Loan {
  __typename?: 'Loan';
  amountEth?: Maybe<Scalars['Float']>;
  amountUsd?: Maybe<Scalars['Float']>;
  apr?: Maybe<Scalars['Float']>;
  asset?: Maybe<Asset>;
  loanDurationSec?: Maybe<Scalars['Int']>;
  loanPlatform?: Maybe<Platform>;
  ltv?: Maybe<Scalars['Float']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  calcCreditScore: CalcCreditScoreOutput;
  calcLaonSuccessProbability: CalcLaonSuccessProbabilityOutput;
  calcPreApproval: CalcPreApprovalOutput;
  calcWalletAttributes: WalletAttributes;
}


export interface MutationCalcCreditScoreArgs {
  input: CalcCreditScoreInput;
}


export interface MutationCalcLaonSuccessProbabilityArgs {
  input: CalcLaonSuccessProbabilityInput;
}


export interface MutationCalcPreApprovalArgs {
  input: CalcPreApprovalInput;
}


export interface MutationCalcWalletAttributesArgs {
  input: CalcWalletAttributesInput;
}

export interface Platform {
  __typename?: 'Platform';
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  websiteUrl?: Maybe<Scalars['String']>;
}

export interface PredictCreditScoreInput {
  walletAddress: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  getHighestLtvLoans: Array<Loan>;
  getWalletAttributes: WalletAttributes;
  getWalletNftsCount: GetWalletNftsCountOutput;
  getWalletTokensAndAssets: GetWalletTokensAndAssetsOutput;
  predictCreditScore?: Maybe<Scalars['AWSJSON']>;
}


export interface QueryGetHighestLtvLoansArgs {
  input?: InputMaybe<GetHighestLtvLoansInput>;
}


export interface QueryGetWalletAttributesArgs {
  input: GetWalletAttributesInput;
}


export interface QueryGetWalletNftsCountArgs {
  input: GetWalletNftsCountInput;
}


export interface QueryGetWalletTokensAndAssetsArgs {
  input: GetWalletTokensAndAssetsInput;
}


export interface QueryPredictCreditScoreArgs {
  input: PredictCreditScoreInput;
}

export interface Response {
  __typename?: 'Response';
  message: Scalars['String'];
}

export interface WalletAttributes {
  __typename?: 'WalletAttributes';
  attrs: Scalars['AWSJSON'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AWSDate: ResolverTypeWrapper<Scalars['AWSDate']>;
  AWSDateTime: ResolverTypeWrapper<Scalars['AWSDateTime']>;
  AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
  Asset: ResolverTypeWrapper<Asset>;
  BlockChainType: BlockChainType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CalcCreditScoreInput: CalcCreditScoreInput;
  CalcCreditScoreOutput: ResolverTypeWrapper<CalcCreditScoreOutput>;
  CalcLaonSuccessProbabilityInput: CalcLaonSuccessProbabilityInput;
  CalcLaonSuccessProbabilityOutput: ResolverTypeWrapper<CalcLaonSuccessProbabilityOutput>;
  CalcPreApprovalInput: CalcPreApprovalInput;
  CalcPreApprovalOutput: ResolverTypeWrapper<CalcPreApprovalOutput>;
  CalcWalletAttributesInput: CalcWalletAttributesInput;
  Crypto: ResolverTypeWrapper<Crypto>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetHighestLtvLoansInput: GetHighestLtvLoansInput;
  GetWalletAttributesInput: GetWalletAttributesInput;
  GetWalletNftsCountInput: GetWalletNftsCountInput;
  GetWalletNftsCountOutput: ResolverTypeWrapper<GetWalletNftsCountOutput>;
  GetWalletTokensAndAssetsInput: GetWalletTokensAndAssetsInput;
  GetWalletTokensAndAssetsOutput: ResolverTypeWrapper<GetWalletTokensAndAssetsOutput>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Loan: ResolverTypeWrapper<Loan>;
  Mutation: ResolverTypeWrapper<{}>;
  Platform: ResolverTypeWrapper<Platform>;
  PredictCreditScoreInput: PredictCreditScoreInput;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<Response>;
  String: ResolverTypeWrapper<Scalars['String']>;
  WalletAttributes: ResolverTypeWrapper<WalletAttributes>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AWSDate: Scalars['AWSDate'];
  AWSDateTime: Scalars['AWSDateTime'];
  AWSJSON: Scalars['AWSJSON'];
  Asset: Asset;
  Boolean: Scalars['Boolean'];
  CalcCreditScoreInput: CalcCreditScoreInput;
  CalcCreditScoreOutput: CalcCreditScoreOutput;
  CalcLaonSuccessProbabilityInput: CalcLaonSuccessProbabilityInput;
  CalcLaonSuccessProbabilityOutput: CalcLaonSuccessProbabilityOutput;
  CalcPreApprovalInput: CalcPreApprovalInput;
  CalcPreApprovalOutput: CalcPreApprovalOutput;
  CalcWalletAttributesInput: CalcWalletAttributesInput;
  Crypto: Crypto;
  Float: Scalars['Float'];
  GetHighestLtvLoansInput: GetHighestLtvLoansInput;
  GetWalletAttributesInput: GetWalletAttributesInput;
  GetWalletNftsCountInput: GetWalletNftsCountInput;
  GetWalletNftsCountOutput: GetWalletNftsCountOutput;
  GetWalletTokensAndAssetsInput: GetWalletTokensAndAssetsInput;
  GetWalletTokensAndAssetsOutput: GetWalletTokensAndAssetsOutput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Loan: Loan;
  Mutation: {};
  Platform: Platform;
  PredictCreditScoreInput: PredictCreditScoreInput;
  Query: {};
  Response: Response;
  String: Scalars['String'];
  WalletAttributes: WalletAttributes;
};

export interface AwsDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDate'], any> {
  name: 'AWSDate';
}

export interface AwsDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDateTime'], any> {
  name: 'AWSDateTime';
}

export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
  name: 'AWSJSON';
}

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imgUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalcCreditScoreOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalcCreditScoreOutput'] = ResolversParentTypes['CalcCreditScoreOutput']> = {
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalcLaonSuccessProbabilityOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalcLaonSuccessProbabilityOutput'] = ResolversParentTypes['CalcLaonSuccessProbabilityOutput']> = {
  probability?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalcPreApprovalOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalcPreApprovalOutput'] = ResolversParentTypes['CalcPreApprovalOutput']> = {
  preApprovalBendDao?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  preApprovalNftfi?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CryptoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Crypto'] = ResolversParentTypes['Crypto']> = {
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imgUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetWalletNftsCountOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetWalletNftsCountOutput'] = ResolversParentTypes['GetWalletNftsCountOutput']> = {
  noOfBlueChipNftTokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  noOfNftTokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetWalletTokensAndAssetsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetWalletTokensAndAssetsOutput'] = ResolversParentTypes['GetWalletTokensAndAssetsOutput']> = {
  nfts?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  tokens?: Resolver<Array<Maybe<ResolversTypes['Crypto']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Loan'] = ResolversParentTypes['Loan']> = {
  amountEth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountUsd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  apr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  loanDurationSec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loanPlatform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  ltv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  calcCreditScore?: Resolver<ResolversTypes['CalcCreditScoreOutput'], ParentType, ContextType, RequireFields<MutationCalcCreditScoreArgs, 'input'>>;
  calcLaonSuccessProbability?: Resolver<ResolversTypes['CalcLaonSuccessProbabilityOutput'], ParentType, ContextType, RequireFields<MutationCalcLaonSuccessProbabilityArgs, 'input'>>;
  calcPreApproval?: Resolver<ResolversTypes['CalcPreApprovalOutput'], ParentType, ContextType, RequireFields<MutationCalcPreApprovalArgs, 'input'>>;
  calcWalletAttributes?: Resolver<ResolversTypes['WalletAttributes'], ParentType, ContextType, RequireFields<MutationCalcWalletAttributesArgs, 'input'>>;
};

export type PlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform']> = {
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  websiteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getHighestLtvLoans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<QueryGetHighestLtvLoansArgs, never>>;
  getWalletAttributes?: Resolver<ResolversTypes['WalletAttributes'], ParentType, ContextType, RequireFields<QueryGetWalletAttributesArgs, 'input'>>;
  getWalletNftsCount?: Resolver<ResolversTypes['GetWalletNftsCountOutput'], ParentType, ContextType, RequireFields<QueryGetWalletNftsCountArgs, 'input'>>;
  getWalletTokensAndAssets?: Resolver<ResolversTypes['GetWalletTokensAndAssetsOutput'], ParentType, ContextType, RequireFields<QueryGetWalletTokensAndAssetsArgs, 'input'>>;
  predictCreditScore?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType, RequireFields<QueryPredictCreditScoreArgs, 'input'>>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletAttributesResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletAttributes'] = ResolversParentTypes['WalletAttributes']> = {
  attrs?: Resolver<ResolversTypes['AWSJSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['AWSDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AWSDate?: GraphQLScalarType;
  AWSDateTime?: GraphQLScalarType;
  AWSJSON?: GraphQLScalarType;
  Asset?: AssetResolvers<ContextType>;
  CalcCreditScoreOutput?: CalcCreditScoreOutputResolvers<ContextType>;
  CalcLaonSuccessProbabilityOutput?: CalcLaonSuccessProbabilityOutputResolvers<ContextType>;
  CalcPreApprovalOutput?: CalcPreApprovalOutputResolvers<ContextType>;
  Crypto?: CryptoResolvers<ContextType>;
  GetWalletNftsCountOutput?: GetWalletNftsCountOutputResolvers<ContextType>;
  GetWalletTokensAndAssetsOutput?: GetWalletTokensAndAssetsOutputResolvers<ContextType>;
  Loan?: LoanResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Platform?: PlatformResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  WalletAttributes?: WalletAttributesResolvers<ContextType>;
};

