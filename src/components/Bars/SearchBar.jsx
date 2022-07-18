import { useSelector, useDispatch } from "react-redux";
import { setIsSearchActive } from "../../redux/features/searchBar/searchBarSlice";

import SearchInput from "../Inputs/SearchInput";

function SearchBar() {

    const isSearchActive = useSelector(state => state.searchBar.isSearchActive);
    const dispatch = useDispatch();

    return(
        // This component's parent must have the overflow-hidden class applied. No need to add min-width
        <div className="p-2 bg-gray-800">
            <div className="flex items-center">
                <div className="flex items-center pt-[5px] pr-[5px] pb-[8px] pl-[8px]">
                    <span onClick={() => dispatch(setIsSearchActive())} className={`${!isSearchActive && 'hidden'} material-icons material-icons-outlined text-[27px] text-gray-400`}>arrow_back</span>
                    <span className={`${isSearchActive && 'hidden'} material-icons material-icons-outlined text-gray-400`}>menu</span>
                </div>
                <div className="grow ml-[15px]"><SearchInput /></div>
            </div>
        </div>
    )
}

export default SearchBar;
