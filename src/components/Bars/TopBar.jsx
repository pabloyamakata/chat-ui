function TopBar() {
    return(
        <div className="flex items-center w-8/12 h-14 px-4 bg-gray-800 text-white">
            <div className="flex grow bg-red-400">
                <div className="w-11 h-11 bg-white rounded-full"><img /></div>
                <div className="pl-4">
                    <div><span>John Miles</span></div>
                    <div><span>offline</span></div>
                </div>
            </div>
            <div className="w-36 h-11 bg-green-500">
                <div><span className="material-icons material-icons-outlined">more_vert</span></div>
            </div>
        </div>
    )
}

export default TopBar;