import React, { useEffect, useRef } from 'react';
import Jazzicon from 'react-jazzicon';



interface JazziconAvatarProps {
  address: string;
  diameter: number;
}

const Gettingavatarofowner: React.FC<JazziconAvatarProps> = ({ address, diameter }:{ address:string |undefined|null, diameter:number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content in the container
      containerRef.current.innerHTML = '';

      // Create a Jazzicon with the given Ethereum address and diameter
      // const jazzicon = Jazzicon(diameter, parseInt(address.slice(2, 10), 16));

      // Append the Jazzicon SVG to the container
      // containerRef.current.appendChild(jazzicon);
    }
  }, [address, diameter]);

  return (
    // <div ref={containerRef} style={{ width: diameter, height: diameter }}></div>
    <Jazzicon diameter={40} seed={Math.round( 10000000)} />
  );
};

export default Gettingavatarofowner;
