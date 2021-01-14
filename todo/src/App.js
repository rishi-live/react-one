import React from "react";
import logo from './logo.svg';
import "./App.css";



class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newItem: "",
            list : []
        }
    }

    addItem(todoValue){
        if(todoValue !== ""){
            const newItem ={
                id:Date.now(),
                value: todoValue,
                isDone:false
            };
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                 newItem:""
            });
        }
    }

    deleteItem(id){
        const list = [...this.state.list];
        const updatedlist = list.filter(item=>item.id !== id);
        this.setState({list: updatedlist })
    }

    updateInput(input){
        this.setState({ newItem : input })
    }

    render(){
        return(
            <div className="container">
            <h1>Rishi</h1>
            <img src={logo} className="App-logo"/>
            <h2>To-Do Applicaton</h2>
            Add an Item....
            <br/>
            <input type="text" className="input-text"
            placeholder="Write do to" required value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />
            <button className="add-btn"
            onClick={()=> this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >Add Todo</button>
            <div>
                <ul>
                    { this.state.list.map( item => {
                        return(
                            <li key={ item.id }>
                                <input
                                type="checkbox"
                                name="isDone"
                                checked = { item.isDone }
                                onChange={ ()=>{} } 
                                />
                                { item.value }
                                <button className="btn" 
                                onClick={ ()=> this.deleteItem( item.id )}></button>
                            </li>
                        )
                    })}
                    <li>
                        <input type="checkbox" name="" id=""/>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}

export default App;