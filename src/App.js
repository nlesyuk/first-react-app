import React, {useState, useRef} from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostForm from './components/PostForm.jsx'

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', body: 'the best lang'},
    {id:2, title: 'JS', body: 'the best lang'},
    {id:3, title: 'JS', body: 'the best lang'},
  ])

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }
  function removePost(post) {
    setPosts(posts.filter(v => v.id != post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
        ? <PostList title='List of posts' posts={posts} remove={removePost}/>
        : <div>empty</div>
      }
    </div>
  );
}

export default App;
