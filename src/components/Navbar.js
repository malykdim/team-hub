import { Link, Redirect } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import './Navbar.css';
import Logo from '../assets/logo.svg';

export default function Navbar() {
    const { user } = useAuthContext();
    const { logout, isPending } = useLogout();
    
    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Logo} alt="teamhub logo" />
                    <span>Team Hub</span>
                </li>
                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>                    
                )}
                {user && (
                    <li>
                        {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                        {isPending && <button className="btn" disabled>Logging out...</button>}
                    </li>                    
                )}
            </ul>
        </div>
    );
}
