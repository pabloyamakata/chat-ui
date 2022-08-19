// Components
import SearchBar from '../../components/Bars/SearchBar';
import TopBar from '../../components/Bars/TopBar';
import LeftBubble from '../../components/Bubbles/LeftBubble';
import RightBubble from '../../components/Bubbles/RightBubble';
import BasicButton from '../../components/Buttons/BasicButton';
import MessageInput from '../../components/Inputs/MessageInput';
import ChatBox from '../../components/Users/ChatBox';

// Assets
import userPic from '../../assets/images/userpfp-1.jpg';

// Hooks
import { useState, useRef, useEffect } from 'react';

function Main() {

    const [afterContent, setAfterContent] = useState('after:content-none');
    const messagesEndRef = useRef();

    useEffect(() => {
        messagesEndRef.current.scrollIntoView();
    }, []);

    const contacts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const messages = [1, 2, 4, 5, 3, 12, 10, 17, 45, 24, 99, 2044];

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

    const handleScroll = event => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        const scrollPosition = scrollHeight - scrollTop - clientHeight

        if(scrollPosition > 0) {
            setAfterContent('after:content-[""]');
        }
        else if(scrollPosition === 0) {
            setAfterContent('after:content-none');
        }
    };

    return(
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-3 relative bg-slate-800'>
                <div className='sticky top-0'>
                    <SearchBar />
                </div>
                <div className='hover:scrollbar-thumb-slate-700 h-[calc(100vh-60px)] py-1 pr-3 pl-2 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 peer'>
                    {contacts.map(contact => {
                        return(
                            <ChatBox userPic={userPic} key={contact} />
                        )
                    })}
                </div>
                <div className='hover:visible absolute bottom-5 right-5 invisible peer-hover:visible'>
                    <BasicButton btnDescription={'edit'} />
                </div>
            </div>
            <div className='col-span-9 relative flex flex-col bg-slate-900'>
                <div className='sticky top-0 z-10'>
                    <TopBar userPic={userPic} />
                </div>
                <div onScroll={handleScroll} className='hover:scrollbar-thumb-slate-700 relative flex flex-col h-[calc(100vh-136px)] px-28 pt-5 overflow-y-auto scrollbar-thin scrollbar-track-slate-900'>
                    {getChatBubbles()}
                    <div ref={messagesEndRef}></div>
                </div>
                <div className={`${afterContent} after:absolute after:top-0 after:left-2/4 after:-translate-x-2/4 after:w-[840px] after:h-px after:bg-white/20 sticky bottom-0 flex items-center w-full px-28 py-[14px] bg-slate-900`}>
                    <div className='flex-grow'>
                        <MessageInput />
                    </div>
                    <div className='pl-3'>
                        <BasicButton btnDescription={'send'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
