import React from 'react'
import More from '../images/More-2.svg'


const Trends = () => {
  return (
    <>
      <div className='sidebar'>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Twitter"
          />
         
        </div>

        <div className=" Trends">
          <div>
            <h1> Trends For you</h1>
            <img src="" alt="" />
          </div>

          <div className="Trend">
            <p>Trending Turquey</p>
            <span> #SQUID </span>
            <p>2,055 Tweets</p>
          </div>

          <div className="Trend">
            <p>Trending Turquey</p>
            <span> #SQUID </span>
            <img src={More-2} alt="" />
            <p>2,055 Tweets</p>
          </div>

          <div className="Trend">
            <p>Trending Turquey</p>
            
            <span> #SQUID </span>
            <p>2,055 Tweets</p>
          </div>
          <span>Show More</span>
        </div>
       

<div className='follow'>
  


</div>


      </div>

      


      
      
    </>
  );
}

export default Trends