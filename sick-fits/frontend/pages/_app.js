import App, { Container } from 'next/app'
import Page from '../components/Page'
import React, { Component } from 'react'

export default class MyApp extends App {
    render() {
        const { Component } = this.props
        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}