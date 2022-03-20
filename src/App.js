import React, {useState, useRef, useMemo, useEffect} from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostForm from './components/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyModal from './components/UI/MyModal/MyModal';
import {usePosts} from './hooks/usePost'
import axios from 'axios';


function App() {
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''}) // search & filter
  // list of posts
  const [posts, setPosts] = useState([])
  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }
  function removePost(post) {
    setPosts(posts.filter(v => v.id !== post.id))
  }
  async function fetchPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query) // custom hook

  // lifecycle hooks, (if deps - like watch properties in Vue)
  useEffect(() => {
    console.log('mounted')
    fetchPost()

    return () => {
      console.log('unmounted')
    }
  }, [])

  return (
    <div className="App">
      <button type="button" onClick={fetchPost}>get posts</button>
      <MyButton onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '10px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList title='List of posts' posts={sortedAndSearchedPost} remove={removePost}/>
    </div>
  );
}

export default App;
