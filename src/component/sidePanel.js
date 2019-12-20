import React from 'react';
import './home.scss'

export default class SidePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-none col-lg-3 col-xl-3 d-lg-block d-xl-block remove-padding"  >
            <div className="fixed-side-panel" >
                <div className="rotate" >
                    {String(this.props.tagName).toLowerCase()}
                </div>
                <div className="padding-top-box" >
                    <div className="padding-big">
                        <a className={`nav-items side-links link1 ${this.props.state.active_link1}`}  href="#1">DETAILS</a>
                    </div>
                    <div className="padding-big">
                        <a className={`nav-items side-links link2 ${this.props.state.active_link2}`} href="#2">DESCRIPTIONS</a>
                    </div>
                    <div className="padding-big">
                        <a className={`nav-items side-links link3 ${this.props.state.active_link3}`} href="#5">REVIEWS</a>
                    </div>
                    <div className="padding-big">
                        <a className={`nav-items side-links link4 ${this.props.state.active_link4}`} href="#6">RELATED</a>
                    </div>
                    <div className="flex-wrap padding-icons">
                        <i className="fa fa-facebook medium-font padding"></i>
                        <i className="fa fa-twitter medium-font padding"></i>
                        <i className="fa fa-bullseye medium-font padding"></i>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}