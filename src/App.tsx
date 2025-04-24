import {Route, Routes} from "react-router-dom";
import {GithubUserScreen} from "./Pages/GithubUserScreen.tsx";
import {SearchByUserNameScreen} from "./Pages/SearchByUserNameScreen.tsx";

function App() {

    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<SearchByUserNameScreen/>}/>
                <Route path="/user/:username" element={<GithubUserScreen/>}/>
            </Routes>
        </div>
    )
}

export default App
