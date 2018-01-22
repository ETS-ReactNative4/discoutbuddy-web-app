import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Header,Segment,Subheader} from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import StoreProducts from './StoreProducts'

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
        return(
            <div> 
                            <Segment color='red'>
                                <Header as='h2'>
                                    {store.storename}
                                    <Header.Subheader>
                                    {store.city}
                                    </Header.Subheader>
                                </Header>
                            </Segment>

                            <Segment>
                                <StoreProducts storeId={this.props.match.params.filter} />
                            </Segment>

            </div>
        )
    }
    async _getStores(){
        let response = await fetch('http://130.211.50.71:89/api/store/'+this.props.match.params.filter);
        let result1 = await response.json();
    
        this.setState({
          store: result1.data
        })
      }
    
      componentDidMount(){
        this._getStores();
     
      }
}


export default  (SingleStore);

