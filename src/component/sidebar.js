import React from 'react';
import './home.scss'
import logo from '../assets/logo.png';
import menu from "../assets/menu.png";
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return(
            <div className="nav-fixed" ref={this.props.header}>
            <div className="header-sub">
                <div className="row remove-margin">
                    <div className="col-6 col-lg-3 col-xl-2 remove-padding">
                        <img alt="" src={menu} data-toggle="collapse" data-target="#demo" className="menu-style" />
                        <img alt="" src={logo} className="logo-style" />
                    </div>
                    <div className="col-6 col-lg-9 col-xl-10 remove-padding center">
                        <div className="tabs">
                            <div className="link">
                                BEDROOM
                            </div>
                            <div className="link">
                                LIVING ROOM
                            </div>
                            <div className="link">
                                OFFICE
                            </div>
                            <div className="link">
                                KITCHEN
                            </div>
                            <div className="link">
                                BATHROOM
                            </div>
                        </div>
                        <div className="flex notification">
                            <div>
                                <i className="fa fa-search"></i>
                            </div>
                            <div>
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="nodge flex">
                                <i className="fa fa-save"></i>
                                <sup >2</sup>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo" className="collapse">
                    <div className="tabs1">
                        <div className="link">
                            BEDROOM
                            </div>
                        <div className="link">
                            LIVING ROOM
                            </div>
                        <div className="link">
                            OFFICE
                            </div>
                        <div className="link">
                            KITCHEN
                            </div>
                        <div className="link">
                            BATHROOM
                            </div>
                    </div>
                </div>
            </div>
            <hr className="remove-margin white"></hr>
            <div className="row remove-margin">
                <div className="col-lg-12 d-none d-lg-block d-xl-block remove-padding">
                    <div className="routes flex">
                        <i className="fa fa-home home "></i>
                        <i className="fa fa-caret-right caret padding-short"></i>
                        <div className="routes-link padding-short">CATALOG</div>
                        <i className="fa fa-caret-right caret padding-short"></i>
                        <div className="routes-link padding-short">SOFAS</div>
                        <i className="fa fa-caret-right caret padding-short"></i>
                        <div className="routes-link active padding-short">BEIGE NUDIE SOFA</div>
                    </div>
                </div>
                <div className="col-12 d-lg-none d-xl-none remove-padding">
                    <div className="tabs3 flex-center">
                        <div className="link">
                            <a className={`nav-items link1 ${this.props.state.active_link1} `} href="#1" >DETAILS</a>
                        </div>
                        <div className="link ">
                            <a className={`nav-items link2  ${this.props.state.active_link2} `} href="#2">DESCRIPTIONS</a>
                        </div>
                        <div className="link ">
                            <a className={`nav-items link3  ${this.props.state.active_link3}`} href="#5">REVIEWS</a>
                        </div>
                        <div className="link ">
                            <a className={`nav-items link4  ${this.props.state.active_link4}`} href="#6">RELATED</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
