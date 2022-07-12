function ContactBox({ userPic }) {
    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <a className="hover:bg-slate-700 flex items-center min-w-[250px] h-[72px] p-[9px] bg-gray-800 rounded-lg cursor-pointer tap-highlight-none transition-[background-color]">
            <div className="flex-none w-[54px] h-[54px] rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User" /></div>
            <div className="grow min-w-0 pl-[16px] pr-1">
                <p className="pr-3 font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">Lisa Aureliana</p>
                <p className="pr-3 text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">last seen a long time ago</p>
            </div>
        </a>
    )
}

export default ContactBox;
