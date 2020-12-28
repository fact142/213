import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);   
        
        this.initialState = {
            singer_name: '',
            singer_description: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { singer_name, singer_description } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="singer_name">Name</label>
                <input 
                    type="text" 
                    name="singer_name" 
                    id="singer_name"
                    value={singer_name} 
                    onChange={this.handleChange} />
                <label for="singer_description">Job</label>
                <input 
                    type="text" 
                    name="singer_description" 
                    id="singer_description"
                    value={singer_description} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;