"use client"

import { JokesContext } from "@/Context/GetJokes";
import { useContext, useState } from "react";



export default function Home() {


  const jokes = useContext(JokesContext)
  const [index,setIndex] = useState(0)
  if (!jokes || jokes.length === 0) {
    return <p>Loading jokes...</p>
  }
  const joke = jokes[index]
  const strJoke = joke.A
  const lines = strJoke.split("\n")
  return (
    <div>
      <div className="flex flex-1 min-h-0">
        <aside className="w-1/4 overflow-y-auto flex justify-center h-[calc(100vh-120px)] p-4">
          <ul>
            {jokes.map((joke, indexLi)=>(
              <li key={indexLi} onClick={()=>{setIndex(indexLi)}} className="hover:cursor-pointer">{joke.Title}</li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 min-h-0 flex">
          <article className="overflow-y-auto flex-row px-16 py-12">
            <h1 className="text-2xl font-bold mb-2">{joke.Title}</h1>
            <div>
             {lines.map((line , index)=>(<p key={index}>{line}</p>))}
            </div>

            <div className="flex justify-between font-bold my-4 text-lg">
              <button onClick={()=>{setIndex(index=>index-1)}} className="hover:cursor-pointer">Previous</button>
              <button onClick={()=>{setIndex(index=> index+1)}} className="hover:cursor-pointer">Next</button>
            </div> {/* ✅ Move this inside article before closing it */}
          </article>
        </main>
      </div>
    </div>
  );
}

