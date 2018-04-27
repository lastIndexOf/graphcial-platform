import React, { Component } from 'react'
import Header from './components/Header/Header'
import Container from './components/Container'

import Dragmodal from './components/Dragmodal/Dragmodal'

import './App.scss'

export default class App extends Component {
  render () {
    return (
      <div className="gra-app">
        <Header />
        <Container />
        <Dragmodal />
      </div>
    )
  }
}