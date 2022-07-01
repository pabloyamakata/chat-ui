function ContactBox({ userPic }) {
    return(
        <div className="flex min-w-0 h-[72px]">
            <div className="flex-none w-11 h-11 rounded-full"><img className="w-full min-h-full object-cover rounded-full" src={userPic} alt="User" /></div>
            <div className="min-w-0 pl-4">
                <div className="min-w-0 font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">Lisa</div>
                <div className="min-w-0 text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">last seen a long time ago</div>
            </div>
        </div>
    )
}

export default ContactBox;
