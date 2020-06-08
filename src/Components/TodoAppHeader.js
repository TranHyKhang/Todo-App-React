import React, {Component} from 'react';
import MenuIcon from '../Images/open-menu.svg'
import './TodoAppHeader.css';

export default class TodoAppHeader extends Component {
    render() {
        return(
            <div className="Header">
                <img className="menu-icon" src={MenuIcon}/>
                <span className="header-title">DAILIST</span>
            </div>
        )
    }
}