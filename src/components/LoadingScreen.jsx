import { useEffect } from "react";
import { useState } from "react"

export const LoadingScreen=({onComplete})=>{

    const [text,setText]=useState("");
    const fulltext="<Hello World />";
useEffect(()=>{
    let index=0;
    const interval =setInterval(()=>{
        setText(fulltext.substring(0,index));
        index++;

        if(index>fulltext.length){
            clearInterval(interval);
            setTimeout(()=>{
                onComplete();
            },1000);
        }
    },100);
    return ()=>clearInterval(interval);
},[onComplete])
    return(
   <div className="fixed inset-0 z-50 bg-[#f9f7f3] text-[#f7a072] flex flex-col items-center justify-center">
    <div className="mb-4 text-4xl font-mono font-bold ">
{text} <span className="animate-blink ml-1">|</span>
    </div>
<div className="w-[200px] h-[2px] bg-[#b5e2fa] rounded relative overflow-hidden">
<div className="w-[40%] h-full bg-[#0fa3b1] shadow-[0_0_15px_#3b82f6] animate-loading-bar">
    </div>

</div>
   </div>
    )
}