function ChatBubble() {
    return(
        <div className="relative max-w-[480px] py-[6px] pr-2 pl-[10px] text-white bg-blue-500 rounded-xl rounded-br-none whitespace-pre-wrap break-words">
            I'm doing one component at a time. This, for example, is a chat bubble.
            <span>11:15</span>
            <span className="hidden material-icons material-icons-outlined">schedule</span>
            <span className="hidden material-icons material-icons-outlined">done</span>
            <span className="hidden material-icons material-icons-outlined">done_all</span>
            <div className="absolute bottom-0 -right-2 w-3 h-6 bg-blue-radial-gradient"></div>
        </div>
    )
}

export default ChatBubble;
