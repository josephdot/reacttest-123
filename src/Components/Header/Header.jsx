import React, { Component } from 'react'
import './Header.css'
import MonkeyHeaderImg from '../../images/header-img.png'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row flex-middle">
            <div className="col-12 col-xs-6">
              <img className="header_img" src={MonkeyHeaderImg} width="" height="" alt="" />
            </div>
            <div className="col-12 col-xs-6">
              <div className="title text-left">
                <h1>Terms and Conditions</h1>
                <h1 className="text-bold">Agreement</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
