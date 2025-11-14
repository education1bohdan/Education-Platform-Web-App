import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Authentification from "./components/Authentification/Authentification";
import Registration from "./components/Authentification/Registration/Registration";
import Login from "./components/Authentification/Login/Login"
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import "./App.scss";

let isEmpty = false;
let isAuth = false;

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={isEmpty ? <EmptyCourseList /> : <Courses coursesList={mockedCoursesList} authorsList={mockedAuthorsList} />} />
          <Route path="/courseinfo" element={<CourseInfo
            id={mockedCoursesList[0].id}
            title={mockedCoursesList[0].title}
            description={mockedCoursesList[0].description}
            creationDate={mockedCoursesList[0].creationDate}
            duration='02:40 hours'
            authors='Vasiliy Dobkin, Nicolas Kim' />} />
          <Route path="/login" element={!isAuth && <Login />} />
          <Route path="/registration" element={!isAuth && <Registration />} />

        </Routes>

      </div >
    </Router>
  );
}

export default App;
