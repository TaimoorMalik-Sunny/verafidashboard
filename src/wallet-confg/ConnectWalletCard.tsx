// ./src/components/connectWalletCard.tsx
"use client";

import { useState } from "react";


export const ConnectWalletCard = () => {
 const [connectionStatus, setConnectionStatus] = useState("");

  // Define 'ethereum' as 'any' to suppress TypeScript error
  const ethereum = (window as any).ethereum;
  

  // Function to handle the wallet connection
 const connectToWallet = async () => {
    if (ethereum) {
      try {
        // Requesting access to MetaMask wallet
       const etherValue= await ethereum.request({ method: "eth_requestAccounts" });
     
       console.log(etherValue)
        setConnectionStatus("Successfully Connected");
      } catch (error) {
        setConnectionStatus("Connection Failed");
        console.error("MetaMask connection error:", error);
      }
    } else {
      setConnectionStatus("MetaMask Not Detected");
    }
 
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-md text-center">
        {connectionStatus ? (
          <p className="text-[#1B1AF5] font-semibold">{connectionStatus}</p>
        ) : (
          <button
            className="bg-[#1B1AF5] hover:bg-blue-600 text-white py-2 px-6 rounded-full"
            onClick={connectToWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};
