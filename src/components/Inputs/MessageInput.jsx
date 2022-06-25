function MessageInput() {
    return(
        <div className="relative flex items-center h-12 pt-1 px-3 rounded-xl rounded-br-none bg-gray-800">
            <button type="button"><span className="material-icons material-icons-outlined text-gray-400">sentiment_satisfied_alt</span></button>
            <input placeholder="Message" className="focus:text-gray-200 focus:outline-0 grow min-w-0 mb-1.5 pl-3 text-gray-400 bg-transparent whitespace-nowrap overflow-hidden text-ellipsis" />
            <button type="button" className="pl-3"><span className="material-icons material-icons-outlined text-gray-400 rotate-45">attach_file</span></button>
            <div className="absolute bottom-0 -right-2 w-3 h-6 bg-gray-radial-gradient"></div>
        </div>
    )
}

export default MessageInput;
