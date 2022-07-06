import ChatBox from "../Users/ChatBox";
import userPic from "../../assets/images/userpfp-1.jpg";

function App() {
    return(
        <div className="overflow-hidden">
            <ChatBox userPic={userPic} />
        </div>
    )
}

export default App;
