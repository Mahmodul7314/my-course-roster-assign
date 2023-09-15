/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
const Cart = ({allCourse}) => {
   


    
    return (
        <div className='cart-container'>
            <h3 className='creadit-hour'>Creadit Hour Remaining 7 hr</h3>
            <hr className='hrtext'></hr>
            <div>
                <h3 className='course-title'>Course Name</h3>
                <div className='course-item'>
             
                {
                   allCourse.map((course,idd)=> (
                   <li key={idd} className='li'>{course.title}</li>
                   ))
                }
                </div>
                <hr className='hrtext'></hr>
                <h3 className='credit-hour'>Total Credit Hour : 13</h3>
                
            </div>
            
        </div>
    );
};

export default Cart;