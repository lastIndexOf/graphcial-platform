import React, { Component } from 'react'
import Header from './components/Header/Header'
import Container from './components/Container'

export default class App extends Component {
  render () {
    return (
      <div className="gra-app">
        <Header />
        <Container />
      </div>
    )
  }
}