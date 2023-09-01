import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error) {
        this.setState(state => state.error = true);
        console.log(error)
    }

    render() {
        const {error} = this.state
        return error ? <ErrorMessage/> : this.props.children
    }
}

export default ErrorBoundary;