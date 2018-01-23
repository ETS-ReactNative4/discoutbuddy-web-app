import React, {Component} from 'react';
import {Grid, Image, Menu, Dropdown, Icon} from 'semantic-ui-react';
// import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import DashboardPart from './webparts/DashboardPart';
import ProductPart from './webparts/ProductPart';
import StorePart from './webparts/StorePart';
import SettingPart from './webparts/SettingPart';

class Manage extends Component{
    render(){
        return (
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column computer={1} />
                            <Grid.Column computer={3}>
                                <Menu secondary vertical>
                                    <Menu.Item>
                                        <Image src="https://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg" size="large" />
                                    </Menu.Item>
                                    <Link to="/manage/"><Menu.Item link={true}><Icon name="dashboard" /> Dashboard</Menu.Item></Link>
                                    <Link to="/manage/store"><Menu.Item link={true}><Icon name="cart" /> My Stores</Menu.Item></Link>
                                    <Link to="/manage/setting"><Menu.Item link={true}><Icon name="setting" /> Setting</Menu.Item></Link>
                                    <Dropdown item text='Options'>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Text Size</Dropdown.Header>
                                        <Dropdown.Item>Small</Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                        <Dropdown.Item>Large</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Menu>
                            </Grid.Column>
                        <Grid.Column computer={10}>
                            <Route path="/manage/" exact component={DashboardPart} />
                            <Route path="/manage/store" component={StorePart} />
                            <Route path="/manage/product" component={ProductPart} />
                            <Route path="/manage/setting" component={SettingPart} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        
        )
    }
}
function matchStateToProps(state){
    return {
        
    }
}
export default Manage;