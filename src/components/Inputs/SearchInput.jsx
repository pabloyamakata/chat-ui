import { useSelector, useDispatch } from "react-redux";
import { setIsSearchActive, setInputValue } from "../../redux/features/search/searchSlice";

function SearchInput() {

    const isSearchActive = useSelector(state => state.search.isSearchActive);
    const inputValue = useSelector(state => state.search.inputValue);
    const dispatch = useDispatch();

    const activateSearch = () => {
        !isSearchActive && dispatch(setIsSearchActive());
    };

    const handleInputChange = (event) => {
        dispatch(setInputValue(event.target.value));
    };

    const resetInput = () => {
        dispatch(setInputValue(''));
    };

    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <div className="relative min-w-[175px]">
            <input onFocus={activateSearch} onChange={handleInputChange} value={inputValue} className="focus:text-gray-200 focus:shadow-inset w-full h-11 pb-[3px] pl-[49px] pr-11 text-gray-400 bg-gray-900 rounded-full outline-0 caret-blue-500 transition-all peer" placeholder="Search" />
            <span className="material-icons material-icons-outlined absolute top-2/4 left-3 -translate-y-2/4 text-3xl text-gray-400 peer-focus:text-blue-500">search</span>
            <span onClick={resetInput} className={`${ !inputValue.length && 'hidden' } material-icons material-icons-outlined active:text-blue-500 hover:rotate-90 hover:scale-125 absolute top-2/4 right-3 -translate-y-2/4 text-2xl text-gray-400 cursor-pointer transition-transform duration-300 tap-highlight-none peer-focus:text-blue-500`}>close</span>
        </div>
    )
}

export default SearchInput;
