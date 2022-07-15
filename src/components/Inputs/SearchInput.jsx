function SearchInput() {
    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <div className="relative inline-block min-w-[175px] w-full">
            <input className="focus:text-gray-200 focus:bg-gray-800 focus:shadow-inset w-full h-11 pb-[3px] pl-[49px] pr-11 text-gray-400 bg-gray-900 rounded-full outline-0 caret-blue-500 transition-all peer" placeholder="Search" />
            <span className="material-icons material-icons-outlined absolute top-2/4 left-3 -translate-y-2/4 text-3xl text-gray-400 peer-focus:text-blue-500">search</span>
        </div>
    )
}

export default SearchInput;