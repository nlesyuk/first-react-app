import React, {useState, useRef, useMemo} from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostForm from './components/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'
import PostFilter from './components/PostFilter.jsx'

function App() {
  // list of posts
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', body: 'lang'},
    {id:2, title: 'Vue', body: 'easy freamwork'},
    {id:3, title: 'React', body: 'middle freamwork'},
  ])
  function createPost(newPost) {
    setPosts([...posts, newPost])
  }
  function removePost(post) {
    setPosts(posts.filter(v => v.id !== post.id))
  }

  // search & filter
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedPost = useMemo(() => { // the same as computed properties in Vue
    return filter.sort
      ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts
  }, [filter.sort, posts]) // callback will be called while any variables from the array are changed

  const sortedAndSearchedPost = useMemo(() => {
    const searchQueryLowerCase = `${filter.query}`.toLowerCase()
    return searchQueryLowerCase
      ? [...posts].filter(p => p.title?.toLowerCase().includes(searchQueryLowerCase) || p.body?.toLowerCase().includes(searchQueryLowerCase))
      : sortedPost
  }, [filter.query, sortedPost])


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '10px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {
        sortedAndSearchedPost.length
          ? <PostList title='List of posts' posts={sortedAndSearchedPost} remove={removePost}/>
          : <h1 style={{textAlign: 'center'}}>empty</h1>
      }
    </div>
  );
}

export default App;
