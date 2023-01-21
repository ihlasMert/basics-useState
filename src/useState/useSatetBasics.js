import React, { useState } from 'react'

const Example = () => {
  const [text, setText] = useState('random text')

  const handleClick = () => {
    if (text === 'random text') {
      setText('nadir text')
    } else {
      setText('random text')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick} type='button' className='btn'></button>
    </React.Fragment>
  )
}

export default Example
