import React from 'react'
import Header from '../components/Header'
import './home.css';
import Footer from '../components/Footer';
import ColumnCard from '../components/ColumnCard';
import ParaContent from '../components/ParaContent';

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="midcontent">
        <h1>Vogue.Love.Sense</h1>
        <p>Bringing fashionable and trendy clothing at affordable prices while
          providing excellent customer experience, are Vogue’s core values
        </p>
        <pre></pre>
        <button className='shopnow'>SHOP NOW</button>
      </div>
      <div className="contentbox">'
        <div className='paracontent'>
          <div>By us, with your styling.<font color ='#EE9591'>.</font></div>
          <p>
            Building the business from the ground up, they prospered by putting their customers first. Vogue thrives on the close relationship with its customers and is continuously responding by evolving to their needs.
          </p>
          <hr></hr>
          <ParaContent/>
        </div>
      </div>
      <div className="easyaccess">
      <ColumnCard/>
      </div>
      <div className="rectangle">
        
      </div>
      <div className="bodycontent">

      </div>
      <Footer/>
    </div>
  )
}
