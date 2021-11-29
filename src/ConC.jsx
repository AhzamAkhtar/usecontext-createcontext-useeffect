import React from 'react'
import { FirstName, LastName } from './App'
const ConC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>
                                        <h1> my name is {fname} {lname}</h1>
                                    </h1>
                                );
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}
export default ConC