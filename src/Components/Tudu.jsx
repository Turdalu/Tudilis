import React, { useState } from 'react'
import Delleite from './Delleite'

const Tudu = () => {
    const [name,setName] = useState('')
    const [color,setColor] = useState('')
    const [arr,setArr] = useState([])

    const nameValue = (e) =>{
        setName(e.target.value)
    }

    const colorValue = (e) =>{
        setColor(e.target.value)
    }

    const clickHandler = () =>{
        const obj = {
            name:name,
            color:color,
            id: Math.random()   // .toString()
          
        }
        setArr((arr) => [...arr,obj])
    }

    const save = (id) => {
        console.log(id);
        const newData = arr.filter((el) => el.id !== id)
        setArr(newData)           
    }
   

  return (
    <div>
        <input onChange={nameValue} type="text" placeholder='NAME' />
        <input onChange={colorValue} type="text" placeholder='celor'/>
        <button onClick={clickHandler}>CLICK</button>

        {arr.map((el)=>(
        <>
            <h1 style={{backgroundColor:el.color}}>{el.name}</h1>
            <Delleite onSave = {save} id={el.id}/>
        </>
        ))}
    </div>
  )
}

export default Tudu