    import React, {Component} from 'react';

    class Form extends Component {
        constructor(props) {
            super(props);
            
            this.initialState = {
                id_singer: '',
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
            
            this.props.handleEdit(this.state);
            this.setState(this.initialState);
        }

        render() {
            const {id_singer, singer_name, singer_description } = this.state; 

            return (
                <form onSubmit={this.onFormSubmit}>
                    <label for="singer_name">Id</label>
                    <input 
                        type="text" 
                        name="id_singer" 
                        id="id_singer"
                        value={id_singer} 
                        onChange={this.handleChange} />
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