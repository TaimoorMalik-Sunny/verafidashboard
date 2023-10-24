import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardviewB() {
  return (
    <Card className="rounded-lg" sx={{ maxWidth: 345 }}>
    <CardMedia
    className=" absolute h-48 w-48 rounded-lg"
     component="img"
     
     image="./MadLabs.jpeg"
     alt="green iguana"
   
   />
 <CardActionArea>
  
   <CardContent className=" relative h-24  mt-32 bg-opacity-90 backdrop-blur-lg rounded drop-shadow-lg">
  
     
     <h4 className="scroll-m-20 text-xs font-semibold tracking-tight">
     Mad Labs
</h4>
    
     <ul className="my-2 ml-2 list-disc [&>li]:mt-0">
     <li className=" text-xs">Loan:3 ETH</li>
      <li className="text-xs">Duration:1months</li>
      <li className="text-xs">Loan APR:11 %</li>
</ul>
   </CardContent>
 </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
