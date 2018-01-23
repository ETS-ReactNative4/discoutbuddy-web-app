import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Header,Segment,Subheader} from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import StoreProducts from './StoreProducts'
import {Card,} from 'reactstrap'    

const cardHeight={
    height:50
}

const cardWidth={
    width:50
}
class SingleStore extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            store: '',
        
        }
    }    
    render(){
        const {store} = this.state.store;
        const {filtID} = this.props.match.params.filter;
        console.log('single',filtID)

        return(
            <div> 
                <h1>{this.state.store.storename}</h1>
                <Card style={{cardHeight,cardWidth}}>
                    <StoreProducts storeId={this.props.match.params.filter} />
                 </Card>
            </div>
        )
    }
    async _getStores(){
        let response = await fetch('http://api.rookies.co.za/api/store/'+this.props.match.params.filter);
        let result1 = await response.json();
    
        this.setState({
          store: result1.data
        },()=>console.log('store is coming back',this.state.store))
      }
    
      componentDidMount(){
        this._getStores();
     
      }
}


export default  SingleStore;

