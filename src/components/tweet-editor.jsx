 
import TwitterEdictorForm  from '../components/twitterForm';

 
const TweetEditor = () => {
  return (
  
    <div className="tweet-editor">
      <img className='avatar img ' src={'/img/profile-photo.png'}  />
      <TwitterEdictorForm/>
     

      </div>
      
  );
};

export default TweetEditor;