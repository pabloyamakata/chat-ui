function SearchInput() {
    return(
        <div className="relative inline-block w-full">
            <span class="material-icons material-icons-outlined absolute top-2/4 left-3 -translate-y-2/4 text-3xl text-gray-400">search</span>
            <input className="focus:text-gray-200 focus:bg-gray-800 focus:outline-0 w-full h-11 pb-[3px] pl-[49px] pr-11 text-gray-400 bg-gray-900 rounded-full caret-gray-400" placeholder="Search" />
        </div>
    )
}

export default SearchInput;
