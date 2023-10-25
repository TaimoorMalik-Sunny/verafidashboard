'use client';
import React from 'react'


import { Progress } from 'flowbite-react';

interface PrograssProps {
  value: number;}
export default function LabelPositions({value}:PrograssProps) {
  return (
    <Progress
      labelProgress
      labelText
      progress={value}
      progressLabelPosition="outside"
      size="lg"
      textLabel="Blue Chip"
      textLabelPosition="outside"
      color="indigo"
      
      
      
      
    />
  )
}





