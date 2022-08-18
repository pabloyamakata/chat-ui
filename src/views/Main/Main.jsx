import SearchBar from '../../components/Bars/SearchBar';
import TopBar from '../../components/Bars/TopBar';
import LeftBubble from '../../components/Bubbles/LeftBubble';
import RightBubble from '../../components/Bubbles/RightBubble';
import BasicButton from '../../components/Buttons/BasicButton';
import MessageInput from '../../components/Inputs/MessageInput';
import ChatBox from '../../components/Users/ChatBox';

import userPic from '../../assets/images/userpfp-1.jpg';

function Main() {

    const contacts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const messages = [1, 2, 4, 5, 3, 12, 10, 17];

    const getChatBubbles = () => {

        const chatBubbles = messages.map(message => {

            if(message % 2 === 0) {
                return(
                    <div key={message} className='self-start pb-2'>
                        <LeftBubble />
                    </div>
                )
            } else {
                return(
                    <div key={message} className='self-end pb-2'>
                        <RightBubble />
                    </div>
                )
            }
        });

        return chatBubbles;
    };

    return(
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-3 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-700 bg-slate-800'>
                <div className='sticky top-0'>
                    <SearchBar />
                </div>
                <div className='py-1 pr-3 pl-2'>
                    {contacts.map(contact => {
                        return(
                            <ChatBox userPic={userPic} key={contact} />
                        )
                    })}
                </div>
            </div>
            <div className='col-span-9 relative flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700 bg-slate-900'>
                <div className='sticky top-0 z-10'>
                    <TopBar userPic={userPic} />
                </div>
                <div className='relative flex flex-col flex-grow px-28 pt-5'>
                    {getChatBubbles()}
                </div>
                <div className='sticky bottom-0 w-full px-28 py-4 bg-slate-900'>
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}

export default Main;
