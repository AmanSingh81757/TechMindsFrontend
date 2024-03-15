import { Link } from "react-router-dom"

const IndexPage = () => {
    return (
        <div>
            <h1>App</h1>
            <div>
                <ul>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    {/* <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default IndexPage