import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Aboutclass from "./Classcomponents/Aboutclass";
import Greeting from "./Greeting";

function App() {
  let name = "Vinayak";
  let age = 23;
  return (
    <>
    <h1>Hello Everyone ...</h1>
    <h3>Welcome to React!!!</h3>
    <Home />
    <Homeclass/>
    <About />
    <Aboutclass/>
    <Contact/>
    <Greeting fn={name} age={age} favcolor="orange"/>
    </>
  )
}

export default App;