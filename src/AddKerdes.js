import React, {Component} from 'react'


class AddKerdes extends Component {
    state = {
        kerdes: ''
    }
    handleChange= (e) => {
        this.setState({
         [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addKerdes(this.state);
        this.setState({
            kerdes: ' '
        })
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.handleSubmit}>  <br />
                    <label htmlFor="kerdes"> Új kérdés:</label>
                    <input type="text" id="kerdes" onChange={this.handleChange} value={this.state.kerdes} />
                    <button>Kérdés Hozzáadása</button>
                </form>
            </div>
        )
    }
}

export default AddKerdes;