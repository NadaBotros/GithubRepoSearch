import {Route, Routes} from "react-router-dom";
import {GithubUserNameComponent} from "./components/GithubUserNameComponent.tsx";
import {GithubUserRepos} from "./components/GithubUserRepos.tsx";

function App() {

    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<GithubUserNameComponent/>}/>
                <Route path="/user/:username" element={<GithubUserRepos/>}/>
            </Routes>
        </div>
    )
}

export default App
