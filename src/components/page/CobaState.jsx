import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CobaState() {
   const [kalimat, setKalimat] = useState("Default")

   useEffect(() => {
    console.log("ini mounting dan Update");

    // clean up function
    return () => {
        console.log("Cleanup Function utawa WilUnmount");
    }
   }, [kalimat])
   
  return (
    <div>
        <p>{kalimat}</p>
        <button onClick={() => setKalimat("asdasd")}>Ganti Kalimat</button>
    </div>
  )
}
