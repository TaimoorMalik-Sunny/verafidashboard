import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GraphQLResult } from '@/types';
import { graphQlApiHandler } from '@/lib/utils';
import { RootStateType } from '@/redux/store';
import * as queries  from '@/graphql/queries';
import * as mutation from '@/graphql/mutations';


import { alchemy } from '@/lib/alchemy';
import axios from 'axios';



export const calcWalletAttributes = createAsyncThunk(
    "mutation/calcWalletAttributes",
    async ({ walletAddress }: { walletAddress: string  }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcWalletAttributes({ input: { walletAddress } });
        console.log('res_simple', res.data?.calcWalletAttributes.attrs)
        console.log('res_parse', JSON.parse(res.data?.calcWalletAttributes.attrs as any))
        return res.data?.calcWalletAttributes;
    
    }
)
export const getWalletAttributes = createAsyncThunk(
    "queries/getWalletAttributes",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const dispatch = thunkAPI.dispatch
        console.log('===== calculation init =====')
        const res = await queries.getWalletAttributes({ input: { walletAddress } });
        if(res.errors?.[0].message.includes("This wallet has no attributes calculated")){
            dispatch(calcWalletAttributes({ walletAddress}))
            throw res.errors?.[0].message
        
        }
        console.log('res_simple', res.data?.getWalletAttributes.attrs)
        console.log('res_parse', JSON.parse(res.data?.getWalletAttributes.attrs as any))
        return res.data?.getWalletAttributes;
    
    }
)

export const calcCreditScore = createAsyncThunk(
    "mutation/calcCreditScore",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcCreditScore({ input: { walletAddress} });
      return res.data?.calcCreditScore
    
    }
)


export const calcPreApproval = createAsyncThunk(
    "mutation/calcPreApproval",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcPreApproval({ input: { walletAddress} });
      return res.data?.calcPreApproval
    
    }
)

export const calcLaonSuccessProbability = createAsyncThunk(
    "mutation/calcLaonSuccessProbability",
    async ({ walletAddress,appliedInterestRate,loanRequired_eth,repaymentDays }: 
        { walletAddress: string ,appliedInterestRate: number , loanRequired_eth: number , repaymentDays: number}, 
        thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcLaonSuccessProbability({ input: { walletAddress,appliedInterestRate,loanRequired_eth,repaymentDays} });
      return res.data?.calcLaonSuccessProbability
    
    }
)

export const fetchNFTsForOwner = createAsyncThunk(
    "nft/fetchNFTsForOwner",
    async ({ walletAddress }: { walletAddress: string }) => {
      try {
        const ownedNfts = await alchemy.nft.getNftsForOwner(walletAddress);
        return ownedNfts;
      } catch (error) {
        throw error;
      }
    }
  );
  
  export const fetchTokensForOwner = createAsyncThunk(
    "nft/fetchTokensForOwner",
    async ({ walletAddress }: { walletAddress: string }) => {
      try {
        const tokens = await alchemy.core.getTokensForOwner(walletAddress);
        return tokens;
      } catch (error) {
        throw error;
      }
    }
  );

  export const fetchTitleForOwner = createAsyncThunk(
    "nft/fetchTitleForOwner",
    async ({ walletAddress }: { walletAddress: string }) => {
      try {
        const ownedNfts = alchemy.nft.getNftsForOwner(walletAddress, {
            contractAddresses: ["0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85"],
          })


        return ownedNfts;
      } catch (error) {
        throw error;
      }
    }
  );


  export const generatePdf = createAsyncThunk(
    'pdf/generatePdf',
    async ({ walletAddress }: { walletAddress?: string |undefined|null }) => {
      try {
        const apiEndpoint = `https://yekzta3qa8.execute-api.us-east-1.amazonaws.com/prod/generate-pdf?wallet_address=${walletAddress}`;
        const resp = await axios.get(apiEndpoint, { responseType: 'blob' });
        const url = window.URL.createObjectURL(
          new Blob([resp.data], { type: 'application/pdf' })
        );
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.click();
        return url;

      } catch (error) {
        throw error;
      }
    }
  );


  export const getWalletNftsCount = createAsyncThunk(
    "queries/getWalletNftsCount",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
      
        console.log('===== getting NTF count =====')
        const res = await queries.getWalletNftsCount({ input: { walletAddress } });
        console.log(res)
       
      if (res.errors?.length)
      throw res.errors?.[0].message
        return res.data?.getWalletNftsCount;
    
    }
)
export const getHighestLtvLoans = createAsyncThunk(
  "queries/getHighestLtvLoans",
  async ( thunkAPI) => {
    
      console.log('===== getting NTF count =====')
      const res = await queries.getHighestLtvLoans();
      console.log(res)
     
    if (res.errors?.length)
    throw res.errors?.[0].message
      return res.data
  
  }
)


// alchemy.nft.getNftsForOwner(walletAddress),
// alchemy.core.getTokensForOwner(walletAddress)

//const ethereum = (window as any).ethereum;
// calcLaonSuccessProbability