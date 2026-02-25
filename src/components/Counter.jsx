import React, { useState } from "react";

const Counter = () => {

    // logic
    //let num = 0 ;
    const [num, setNum] = useState(0) ; //useState는 데이터와 함수를 반환

    const handleIncrease = () => {
        //num = num + 1 ;
        //num += 1;
        setNum(num+1);
        console.log("🚀 ~ handleIncrease ~ num :", num )
    }

    const handleDecrease = () => {
        //num = num + 1 ;
        //num += 1;
        setNum(num-1);
        console.log("🚀 ~ handleDecrease ~ num :", num )
    }
 

  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button type="button" onClick={handleIncrease}>+1</button>
        <button type="button" onClick={handleDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
