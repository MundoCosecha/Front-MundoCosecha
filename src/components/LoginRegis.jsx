import { Link } from 'react-router-dom';

export const LoginRegis = () => {
    return (
        <>
            <Link to={'/login'} className="user" ><i className="ri-user-2-fill"></i><span>Sign In</span></Link>
            <Link to={'/registro'} className="user" >
                <i className="ri-user-add-fill"></i><span>Register</span></Link>
        </>
    )
}
