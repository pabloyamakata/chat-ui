function ChatBox({ userPic }) {
    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <a className="hover:bg-slate-700 flex items-center min-w-[250px] h-[72px] p-[9px] bg-gray-800 rounded-lg cursor-pointer tap-highlight-none transition-[background-color]">
            <div className="flex-none w-[54px] h-[54px] rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User" /></div>
            <div className="grow min-w-0 pl-[10px] pr-1">
                <p className="flex justify-between items-center">
                    <span className="pr-3 font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">Lisa Aureliana</span>
                    <span className="text-xs font-medium text-gray-400">09/10/2021</span>
                </p>
                <p className="flex justify-between items-center">
                    <span className="pr-3 text-[15px] leading-6 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">This should be the user's last message</span>
                    <span className="py-px px-2 text-sm font-medium text-white bg-gray-500 rounded-full">1541</span>
                </p>
            </div>
        </a>
    )
}

export default ChatBox;
