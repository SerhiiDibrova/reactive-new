package com.myfabricapp.utils

import React, { Component, ErrorInfo } from 'react';
import { Redirect } from 'react-router-dom';

class NavigationError extends Error {}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    redirect: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
        if (error instanceof NavigationError) {
            console.warn("Navigation error occurred:", error);
            this.setState({ redirect: true });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/safe-route" />;
        }

        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;