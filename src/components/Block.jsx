import React from 'react'

function Block({num,key}) {
  return (
    <div style={{ color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF"}} className='block'>
        {num}
    </div>
  )
}

export default Block