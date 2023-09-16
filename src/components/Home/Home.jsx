/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import {TfiMoney} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
// import { FiDollarSign } from 'react-icons/fa';


const Home = () => {
    const [courses,setCourses] =useState ([]);
    const [allCourse, setAllCourse] = useState([]);
    const [allTotalHourse,setTotalHourse] = useState(0);
    const [allRemainingHourse, setRemainingHourse] = useState(0);


    useEffect(()=>{
        fetch('./data.json')
        .then((res) => res.json())
        .then((data) => setCourses(data));
    },[]);

const handleSelect =(course) =>{

 const isExist = allCourse.find((item) =>item.id == course.id);
 let count = course.credit_hours;
 if(isExist){
    toast.error("You Can't Select Same Course Twice !");
   
 }else{
    allCourse.forEach((item) =>{
     count = count + item.credit_hours;
    });
    if(count>20){
        toast.error("You have added your maximum credit hourse. Can't add more !");
    }else{
        const remainingHourse = 20 - count;
        setAllCourse([...allCourse,course]);
        setTotalHourse(count);
    
        setRemainingHourse(remainingHourse);
    }
//   const remainingHourse = 20 - count;
//  setRemainingHourse(remainingHourse);

 }
   
}
    return (
        <div>
            <h1 className='course-regi-title'>Course Registration</h1>
            <div className="home-container">
                <div className="card-container">
                    {
                    courses.map((course,idx)=>(
                        <div key={idx} className="card">
                        <img className='img' src={course.image} alt="" />

                        <h1 className='title'>{course.title}</h1>

                        <p className='description'>{course.description}
                        </p>
                        <div className='price-credit-container'>
                            <img className='img-png' src="https://i.ibb.co/80dvYhg/icons8-dollar-24.png" alt="" />
                            <p className='price'>Price : {course.price}</p>
                            <img className='img-png' src="https://i.ibb.co/C9fRmM3/icons8-open-book-24.png" alt="" />
                            <p className='hours'>Credit : {course.credit_hours}hr</p>
                        </div>
                        <button onClick= {()=>handleSelect(course)} className='btn'>Select</button>
                        <Toaster />
                    </div>

                    ))
                 }
                  
                </div>
                <div className="cart-container">
                    <Cart 
                    allCourse = {allCourse}
                    allTotalHourse = {allTotalHourse}
                    allRemainingHourse = {allRemainingHourse}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;