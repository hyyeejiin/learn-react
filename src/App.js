 import Card from "./components/Card";
 import Counter from "./components/Counter";

function App() {
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
    </div>
  );
}

export default App;
