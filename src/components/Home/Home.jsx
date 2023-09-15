/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';




const Home = () => {
   
    const [courses,setCourses] =useState ([]);
    const [allCourse, setAllCourse] = useState([]);
    const [allTotalHourse,setTotalHourse] = useState(0);

    useEffect(()=>{
        fetch('../../../public/data.json')
        .then((res) => res.json())
        .then((data) => setCourses(data));
    },[]);

const handleSelect =(course) =>{

 const isExist = allCourse.find((item) =>item.id == course.id);
 let count = course.credit_hours;
 if(isExist){
  return alert('you are added one time this')
   
 }else{
    allCourse.forEach((item) =>{
     count = count + item.credit_hours;
    });
    
  
    setAllCourse([...allCourse,course]);
    setTotalHourse(count);
 }
 
    
}
// console.log(allCourse);


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
                            <p className='price'>Price : {course.price}</p>
                            <p className='hours'>Credit : {course.credit_hours}hr</p>
                        </div>
                        <button onClick={()=>handleSelect(course)} className='btn'>Select</button>
                    </div>

                    ))
                 }
                  
                </div>
                <div className="cart-container">
                    <Cart 
                    allCourse={allCourse}
                    allTotalHourse={allTotalHourse}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;