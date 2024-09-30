import React from 'react'
import './columncard.css'
import group1 from '../assets/group1.svg';
import group2 from '../assets/group2.svg';
import group3 from '../assets/group3.svg';
import group4 from '../assets/group4.svg';


export default function ColumnCard() {
  return (
    <div className="esayacessmain">
    <div className='title'>Beauty Selling <font color ='#F37974'>with</font> Digital Pattern.</div>
    <div className="row">
        <div className="column">
            <div className="card">
                <img src={group1} alt='IMG1'></img>
                <p>SUPPORT 24/7</p>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src={group2} alt='IMG2'></img>
                <p>ISLANDWIDE DELIVERY</p>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src={group3} alt='IMG3'></img>
                <p>REWARDS</p>
            </div>
        </div>

        <div className="column">
            <div className="card">
                <img src={group4} alt='IMG4'></img>
                <p>EASY RETURN</p>
            </div>
        </div>

    </div>
    </div>
  )
}
