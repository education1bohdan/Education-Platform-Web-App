import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { INPUT_SEARCHBAR_TEXT, SEARCH_BUTTON_TEXT } from "../../../../constants";
import "./SearchBar.scss"

const SearchBar: React.FC = () => {

    function handleSearch(): void {

    }

    return (
        <div className="search-bar">
            <Input className='search-bar-input' placeholderText={INPUT_SEARCHBAR_TEXT} />
            <Button buttonText={SEARCH_BUTTON_TEXT} clickHandler={handleSearch} buttonWidth="148px" />
        </div>
    )
}

export default SearchBar;
