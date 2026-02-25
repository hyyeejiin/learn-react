import React from 'react'
//import Card from "./components/Card";
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Test = () => {

 const history = useNavigate();

  const handleClick = (data) => {
    console.log("클릭!!!", data);
  }

  return (
    <div className="App">
      <Card username={"햄찌"} onbuttonclick={handleClick}/>
      <Card username={"혜진"} sale={50} onbuttonclick={handleClick}/>
      <Card username={"목욜"} sale={30} onbuttonclick={handleClick}/>
      <Card sale={0} onbuttonclick={handleClick}/>
      {/*Counter*/}
      <button type='button' onClick={useNavigate()} >Chat 페이지로 이동</button>
    </div>
  );
}

export default Test
