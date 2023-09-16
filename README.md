# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




 Project Features: 

* Course Listing and their Total Hourse and credit remaining hourse listing.
* React hot toast for error message showing.
* Responsive app for mobile and tablet users.


How I managed useState or State Hooks to create This project :

In the Home component, I used 4 state Hooks to build this project. At first, I used   
const [courses,setCourses] =useState ([]); 
 state to put fetches data. I set Fetche's data on setCourses then it will go automatically to courses. 
Then I use this state's data in the same component means the Home component on the card container section. 

Secondly, I use this  
const [allCourse,setAllCourse] =useState ([]);
 state to put a single object of course's and these objects are remaining here likely an array of objects. because, here one by one objects will enter this array. This states data used another component which is named Cart. In Cart, I accept these data objects by props, and I use these objects to show one by one Course name when click the select button.

Thirdly, I use   const [allTotalHourse,setTotalHourse] = useState(0);
 this state for put the total credit Hourse. We take one let variable and give its value 0. When I found new data by allCourses data filtering with single items from thats hours, then lets before data hourse and present data's hours, I sum this one variable. Then it passes the Cart Component and shows the total Credit hours.

Fourthly, I use  const [allRemainingHourse,setRemainingHourse] = useState(0);
 this State for put remaining credit hours. I get before state allTotalHourse and I take the maximum Total Hourse 20. Then I calculate 20 - total hours and I get totalRemainig Hourse. passing this allRemainingHourse in Cart Component, I show the allTotalRemaining Hourse.


