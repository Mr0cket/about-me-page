import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import Comment from './Comment'
// create a View to display all Comments posted with form.
const apiUrl = 'http://172.105.93.205/contacts'

function CommentsSection() {
  const [comments, setComments] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [commentList, setCommentList] = useState([])
  const getComments = async () => {
    const rawData = await fetch(apiUrl)
    const comments = await rawData.json()
    setComments(await comments);
  }
  const blendStyle = {
    background: "linear-gradient(to bottom, rgb(32, 42, 54), #373737)",
    height: "5px",
    }
  useEffect( () => {
    if (_.isEmpty(comments)) {
      getComments()
    } else if (_.isEmpty(commentList)) {
      setCommentList(comments.map( comment => <Comment key={comment.id} comment={comment}/> ))
      setIsLoaded(true)
    }
  }, [comments, commentList])
  
  if (!isLoaded) return (
    <div className='section-containers' id="comments">
      <div style={blendStyle}></div>
      <h2>Loading...</h2>
    </div>)
  else return (
    <div id="comments" className='section-containers'>
      {commentList}
    </div>
  )
}

export default CommentsSection