import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const GithubUserNameComponent = () => {
    const navigate = useNavigate();
    // Use useState to manage the username input
    const [username, setUsername] = useState('');

    // Handle input Submission and validation
    // once the user clicks the button, we will navigate to the user page in case the username is valid
    const handleSubmit = () => {
        if (username.trim() === '') {
            alert('Please enter a valid username');
            return;
        }
        console.log('Fetching profile for:', username);
        navigate(`/user/${username}`);
    }

    return (
        <div>
            <h1>Github User Name</h1>
            <p>Enter your Github username to fetch your profile information.</p>
            <input
                type="text"
                placeholder="Github Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handleSubmit}>Fetch Profile</button>
        </div>
    )
}