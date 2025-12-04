import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList, mockedAuthorsList, state } from "./constants";
import { Course, Author } from "./constants";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";


function App() {
  const courses: Course[] = useSelector((state: state) => state.courses);
  const authors: Author[] = useSelector((state: state) => state.authors);
  // const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
  // const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
  // const [isCourseListEmpty, setIsCourseListEmpty] = useState<boolean>(false);
  // const [isAuth, setIsAuth] = useState<boolean>(false);
  // const isAuth: boolean = useSelector((state: state) => state.user.isAuth);

  // useEffect(() => {
  //   if (courses.length === 0) {
  //     setIsCourseListEmpty(true);
  //   } else {
  //     setIsCourseListEmpty(false);
  //   }
  // }, [courses]);

  // useEffect(() => {
  //   setIsAuth((!!localStorage.getItem('token')));
  // }, [])

  // const login = (authToken: string, userName: string): void => {
  //   localStorage.setItem('token', authToken);
  //   localStorage.setItem('user', userName)
  //   setIsAuth(true);
  // }

  // const logout = (): void => {
  //   setIsAuth(false);
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  // }

  // const courseCreationHandler = (createdCourse: Course, addedAuthors: Author[]): void => {
  //   // setCourses(prev => [...prev, createdCourse]);
  //   // setAuthors(prev => [...prev, ...addedAuthors]);
  // }

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
