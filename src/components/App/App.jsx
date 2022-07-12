import ContactBox from "../Users/ContactBox";
import userPic from "../../assets/images/userpfp-1.jpg";

function App() {
    return(
        <div className="overflow-hidden">
            <ContactBox userPic={userPic} />
        </div>
    )
}

export default App;
