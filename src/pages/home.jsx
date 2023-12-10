import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/Tweets';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';






function Home() {
  return (
<>
{/* <main  > */}

  <Sidebar/>
  <div className="timeline">

      <Header/>
      <TweetEditor/>
      <Tweets/>
  </div>
      <Trends />
    {/* </main> */}
   

    </>

  
    
  );
}

export default Home;