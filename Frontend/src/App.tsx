import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { state } from "./constants";
import { Course, Author } from "./constants";
import "./App.scss";


function App() {
  const courses: Course[] = useSelector((state: state) => state.courses);
  const authors: Author[] = useSelector((state: state) => state.authors);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/registration" element={<PublicRoute><Registration /></PublicRoute>} />
        <Route path="/" element={<PrivateRoute><Navigate to='/courses'></Navigate></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/courses/:courseId" element={<PrivateRoute><CourseInfo coursesList={courses} authorsList={authors} /></PrivateRoute>} />
        <Route path="/courses/add" element={<PrivateRoute><CreateCourse /></PrivateRoute>} />
        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
    </div >
  );
}

export default App;
