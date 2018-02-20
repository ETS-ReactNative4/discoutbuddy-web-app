import React, {Component} from 'react';
import {Grid, Image, Menu, Dropdown, Icon, Segment} from 'semantic-ui-react';
// import {connect} from 'react-redux';
import {Container, Row, Col} from'reactstrap';
import {Link, Route} from 'react-router-dom';
import DashboardPart from './webparts/DashboardPart';
import ProductPart from './webparts/ProductPart';
import StorePart from './webparts/StorePart';
import StoreEditPart from './webparts/EditStore';
import SettingPart from './webparts/SettingPart';
import {connect} from 'react-redux';

class Manage extends Component{

    render(){
    
        return (
                <Container>
                    <Row>
                            <Col md="2">
                                <Menu secondary vertical>
                                    <Menu.Item>
                                        <Image src={this.props.user.picture} size="small" />
                                    </Menu.Item>
                                    <Link to="/manage/"><Menu.Item link={true}>Dashboard</Menu.Item></Link>
                                    <Link to={"/manage/store"}><Menu.Item link={true}>My Stores</Menu.Item></Link>
                                    
                                </Menu>
                            </Col>
                        <Col md="10">
                            <Segment padded tartiary piled>
                            <Route path="/manage/" exact component={DashboardPart} />
                            <Route path="/manage/store" component={StorePart} exact />
                            <Route path="/manage/store/edit/:storeId" component={StoreEditPart} />
                            <Route path="/manage/product/:storeId" component={ProductPart} />
                            <Route path="/manage/setting" component={SettingPart} />
                            </Segment>
                        </Col>
                    </Row>
                </Container>
        
        )
    }
}
function matchStateToProps(state){
    return {
        user: state.auth
    }
}
export default connect(matchStateToProps)(Manage);