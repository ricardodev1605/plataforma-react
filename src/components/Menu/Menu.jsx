import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    {/* <a href="/">Home</a> */}
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                    {/* <a href="/blog">Blog</a> */}
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                    {/* <a href="/contato">Contato</a> */}
                </li>
            </ul>
        </div>
    );
}