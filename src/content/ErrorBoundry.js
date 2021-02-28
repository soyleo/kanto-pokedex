import React from 'react';

class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return(
                <div>
                    <img className='error' alt='Error' src="https://i.imgflip.com/3kmejr.jpg" />
                    <h1>A savage ERROR has appeared!</h1>;
                </div>
            ) 
        }
        else {
            return this.props.children;
        }
    }

}

export default ErrorBoundry;