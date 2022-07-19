import { useSelector, useDispatch } from "react-redux";
import { setIsSearchActive, setInputValue } from "../../redux/features/search/searchSlice";

import SearchInput from "../Inputs/SearchInput";

function SearchBar() {

    const isSearchActive = useSelector(state => state.search.isSearchActive);
    const dispatch = useDispatch();

    const deactivateSearch = () => {
        dispatch(setIsSearchActive());
        dispatch(setInputValue(''));
    };

    return(
        // This component's parent must have the overflow-hidden class applied. No need to add min-width
        <div className="p-2 bg-gray-800">
            <div className="flex items-center">
                <div className="flex items-center pt-[5px] pr-[5px] pb-[8px] pl-[8px]">
                    <span onClick={deactivateSearch} className={`${!isSearchActive && 'hidden'} material-icons material-icons-outlined text-[25px] text-gray-400 cursor-pointer`}>arrow_back</span>
                    <span className={`${isSearchActive && 'hidden'} material-icons material-icons-outlined text-gray-400 cursor-pointer`}>menu</span>
                </div>
                <div className="grow ml-[15px]"><SearchInput /></div>
            </div>
        </div>
    )
}

export default SearchBar;
