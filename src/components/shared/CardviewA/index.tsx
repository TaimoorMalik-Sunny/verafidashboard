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
  apr: string |number;
  ltv: string |number;
  titleimage:  string ;
}


export default function CardviewA({title,balance,apr,ltv,titleimage}:CardviewProps) {
  
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
     
       
        <div className=" relative h-24 mt-28 bg-opacity-90 backdrop-blur-lg rounded drop-shadow-lg ">
       <h4 className=" text-left ml-2 text-xs font-semibold ">
          {/* Bored ApeYacht  */}
          {title}
        </h4>  
      <ul className="my-2 ml-2 list-disc">
      <li className=" text-xs">Loan:${balance}</li>
      <li className="text-xs">LTV:{ltv}</li>
      <li className="text-xs">Loan APR:{apr} %</li>
    </ul>
        </div>
     
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </div>
  );
}


