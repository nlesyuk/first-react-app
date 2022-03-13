import React from "react";
import MyButton from './UI/button/MyButton.jsx'

export default function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <p>
        {props.post.body}
        </p>
      </div>
      <div className="post__btn">
        <MyButton onClick={ () => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  )
}
