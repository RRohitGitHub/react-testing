import Header from "./components/header/Header";
import './App.scss'
import Headline from "./components/headline/Headline";

const tempArr= [{
  fName:"Joe",
  lName:"biden",
  email:"abc@gmail.com",
  age:24,
  onlineStatus:1
}]

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
