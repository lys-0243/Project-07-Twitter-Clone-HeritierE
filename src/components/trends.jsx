import React from 'react'
import CNN from '../images/CNN.png'
import Twitter from '../images/image2.svg'
import Times from '../images/image1.svg'



const trends = () => {
  return (
<>
<div  className='sidebar'> 

<div className='search'>
  <img src="" alt="" />
  <input  placeholder='Search Twitter' type="text" />
</div>


<div className='Trends'>

 <div >
  <h2>Trends for you</h2>
  <img src="" alt="" />
 </div>

 <div>
  <p> Trending for turkey</p>
  <p>#SQUID</p>
  <p>2,006 Tweets</p>
  
  <div>
  <img src="" alt="" />
 </div>
 </div>
 <div>
  <p> Trending for turkey</p>
  <p>#SQUID</p>
  <p>2,006 Tweets</p>

  <div>
  <img src="" alt="" />
 </div>
 </div>
 <div>
  <p> Trending for turkey</p>
  <p>#SQUID</p>
  <p>2,006 Tweets</p>

  <div>
  <img src="" alt="" />
 </div>
 </div>
 <div>
  <p> Trending for turkey</p>
  <p>#SQUID</p>
  <p>2,006 Tweets</p>

  <div>
  <img src="" alt="" />
 </div>
 <a href="#">Show More</a>
 </div>
 </div>


 

<div>
<h2>who to follow </h2>
<img src={Times} alt="" />
<p> The New York Times</p>
<p>@nytimes</p>
<button className='buttons'>Follow</button>
</div>

<div>

<img className='' src={CNN} alt="" />
<p> The New York Times</p>
<p>@CNN</p>
<button className='buttons'>Follow</button>
</div>




<div>

<img className='' src={Twitter} alt="" />
<p> The New York Times</p>
<p>@Twitter</p>
<button className='buttons'>Follow</button>
</div>

<a href="#">Show More</a>




 </div>



    </>
  )
}

export default trends