import React from 'react';
import './App.css';
import SingerList from "./components/SingerList";
import PostForm from "./components/PostForm.js"
import PutForm from './components/PutForm.js'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singers: [],
            id_singer: '',
            singer_name: '',
            singer_description: '',
            };
        this.handleDelete=this.handleDelete.bind(this)
        };

    handleSubmit = singer => {
        fetch('http://localhost:3141/singer/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(singer)
        })  
        .then(res => res.json()) 
        .then(res => this.setState({singers: [...this.state.singers, res]}))
        };

    handleDelete(id) {
        const { singers } = this.state;
        fetch('http://localhost:3141/singer/' + id, {
            method: 'DELETE',
        })  
        this.setState({
            singers: singers.filter((singer) => { 
                return singer.id_singer !== id;
            })
        });

    }

    handleEdit = singer => {
        let {singers} = this.state;
        const body = {"singer_name": singer.singer_name, "singer_description": singer.singer_description}
        fetch(`http://localhost:3141/singer/${singer.id_singer}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)  
        })  
        .then(res => res.json()) 
        .then(res => this.setState({
            singers: singers.map((singerf) => { 
                if(singerf.id_singer === res.id_singer){singerf = res};
                return singerf
            })
        }))
        ;
    };

    

    callApi(){
        fetch("http://localhost:3141/singer")
            .then((res) => res.json()
            .then((data) => {
                this.setState({singers: data})
            })
            )
            .catch(err => err)
    }
    componentDidMount() {
        this.callApi()
    }

    render(){
        return(
            <fieldset className="container mt-5">
                <h2 className="text-center mt-5">POST Request</h2>
                <br></br>
                <PostForm handleSubmit={this.handleSubmit}/>
                <br></br>
                <h2 className="text-center mt-5">PUT Request</h2>
                <PutForm handleEdit={this.handleEdit}/>
                <br></br>
                <h2 className="text-center mt-5">Clients List</h2>
                <br></br>
                <SingerList singers={this.state.singers} remove={this.handleDelete}/>
                <br></br>
                <br></br>
                <br></br>


            </fieldset>
        )
    }
}

export default App;