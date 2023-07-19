import React, { useState } from 'react'
import Bacdrop from '../Bacdrop'
import { styled } from 'styled-components'

const Delleite = (props) =>{
    const [deleit,setDeleite] = useState('')
    const [state, setState] = useState(false)

    const clickHandlerr = (e) =>{
        setDeleite(e.target.value)
        setState(true)
    }

    const close = () => {
      setState(false)
    }

    const deleteItem = () => {
      props.onSave(props.id)
      setState(false)
    }
  
  return (
    <div>
     <button onClick={clickHandlerr}>delleit</button>
    {state && <Bacdrop>
        <h2>Are you sure?</h2>
        <hr />
        <Buttons>
        <button onClick={close}>no</button>
        <button onClick={deleteItem}>yes</button>
        </Buttons>
      </Bacdrop>}
    </div>
  )
}

export default Delleite

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`