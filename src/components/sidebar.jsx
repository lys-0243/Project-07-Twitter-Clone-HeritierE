import{NavLink} from 'react-router-dom'
import Twitter from '../images/Twitter.svg'
import Home from '../images/Home-Fill.svg'
import Explore from '../images/Explore.svg'
import Notifications from '../images/Notifications.svg'
import Bookmarks from '../images/Bookmarks.svg'
import Lists from '../images/Lists.svg'
import Profile from '../images/Profile.svg'
import More from '../images/More.svg'

const Sidebar = () => {
  return (
    <>
 <div className='sidebar'>
   <ul className='content'>

    <div >
    <li>
    <img src={Twitter} alt="" />
</li>

    </div>


<li className='content'>
    <img src={Home} alt="" />
  <span> Home</span>
  
</li>





<li className='content'>
    <img src={Explore} alt=" " />
    <span>Explore </span>
</li>




  
  <li className='content'>
        <img src={Notifications} alt=" " />
        <span>Notifications</span>
    </li>

  

  
   <li className='content'>
        <img src={Bookmarks} alt="" />
        <span>BooksMarks </span>
    </li>

   


    
    <li className='content'>
        <img src={Lists} alt="" />
        <span>Lists</span>
    
    </li>
    
    
    
    <li className='content'>
    
        <img src={Profile} alt="" />
        <span>Profile</span>
       
    </li>

    
    


<li className='content'>
        <img src={More} alt="" />
        <span>More</span>
       
        
    </li>

    
    </ul>

    <button className='button'>tweet</button>
    </div>
    </>
    
    
  )
}

export default Sidebar