import React,{Component} from 'react'

class SingleStore extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.match.params.filter}</h1>
                </div>
        )
    }
}

export default SingleStore;