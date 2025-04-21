"use client"

import { createContext, useEffect, useState } from "react"
export const JokesContext = createContext()


const JokesProvider = ({children}) => {
    const [jokes , setJokes]= useState([])

    useEffect(()=>{
        const fetchJokes=async ()=>{
            const res =await fetch("https://raw.githubusercontent.com/Nebula-gramm/bangla_jokes/refs/heads/main/bangla_jokes.json")
            const data =await res.json()
            setJokes(data)
        }
        fetchJokes()
    },[])
    return (
        <JokesContext.Provider value={jokes}>
            {children}
        </JokesContext.Provider>
    );
};

export default JokesProvider;

