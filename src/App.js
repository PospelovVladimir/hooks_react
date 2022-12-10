import "./App.css";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const userPassword = useInput("");
  const showData = () => console.log(`${username.value}, ${userPassword.value}`);

  return (
    <div>
      <input type="text" placeholder="username" {...username}></input>
      <input type="password" placeholder="userpassword" {...userPassword}></input>
      <button onClick={() => showData()}>show</button>
    </div>
  );
}

export default App;
