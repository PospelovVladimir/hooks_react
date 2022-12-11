import "./App.css";
import Hover from "./components/Hover";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const userPassword = useInput("");
  const showData = () => console.log(`${username.value}, ${userPassword.value}`);

  const showEffect = () => console.log("yes!");
  const hideEffect = () => console.log("no!");

  return (
    <div>
      <input type="text" placeholder="username" {...username}></input>
      <input type="password" placeholder="userpassword" {...userPassword}></input>
      <button onClick={() => showData()}>show</button>
      <Hover />
    </div>
  );
}

export default App;
