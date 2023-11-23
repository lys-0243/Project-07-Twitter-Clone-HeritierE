import TimelineProp  from '../images/Timeline-Prop.svg'

function Header(){
  return(
 <div className="header">
<div className="page-title" >Home</div>
<img className='top-tweets' src={TimelineProp} alt="" />
      
  </div>
  )
}

export default Header;