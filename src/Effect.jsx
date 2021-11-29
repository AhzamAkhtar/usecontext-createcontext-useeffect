import React,{useState,useEffect} from 'react'
const Effect=()=>{
    const[num,setNum]=useState(0)
    const [nums,setNums]=useState(0)
    useEffect(()=>{
        alert("BUTTON CLICKED")
    },[num]) //USE [] INSTEAD OF [NUM] TO RENDER ALERT ONLY ONE TIME ON REFRESHING THE PAGE
    return(
        <>
            <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>
            <hr/>
            <button onClick={()=>{setNums(nums+1)}}>Click me {nums}</button>
        </>
    )
}
export default Effect