import React, { useState } from 'react'

function Fruits() {
  const [fruits, setFruits] = useState(['Apple', 'Kiwi'])
  const [fname, setFname] = useState("");

  const handleChange = (e) => {
    setFname(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(fname);
    setFruits([...fruits,fname])
    setFname("")
  }
  return (
    <div>
      <input type="text" placeholder='Enter The Fruit Name' onChange={handleChange}value={fname}/>
      <input type="submit" onClick={handleClick} value="Add"/>
    </div>
  )
}

export default Fruits
