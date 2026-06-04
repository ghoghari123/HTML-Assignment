import React, { useEffect, useRef, useState } from 'react'

function Home() {
    const count = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <form action="">
                <input type="text" name="" id="" ref={inputRef} />
            </form>
            <button onClick={() => {
                count.current += 1
                // console.log(count.current);
            }}>+</button>
            {count.current}
            <button onClick={() => {
                count.current -= 1
                // console.log(count.current);
            }}>-</button>
        </div>
    )
}

export default Home
