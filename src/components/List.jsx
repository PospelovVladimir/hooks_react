import { useRef, useState } from "react";
import usePagination from "../hooks/usePagination";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limitPages, setLimitPages] = useState(5);
  const refParent = useRef();
  const refChild = useRef();

  const postsFetch = (page, limitPages) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limitPages}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts([...posts, ...json]);
        setPage(page + 1);
      });
  };

  usePagination(refParent, refChild, () => postsFetch(page, limitPages));

  return (
    <div ref={refParent} style={{ margin: "10px", maxHeight: "500px", overflowY: "scroll" }}>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ background: "#dbdbdb", padding: "5px", marginBottom: "5px" }}>
            <h3>{post.title}</h3>
            <h4>id: {post.id}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
      <div
        ref={refChild}
        className="post__controll"
        style={{ width: "100%", height: "15px", background: "green" }}
      ></div>
    </div>
  );
};

export default List;
