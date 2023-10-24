import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { StaticImageData } from 'next/image';
import { useAppSelector } from '@/redux/store';


interface CardviewProps {
  title: string;
  balance: string |number;
  loanDurationSec: string |number;
  ltv: string |number;
  titleimage:  string ;
}


export default function CardviewA({title,balance,loanDurationSec,ltv,titleimage}:CardviewProps) {
  
  return (
    <div className="">
    
   
    <Card className="rounded-lg  bg-slate-500 " sx={{ maxWidth: 345 }}>
         <CardMedia
         className=" absolute h-48 w-48 rounded-lg"
          component="img"
          
         // image="./BoredApeYachtClub.jpg"
         image={titleimage}
        
          alt="green iguana"
        
        />
      <CardActionArea>
       
        <CardContent className=" relative h-24  mt-32 bg-opacity-90 backdrop-blur-lg rounded drop-shadow-lg">
       
          
          <h4 className="scroll-m-20 text-xs font-semibold tracking-tight">
          {/* Bored ApeYacht  */}
          {title}
    </h4>
         
          <ul className="my-2 ml-2 list-disc [&>li]:mt-0">
      <li className=" text-xs">Loan:{balance} ETH</li>
      <li className="text-xs">Duration:{loanDurationSec}months</li>
      <li className="text-xs">Loan APR:{ltv} %</li>
    </ul>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </div>
  );
}


