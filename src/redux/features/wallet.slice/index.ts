import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { WritableDraft } from "immer/dist/internal";
import { calcCreditScore, calcLaonSuccessProbability, calcPreApproval, calcWalletAttributes, fetchNFTsForOwner, fetchTitleForOwner, fetchTokensForOwner, generatePdf, getHighestLtvLoans, getWalletAttributes, getWalletNftsCount } from './asyncThunks';
import { GraphQLResult } from '@/types';
import { OwnedNft, OwnedToken } from 'alchemy-sdk';
import { Loan } from '@/types/graphql';



// isWalletConnected
interface StateType {
    userinfo?:boolean|null
    calUserRep?:boolean|null
    address?: string | null
    balance?: number | null
    ageInDays?: number | null
    nfts?: any[] | null
    coins?: any[] | null
    credit_score?: number| null
    loan_sucess_probability?: string| null |any
    attribute?: any 
    preApprovalNftfi?:number 
    preApprovalBendDao?:number
    probability?:number
    score:number
    nftsdata?:any
    nftsdataCount?:any
    tokendata?:any
    tokendataCount?:any
    titleOfOwner?:any
    linkofreport?:any
    nftcounts:{noOfBlueChipNftTokens:number, noOfNftTokens:number}
    getHighestLtvLoans?: Loan[] | null
    
    


    fetchingStatus: {
        getWalletDetails?: boolean
        calcWalletAttributes:boolean
        calcCreditScore:boolean
        calcPreApproval:boolean
        calcLaonSuccessProbability:boolean
        userinfo:boolean
        calUserRep:boolean
        fetchNFTsForOwner:boolean
        fetchTokensForOwner:boolean
        fetchTitleForOwner:boolean
        generatePdf:boolean
        getWalletNftsCount:boolean
        getHighestLtvLoans:boolean
    }
    error: {

        getWalletAttributes: null | string
        calcWalletAttributes: null |string
        calcCreditScore:null | string
        calcPreApproval: null | string
        calcLaonSuccessProbability: null|string
        fetchNFTsForOwner:null|string
        fetchTokensForOwner:null|string
        fetchTitleForOwner:null|string
        generatePdf:null|string
        getWalletNftsCount:null|string
        getHighestLtvLoans:null|string
    }
}

const initialState: StateType = {

    
//     address:"0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4",
 //  address:"0x0fe93C4feBD368204D81758468EE5BFAF623fA5f",
 nftcounts:{noOfBlueChipNftTokens:0, noOfNftTokens:1},
   score:0,
    fetchingStatus: {
        getWalletDetails: false,
        calcWalletAttributes:false,
        userinfo:false,
        calUserRep:false,
        calcPreApproval:false,
        calcLaonSuccessProbability:false,
        calcCreditScore:false,
        fetchNFTsForOwner:false,
        fetchTokensForOwner:false,
        fetchTitleForOwner:false,
        generatePdf:false,
        getWalletNftsCount:false,
        getHighestLtvLoans:false
    },
    error: {
        getWalletAttributes: null,
        calcWalletAttributes:null,
        calcPreApproval:null,
        calcLaonSuccessProbability:null,
        calcCreditScore:null,
        fetchNFTsForOwner:null,
        fetchTokensForOwner:null,
        fetchTitleForOwner:null,
        generatePdf:null,
        getWalletNftsCount:null,
        getHighestLtvLoans:null
    }

}


const slice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {


        setMyValue: (state, action) => {
            state.address = action.payload;
            state.userinfo = action.payload;
          
          
          }
    
    },
   


    extraReducers: (builder) => {
        
        builder.addCase(getWalletAttributes.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            const walletattributes = JSON.parse(payload.attrs)
            
            state.userinfo = true;
            state.attribute = walletattributes
             
            console.log(walletattributes)
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;

            state.fetchingStatus.getWalletDetails = false;
            state.error.getWalletAttributes = null;
        })
        builder.addCase(getWalletAttributes.pending, (state, { payload }) => {
            state.fetchingStatus.getWalletDetails = true;
        })
        builder.addCase(getWalletAttributes.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.getWalletDetails = false;
        })

        builder.addCase(calcWalletAttributes.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            const walletattributes = JSON.parse(payload.attrs)
            state.userinfo = true;
            
          // console.log(walletattributes)
            state.attribute = walletattributes
            state.calUserRep = true;
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcWalletAttributes = false;
            state.error.calcWalletAttributes = null;
        })
        builder.addCase(calcWalletAttributes.pending, (state, { payload }) => {
            state.fetchingStatus.calcWalletAttributes = true;
        })
        builder.addCase(calcWalletAttributes.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcWalletAttributes = false;
        })
    
        
        builder.addCase(calcCreditScore.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.score = payload.score

            console.log(payload.score)
           
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcCreditScore = false;
            state.error.calcCreditScore = null;
        })
        builder.addCase(calcCreditScore.pending, (state, { payload }) => {
            state.fetchingStatus.calcCreditScore = true;
        })
        builder.addCase(calcCreditScore.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcCreditScore = false;
        })

        builder.addCase(calcPreApproval.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.preApprovalNftfi = payload.preApprovalNftfi
            state.preApprovalBendDao = payload.preApprovalBendDao
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcPreApproval = false;
            state.error.calcPreApproval = null;
        })
        builder.addCase(calcPreApproval.pending, (state, { payload }) => {
            state.fetchingStatus.calcPreApproval = true;
        })
        builder.addCase(calcPreApproval.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcPreApproval = false;
        })
        
    
        builder.addCase(calcLaonSuccessProbability.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.probability = payload.probability
          
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcLaonSuccessProbability = false;
            state.error.calcLaonSuccessProbability = null;
        })
        builder.addCase(calcLaonSuccessProbability.pending, (state, { payload }) => {
            state.fetchingStatus.calcLaonSuccessProbability = true;
        })
        builder.addCase(calcLaonSuccessProbability.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcLaonSuccessProbability = false;
        })
        
    

       
          builder.addCase(fetchNFTsForOwner.fulfilled,  (state, { payload })=> {
            if(!payload)return
             console.log(payload.ownedNfts.length);
             
             const nftstributes:OwnedNft[] = payload.ownedNfts
             state.nftsdata= nftstributes;
             state.nftsdataCount = payload.ownedNfts.length;
            console.log(nftstributes);
            state.fetchingStatus.fetchNFTsForOwner = false;
            state.error.fetchNFTsForOwner = null;
          
          })
          builder.addCase(fetchNFTsForOwner.pending,  (state, { payload })=> {
            state.fetchingStatus.fetchNFTsForOwner = true;
          })
          builder.addCase(fetchNFTsForOwner.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.fetchNFTsForOwner = false;
          })
          builder.addCase(fetchTokensForOwner.fulfilled,(state, { payload })=> {
            if(!payload)return
            // console.log(payload.tokens)
            // console.log(payload.tokens[0].rawBalance)
            const tokenstributes:OwnedToken[] = payload.tokens
             state.tokendata= tokenstributes;
             state.tokendataCount= payload.tokens[0].rawBalance
            // console.log(tokenstributes);
            state.fetchingStatus.fetchTokensForOwner = false;
            state.error.fetchTokensForOwner = null;
          
           
          })
          builder.addCase(fetchTokensForOwner.pending,(state, { payload }) => {
            state.fetchingStatus.fetchTokensForOwner = true;
          })
         builder.addCase(fetchTokensForOwner.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.fetchTokensForOwner = false;
          });

          builder.addCase(fetchTitleForOwner.fulfilled,(state, { payload })=> {
            if(!payload)return
            console.log(payload.ownedNfts)
            const titleOfOwneratriute:OwnedNft[] = payload.ownedNfts
             state.titleOfOwner= titleOfOwneratriute;
            console.log(titleOfOwneratriute);
            state.fetchingStatus.fetchTitleForOwner = false;
            state.error.fetchTitleForOwner = null;
           
          })
          builder.addCase(fetchTitleForOwner.pending,(state, { payload }) => {
            state.fetchingStatus.fetchTitleForOwner = true;
          })
         builder.addCase(fetchTitleForOwner.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.fetchTitleForOwner = false;
          });



          builder.addCase(generatePdf.fulfilled, (state, { payload  }) => {
            if(!payload)return
            console.log(payload)
            state.linkofreport = {payload}
            state.fetchingStatus.generatePdf = false;
            state.error.generatePdf = null;

           
          })
          builder.addCase(generatePdf.pending,(state, { payload }) => {
            state.fetchingStatus.generatePdf = true;
          })
        
          builder.addCase(generatePdf.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.generatePdf = false;
          });
      
    

    
          builder.addCase(getWalletNftsCount.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
             state.nftcounts =   payload
             
             console.log(payload,"count nfts"+state.nftcounts)
      
             
             state.fetchingStatus.getWalletNftsCount = false;
             state.error.getWalletNftsCount = null;
        })
        builder.addCase(getWalletNftsCount.pending, (state, { payload }) => {
             state.fetchingStatus.getWalletNftsCount = true;
        })
        builder.addCase(getWalletNftsCount.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.getWalletNftsCount = false;
        })
        


        builder.addCase(getHighestLtvLoans.fulfilled, (state, { payload}: any) => {
          console.log("payload.data.fulfilled ===>", payload)
          if(!payload)return
          
           const data =   payload.getHighestLtvLoans
       //    const data1 =   payload.getHighestLtvLoans[0].asset
    state.getHighestLtvLoans = data
            
           
           console.log("Loan Opportunities with data")
           console.log(payload.getHighestLtvLoans)
          //  console.log(getHighestLtvLoans[])
    
          
          state.fetchingStatus.getHighestLtvLoans = false;
          state.error.getHighestLtvLoans = null;
      })
      builder.addCase(getHighestLtvLoans.pending, (state, { payload }) => {
           state.fetchingStatus.getHighestLtvLoans = true;
      })
      builder.addCase(getHighestLtvLoans.rejected, (state, { payload, error }) => {
          const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
          console.log("payload.data.rejected ===>", err.errors?.[0]);
           state.fetchingStatus.getHighestLtvLoans = false;
      })

    
    }
});


export default slice.reducer;

export const {setMyValue ,} = slice.actions;

export { getWalletAttributes , getWalletNftsCount};