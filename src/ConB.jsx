/*import React from 'react'
import ConC from "./ConC"
const ConB=()=>{
    return(
        <ConC/>
    )
}
export default ConB*/

//USECONTEXT
import React,{useContext} from 'react'
import { FirstName,LastName} from './App';
const ConB=()=>{
    const fname=useContext(FirstName)
    const lname=useContext(LastName)
    return(
        <h1>
            MY NAME IS {fname} {lname}
        </h1>
    )
}
export default ConB