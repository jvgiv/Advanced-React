import App, { Container } from 'next/app'

import React, { Component } from 'react'

export default class MyApp extends App {
    render() {
        const { Component } = this.props
        return (
            <Container>
                <p>Hey I'm on every page.</p>
            </Container>
        )
    }
}
