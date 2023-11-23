import TweetEdictorButtons from '../components/TweetEdictorButtons'

const TwitterEdictorForm = () => {
  return (
    <div className="tweet-editor-form">
     <input className="tweet-editor-input" type="text" placeholder="What's happening?" />
     <TweetEdictorButtons />
     
     </div>
  )
}

export default TwitterEdictorForm