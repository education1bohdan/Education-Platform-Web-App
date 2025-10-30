import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList"
import "./App.scss"

let isEmpty = false;

function App() {
  return (
    <div className='App'>
      <Header />
      {isEmpty
        ? <EmptyCourseList />
        : <Courses />
      }
    </div>
  );
}

export default App;
