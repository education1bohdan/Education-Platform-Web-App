import { useState } from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { INPUT_SEARCHBAR_TEXT, SEARCH_BUTTON_TEXT } from "../../../../constants";
import { Course } from "../../../../constants";
import "./SearchBar.scss";
import { DisplayedData } from "../../Courses";


interface Props {
    filterCourses: (filteredCoursesData: DisplayedData) => void;
    coursesList: Course[];
}

const SearchBar: React.FC<Props> = ({ filterCourses, coursesList }) => {
    const [searchData, setSearchData] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchData(value);
    }

    const handleSearch = (): void => {
        const realData = searchData.trim().toLowerCase();
        if (realData) {
            const filteredCourses: Course[] = coursesList.filter((course) => (course.id.toLowerCase()).includes(realData) || (course.title.toLowerCase()).includes(realData));
            filterCourses({
                isSearching: true,
                displayedCourses: filteredCourses,
            });

        } else if (!realData) {
            filterCourses({
                isSearching: false,
                displayedCourses: coursesList,
            });
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-bar">
            <Input placeholderText={INPUT_SEARCHBAR_TEXT} onChange={handleChange} value={searchData} onKeyDown={handleKeyDown} />
            <Button buttonText={SEARCH_BUTTON_TEXT} clickHandler={handleSearch} buttonWidth="148px" />
        </div>
    )
}

export default SearchBar;
