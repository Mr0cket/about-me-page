import React from 'react'

function Comment(props) {
  const comment = props.comment;
  return (
    <div className='comment'>
      <a href={ comment?.email ? 'mailto: ' + comment.email : '#null'}> {comment.name}</a>
      <p>posted on: {new Date(comment.createdAt).toLocaleDateString({weekday: 'long', year: 'long'})}</p>
      <p>message: {comment.message} </p>
    </div>
  )
}

export default Comment