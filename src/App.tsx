import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import { Course, Authors } from "./components/Courses/Courses";
import "./App.scss";

let isEmpty = false;

function App() {
  const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
  const [authors, setAuthors] = useState<Authors[]>(mockedAuthorsList);

  const courseCreationHandler = (createdCourse: Course, addedAuthors: Authors[]): void => {
    setCourses(prev => [...prev, createdCourse]);
    setAuthors(prev => [...prev, ...addedAuthors]);
  }

  const isAuth = !!localStorage.getItem('authToken');

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/courses' replace />} />
        <Route path="/courses" element={isEmpty ? <EmptyCourseList /> : <Courses coursesList={courses} authorsList={authors} />} />
        <Route path="/courses/:courseId" element={<CourseInfo coursesList={courses} authorsList={authors} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/create-course" element={<CreateCourse courseCreationHandler={courseCreationHandler} />} />
        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
    </div >
  );
}

export default App;
