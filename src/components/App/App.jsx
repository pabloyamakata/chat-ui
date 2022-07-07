import TopBar from "../Bars/TopBar";
import userPic from "../../assets/images/userpfp-1.jpg";

function App() {
    return(
        <div className="overflow-hidden">
            <TopBar userPic={userPic} />
        </div>
    )
}

export default App;
