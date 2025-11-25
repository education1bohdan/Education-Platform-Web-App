import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import getAuthorsNames from "./helpers/getAuthorsNames";
import "./App.scss";

let isEmpty = false;
let isAuth = false;

function App() {
  const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
  const [authors, setAuthors] = useState<Authors[]>(mockedAuthorsList);

  const courseCreationHandler = (createdCourse: Course, addedAuthors: Authors[]): void => {
    setCourses(prev => [...prev, createdCourse]);
    setAuthors(prev => [...prev, ...addedAuthors]);
  }

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={isEmpty ? <EmptyCourseList /> : <Courses coursesList={courses} authorsList={authors} />} />
          {courses.map(course => {
            return <Route path={`/${course.id}`} element={<CourseInfo
              id={course.id}
              title={course.title}
              description={course.description}
              creationDate={course.creationDate}
              duration={`${course.duration}`}
              authors={getAuthorsNames(course.authors, authors)} />} />
          })}
          <Route path="/login" element={!isAuth && <Login />} />
          <Route path="/registration" element={!isAuth && <Registration />} />
          <Route path="/create-course" element={< CreateCourse courseCreationHandler={courseCreationHandler} />} />
        </Routes>

      </div >
    </Router>
  );
}

export default App;
