Skip to content


  
Pull requests 
Issues 
Marketplace 
Explore 


 



This repository has been archived by the owner. It is now read-only. 
Watch 
185 
Star 
9.7k 
Fork 
951 

microsoft/TypeScript-React-Starter Archived 
Code 
Issues 120 
Pull requests 83 
Actions 
Projects 0 
Wiki 
Security 
Insights 
Branch: master 
TypeScript-React-Starter/src/components/Hello.tsx 
Find file 
Copy path 
 bowdenk7 initial commit 
f9fbbdd on May 9, 2017 
1 contributor 
36 lines (29 sloc) 780 Bytes 
Raw
Blame
History


import * as React from 'react';

import './Hello.css';



export interface Props {

  name: string;

  enthusiasmLevel?: number;

  onIncrement?: () => void;

  onDecrement?: () => void;

}



function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {

  if (enthusiasmLevel <= 0) {

    throw new Error('You could be a little more enthusiastic. :D');

  }



  return (

    <div className="hello">

      <div className="greeting">

        Hello {name + getExclamationMarks(enthusiasmLevel)}

      </div>

      <div>

        <button onClick={onDecrement}>-</button>

        <button onClick={onIncrement}>+</button>

      </div>

    </div>

  );

}



export default Hello;



// helpers


function getExclamationMarks(numChars: number) {

  return Array(numChars + 1).join('!');

}
