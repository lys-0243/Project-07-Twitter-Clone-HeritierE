const TweetEditor = () => {
  return (
  
    <div className="tweet-editor">
      <img src={'/img/profile-photo.png'} alt="" />
      
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" type="text" placeholder="What's happening?" /></div>
      
      <div className="tweet-editor-buttons">
        <button className="tweet-editor-button">Tweet</button>
      </div>
      </div>
      
    
    
  );
};

export default TweetEditor;