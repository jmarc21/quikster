import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            slide: false,
            animateExit: true,
            gone: true
        }
        this.slide = this.slide.bind(this);
    }
    slide() {
        this.setState({
            slide: !this.state.slide,
            animateExit: !this.state.animateExit,
            gone: !this.state.gone
        })
    }
    render() {
        return (
            <div>
                <div onClick={this.slide} className='ham-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <nav className={this.state.slide ?
                    'nav slide' : 'nav'}>
                    <div onClick={this.slide} className='ham-menu2'>
                        <div className={this.state.animateExit ? 'exit1' : 'exit1 spin45'}></div>
                        <div className={this.state.animateExit ? 'exit2' : 'exit2 spin135 '}></div>
                    </div>
                    <div className='links'>
                        <Link to='/' style={{ textDecoration: 'none' }}><div onClick={this.slide} className='home'>Home</div></Link>
                        <Link to='/shop' style={{ textDecoration: 'none' }}><div onClick={this.slide} className='shop'>Shop</div></Link>
                        <Link to='/profile' style={{ textDecoration: 'none' }}><div onClick={this.slide} className='profile'>Profile</div></Link>
                    </div>
                </nav>
            </div>
        )
    }
}