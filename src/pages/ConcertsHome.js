import React, { useState } from 'react';

export default function ConcertsHome() {

const [value, setValue] = useState()

  return (
<div className='Post'>
  <div className='post'>
    <div className='post__content'>
      <strong>Замок</strong>
      <div>находиться на Юге Эстонии</div>
    </div>
    <div className='post__btns'>
      <button>Удалить</button>
    </div>
  </div>
</div>
  )
}