import { useState } from "react";
import "./App.css";
import Hover from "./components/Hover";
import useDebounce from "./hooks/useDebounce";
import List from "./components/List";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput("");
  const userPassword = useInput("");
  const showData = () => console.log(`${username.value}, ${userPassword.value}`);

  const [searchText, setSearchText] = useState("");

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const searchDebounce = useDebounce(search, 3000);

  const callback = (e) => {
    setSearchText(e.target.value);
    searchDebounce(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="username" {...username}></input>
      <input type="password" placeholder="userpassword" {...userPassword}></input>
      <button onClick={() => showData()}>show</button>
      <Hover />
      <List />
      <input type="text" placeholder="Поисковой запрос" value={searchText} onChange={(e) => callback(e)} />
    </div>
  );
}

export default App;
