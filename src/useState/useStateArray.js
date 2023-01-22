import React from 'react'
import { data } from '../data'

const useStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  )
}

export default useStateArray
