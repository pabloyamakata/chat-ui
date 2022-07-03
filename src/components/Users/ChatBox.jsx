function ChatBox({ userPic }) {
    return(
        <a className="hover:bg-slate-700 flex items-center min-w-0 h-[72px] p-[9px] bg-gray-800">
            <div className="flex-none w-[54px] h-[54px] rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User" /></div>
            <div className="min-w-0 grow pl-2">
                <p className="flex justify-between items-center min-w-0">
                    <span className="min-w-0 pr-3 font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">Lisa Aureliana</span>
                    <span className="text-xs font-medium text-gray-400">14:26</span>
                </p>
                <p className="flex justify-between items-center min-w-0">
                    <span className="min-w-0 pr-3 text-[15px] leading-6 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">This should be the user's last message</span>
                    <span className="py-px px-2 text-sm font-medium text-white bg-gray-500 rounded-full">7</span>
                </p>
            </div>
        </a>
    )
}

export default ChatBox;
