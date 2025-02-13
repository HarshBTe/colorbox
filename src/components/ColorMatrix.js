import React, { useState } from 'react'
import "./ColorMatrix.css"

const ColorMatrix = () => {
   const [matrix, setMatrix] = useState(Array(9).fill(null));
   const [clickOrder, setClickOrder] = useState([]);

   const handleClick = (index) => {
    if(matrix[index] === null){
        const newMatrix = [...matrix]
        newMatrix[index] = "green"
        setMatrix(newMatrix)
        setClickOrder([...clickOrder, index])

        if(clickOrder.length === 8){
            setTimeout(() => {
                const newMatrixOrange = Array(9).fill("orange")
                setMatrix(newMatrixOrange)
            }, 1000)
        }
    }
   }

  return (
    <div className='matrix'>
      {matrix.map((color, index) => (
        <div key={index} className='box' style={{backgroundColor: color}} onClick={() => handleClick(index)} />
      ))}
    </div>
  )
}

export default ColorMatrix
