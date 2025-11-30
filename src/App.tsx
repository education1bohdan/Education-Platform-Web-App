import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import { Course, Authors } from "./components/Courses/Courses";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
  const [authors, setAuthors] = useState<Authors[]>(mockedAuthorsList);
  const [isCourseListEmpty, setIsCourseListEmpty] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (courses.length === 0) {
      setIsCourseListEmpty(true);
    } else {
      setIsCourseListEmpty(false);
    }
  }, [courses]);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('MOCK_TOKEN'));
  }, [])

  const login = (authToken: string, userName: string): void => {
    localStorage.setItem('MOCK_TOKEN', authToken);
    localStorage.setItem('user', userName)
    setIsAuth(true);
  }

  const logout = (): void => {
    setIsAuth(false);
    localStorage.removeItem('MOCK_TOKEN');
  }

  const courseCreationHandler = (createdCourse: Course, addedAuthors: Authors[]): void => {
    setCourses(prev => [...prev, createdCourse]);
    setAuthors(prev => [...prev, ...addedAuthors]);
  }

  return (
    <div className='App'>
      <Header isAuth={isAuth} logout={logout} />
      <Routes>
        <Route path="/login" element={<PublicRoute><Login login={login} /></PublicRoute>} />
        <Route path="/registration" element={<PublicRoute><Registration /></PublicRoute>} />
        <Route path="/" element={<Navigate to={isAuth ? '/courses' : '/login'} replace />} />
        <Route path="/courses" element={<PrivateRoute>{isCourseListEmpty ? <EmptyCourseList /> : <Courses coursesList={courses} authorsList={authors} />}</PrivateRoute>} />
        <Route path="/courses/:courseId" element={<PrivateRoute><CourseInfo coursesList={courses} authorsList={authors} /></PrivateRoute>} />
        <Route path="/courses/add" element={<PrivateRoute><CreateCourse courseCreationHandler={courseCreationHandler} /></PrivateRoute>} />
        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
    </div >
  );
}

export default App;
