function RightBubble() {
    return(
        // Add a min-width to this component and overflow-hidden class to its parent to make it hide when resizing the browser
        <div className="relative flex min-w-[60px] max-w-[480px] py-[6px] pr-2 pl-[10px] bg-blue-500 rounded-xl rounded-br-none whitespace-pre-wrap break-words">
            <p className="min-w-0 text-white">I'm doing one component at a time. This, for example, is a chat bubble.</p>
            <div className="flex self-end">
                <span className="text-xs font-medium text-gray-200">11:15</span>
                <span className="hidden material-icons material-icons-outlined ml-1 text-xs text-gray-100">schedule</span>
                <span className="hidden material-icons material-icons-outlined ml-1 text-[18px] text-gray-100">done</span>
                <span className="material-icons material-icons-outlined ml-1 text-[18px] text-gray-100">done_all</span>
            </div>
            <div className="absolute bottom-0 -right-2 w-3 h-6 bg-blue-radial-gradient"></div>
        </div>
    )
}

export default RightBubble;
