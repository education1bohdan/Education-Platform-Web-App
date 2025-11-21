import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Registration from "./components/Authentification/Registration/Registration";
import Login from "./components/Authentification/Login/Login";
import AuthorItem from "./components/CreateCourse/AuthorItem/AuthorItem";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import { Course } from "./components/Courses/Courses";
import "./App.scss";

let isEmpty = false;
let isAuth = false;

function App() {
  const [courses, setCourses] = useState<Course[]>(mockedCoursesList);

  const courseCreationHandler = (createdCourse: Course): void => {
    setCourses(prev => [...prev, createdCourse]);
  }

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={isEmpty ? <EmptyCourseList /> : <Courses coursesList={courses} authorsList={mockedAuthorsList} />} />
          <Route path="/courseinfo" element={<CourseInfo
            id={mockedCoursesList[0].id}
            title={mockedCoursesList[0].title}
            description={mockedCoursesList[0].description}
            creationDate={mockedCoursesList[0].creationDate}
            duration='02:40 hours'
            authors='Vasiliy Dobkin, Nicolas Kim' />} />
          <Route path="/login" element={!isAuth && <Login />} />
          <Route path="/registration" element={!isAuth && <Registration />} />
          <Route path="/author-item" element={<AuthorItem authorName='Author One' />} />
          <Route path="/create-course" element={< CreateCourse courseCreationHandler={courseCreationHandler} />} />
        </Routes>

      </div >
    </Router>
  );
}

export default App;
