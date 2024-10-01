import React from 'react'
import './card.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';

export default function Card() {
  return (
    <div className="maincontent">
        <div className="pageTitle"><h1>NEW ARRIVALS</h1></div>
        <div className="cardset">
            <div className="itemcard">
                <div className="itemImg">
                    <img src={img1} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img2} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img3} width={'100%'} height={'100%'} ></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img4} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>
        </div>

        <div className="pageTitle"><h1>BUY 1 GET 2ND ITEM FREE</h1></div>
        <div className="cardset">
            <div className="itemcard">
                <div className="itemImg">
                    <img src={img5} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img6} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img7} width={'100%'} height={'100%'} ></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img8} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>
        </div>

        <div className="pageTitle"><h1>BEST SELLER</h1></div>
        <div className="cardset">
            <div className="itemcard">
                <div className="itemImg">
                    <img src={img9} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img10} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img11} width={'100%'} height={'100%'} ></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>

            <div className="itemcard">
                <div className="itemImg">
                    <img src={img12} width={'274px'} height={'320px'}></img>
                </div>
                <p className='itemName'>WAIST TIE UP BASIC DRESS</p>
                <p className='itemPrice'>LKR 6,025.00</p>
            </div>
        </div>
    </div>
  )
} 