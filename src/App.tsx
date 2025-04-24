import {Route, Routes} from "react-router-dom";
import {GithubUserNameComponent} from "./components/GithubUserNameComponent.tsx";
import {GithubUserScreen} from "./Pages/GithubUserScreen.tsx";

function App() {

    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<GithubUserNameComponent/>}/>
                <Route path="/user/:username" element={<GithubUserScreen/>}/>
            </Routes>
        </div>
    )
}

export default App
