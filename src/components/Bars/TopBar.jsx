function TopBar({ userPic }) {
    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <div className="flex items-center min-w-[116px] h-14 px-4 bg-gray-800">
            <span className="md:hidden material-icons material-icons-outlined text-gray-400">arrow_back</span>
            <div className="md:pl-0 flex grow min-w-0 pl-4">
                <div className="flex-none w-11 h-11 rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User" /></div>
                <div className="min-w-0 pl-4">
                    <div className="font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">Lisa Aureliana</div>
                    <div className="text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">last seen a long time ago</div>
                </div>
            </div>
            <div className="sm:w-36 sm:p-0 flex w-fit h-11 pl-3 bg-gray-800">
                <div className="sm:flex sm:justify-center sm:items-center sm:grow hidden"><span className="material-icons material-icons-outlined text-gray-400">phone</span></div>
                <div className="sm:flex sm:justify-center sm:items-center sm:grow hidden"><span className="material-icons material-icons-outlined text-gray-400">search</span></div>
                <div className="sm:justify-center flex justify-end items-center grow"><span className="material-icons material-icons-outlined text-gray-400">more_vert</span></div>
            </div>
        </div>
    )
}

export default TopBar;
