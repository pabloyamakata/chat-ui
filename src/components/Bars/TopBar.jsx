import userPic from "../../assets/images/userpfp-1.jpg";

function TopBar() {
    return(
        <div className="flex items-center w-8/12 h-14 px-4 bg-gray-800 text-white">
            <span class="material-icons material-icons-outlined text-gray-400">arrow_back</span>
            <div className="flex grow pl-7">
                <div className="w-11 h-11 rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User profile picture" /></div>
                <div className="pl-4">
                    <div><span className="block font-medium">Lisa</span></div>
                    <div><span className="block text-sm text-gray-400">last seen a long time ago</span></div>
                </div>
            </div>
            <div className="flex w-36 h-11">
                <div className="flex justify-center items-center grow"><span className="material-icons material-icons-outlined text-gray-400">phone</span></div>
                <div className="flex justify-center items-center grow"><span className="material-icons material-icons-outlined text-gray-400">search</span></div>
                <div className="flex justify-center items-center grow"><span className="material-icons material-icons-outlined text-gray-400">more_vert</span></div>
            </div>
        </div>
    )
}

export default TopBar;
