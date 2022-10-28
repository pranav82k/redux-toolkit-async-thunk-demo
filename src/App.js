import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux/slices/counterSlices";
// import './App.css';
// import logo from "./logo.svg";

function App() {
  // Create an instanceof dispatch
  const dispatch = useDispatch();

  // Fetch the posts when page is loaded
  useEffect(() => {
    // Dispatch the action to fetch the postsList
    dispatch(fetchPost());
  }, []);
  
  // Fetch the posts from the state
  const posts = useSelector(state => state?.post);
  const { loading, postsList } = posts;
  // console.log(posts);

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Post List</h2>
      <hr/>
      {/* Check the loading and rander the list */}
      {loading ? <h2>Loading...</h2> : postsList?.map(post =>(
          <div key={post?.id}>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;
