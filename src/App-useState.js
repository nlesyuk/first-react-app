import React, {useState, useRef} from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'

function App() {
  const [posts, setPost] = useState([
    {id:1, title: 'JS', body: 'the best lang'},
    {id:2, title: 'JS', body: 'the best lang'},
    {id:3, title: 'JS', body: 'the best lang'},
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const bodyInputRef = useRef();

  function addNewPost(e) {
    e.preventDefault()
    // const bodyValue = bodyInputRef.current.value
    if(!title || !body) {
      return
    }

    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPost([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <from>
        {/* управляемый компонент */}
        <MyInput
          type="text"
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {/* НЕ управляемый\Не Контролируемый компонент */}
        {/*
          <input type="text" ref={bodyInputRef}/>
          <MyInput
            ref={bodyInputRef}
            type="text"
            placeholder='body'
          />
        */}
        <MyButton type='button' onClick={addNewPost}>submit</MyButton>
      </from>
      <PostList title='List of posts' posts={posts}/>
    </div>
  );
}

export default App;
