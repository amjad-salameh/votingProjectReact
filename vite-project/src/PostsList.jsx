import { Link } from "react-router-dom";
import { postsContext } from "./contexts/PostsContext";
import { useContext } from "react";

export default function PostsList() {
  const posts = useContext(postsContext);
  let postsList = posts.map((post) => {
    return (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <div
          style={{
            background: "orange",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}
