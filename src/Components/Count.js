import React, { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(props.initialCount);
    return (
      <div className='counter'>
        {props.player} win Count: ( {count} )
        <button onClick={() => setCount(props.initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      </div>
    );
  }

  export default Counter