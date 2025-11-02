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
      <CourseInfo
        id={mockedCoursesList[0].id}
        title={mockedCoursesList[0].title}
        description={mockedCoursesList[0].description}
        creationDate={mockedCoursesList[0].creationDate}
        duration='02:40 hours'
        authors='Vasiliy Dobkin, Nicolas Kim' />
    </div>
  );
}

export default App;
