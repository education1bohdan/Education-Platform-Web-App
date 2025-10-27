import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCoursesList from "./components/EmptyCourseList/EmptyCourseList"
import "./App.scss"

let isEmpty = false;

function App() {
  return (
    <div className='App'>
      <Header />
      {isEmpty
        ? <EmptyCoursesList />
        : <Courses />
      }
    </div>
  );
}

export default App;
