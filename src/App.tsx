import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { mockedCoursesList, mockedAuthorsList } from "./constants";
import "./App.scss"

let isEmpty = false;

function App() {
  return (
    <div className='App'>
      <Header />
      {isEmpty
        ? <EmptyCourseList />
        : <Courses coursesList={mockedCoursesList} authorsList={mockedAuthorsList} />
      }
      {/* <CourseInfo coursesList={mockedCoursesList} authorsList={mockedAuthorsList} /> */}
    </div>
  );
}

export default App;
