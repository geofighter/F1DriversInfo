import {Link, NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../auth/index.js";

export const Navbar = () => {

    const { authState, logout } = useContext( AuthContext );
    const { user } = authState;

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('login', {
            replace: true
        });
    }

    return(
        <>
            <nav className="red animate__animated animate__fadeIn">
                <div className="nav-wrapper">
                    <Link to="#" className="brand-logo center"><i className="material-icons ">code</i></Link>
                    <a data-target="menuLado" className="btn red sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <div className="accent-color valign-wrapper chip white-text">
                            <i className="material-icons icon-avatar-user left white-text">person</i>
                            { user ? user.name : '' }
                            {/*<a><span className=" white-text name center"><b>{ user ? user.name : '' }</b></span></a>*/}
                            {/*<a><span className=" white-text email center"><b>email@example.com</b></span></a>*/}
                        </div>
                        
                        {/*<li>*/}
                        {/*    <NavLink*/}
                        {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}*/}
                        {/*        to="/">*/}
                        {/*        <i className="material-icons">home</i>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <NavLink*/}
                        {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}*/}
                        {/*        to="login">*/}
                        {/*        <i className="material-icons">key</i>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink
                                className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}
                                to="drivers">
                                <i className="material-icons">art_track</i>
                            </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink*/}
                        {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}*/}
                        {/*        to="driver">*/}
                        {/*        <i className="material-icons">person</i>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink
                                className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}
                                to="search">
                                <i className="material-icons">search</i>
                            </NavLink>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <NavLink
                                className={ ({ isActive }) => `item-list ${ isActive ? 'active indigo darken-4 white-text' : '' }`}
                                to="login"
                                onClick={ onLogout }
                            >
                                <i className="material-icons">exit_to_app</i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul id="menuLado" className="sidenav show-on-large">
                <li>
                    <div className="user-view background red">
                        <div className="center">
                            {/*<button className="circle btn-floating indigo darken-4 z-depth-2 hoverable"><i className="material-icons" >person</i>{ user ? user.name : '' }</button>*/}
                            <div className="accent-color chip white-text">
                                <i className="material-icons  left" >person</i>
                                { user ? user.name : '' }
                                {/*<a><span className=" white-text name center"><b>{ user ? user.name : '' }</b></span></a>*/}
                                {/*<a><span className=" white-text email center"><b>email@example.com</b></span></a>*/}
                            </div>
                        </div>
                        {/*<br/>*/}
                    </div>
                </li>
                <div className="black-text">
                    {/*<li>*/}
                    {/*    <NavLink*/}
                    {/*        to="/"*/}
                    {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active white-text indigo darken-4' : '' }`}>*/}
                    {/*        <i className="material-icons red-text">home</i>*/}
                    {/*        <b>Home</b>*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li className="item-list">*/}
                    {/*    <NavLink*/}
                    {/*        to="login"*/}
                    {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active white-text indigo darken-4' : '' }`}>*/}
                    {/*        <i className="material-icons red-text">key</i>*/}
                    {/*        <b>Login</b>*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    <li className="item-list">
                        <NavLink
                            to="drivers"
                            className={ ({ isActive }) => `item-list ${ isActive ? 'active white-text indigo darken-4' : '' }`}>
                            <i className="material-icons red-text">art_track</i>
                            <b>Drivers</b>
                        </NavLink>
                    </li>
                    {/*<li className="item-list">*/}
                    {/*    <NavLink*/}
                    {/*        to="driver"*/}
                    {/*        className={ ({ isActive }) => `item-list ${ isActive ? 'active white-text indigo darken-4' : '' }`}>*/}
                    {/*        <i className="material-icons red-text">person</i>*/}
                    {/*        <b>Driver Info</b>*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    <li className="item-list">
                        <NavLink
                            to="search"
                            className={ ({ isActive }) => `item-list ${ isActive ? 'active white-text indigo darken-4' : '' }`}>
                            <i className="material-icons red-text">search</i>
                            <b>Search a Driver</b>
                        </NavLink>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li className="item-list">
                        <a
                            onClick={onLogout}
                        >
                            <i className="material-icons red-text">exit_to_app</i>
                            <b>Logout</b>
                        </a>
                    </li>
                </div>
            </ul>
        </>
    );
}