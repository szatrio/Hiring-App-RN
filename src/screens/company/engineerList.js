import React, { Component } from 'react'
import { FAB, Avatar, Badge, IconButton, Colors, Drawer, Modal, Portal, Button, Card, Divider, Provider, Title, Paragraph } from 'react-native-paper'
import { Container, Header, Item, Input, Icon, Segment, Text } from 'native-base'
import { StyleSheet, ImageBackground,View, FlatList, ScrollView, Image, TouchableOpacity, DrawerLayoutAndroid} from 'react-native'
import {connect} from 'react-redux'
import { getEngineersAction } from '../../public/redux/actions/engineersList'
import { ButtonGroup } from 'react-native-elements'
// import { createDrawerNavigator, createAppContainer } from 'react-navigation-drawer'
import login from '../login'
import asios from 'axios'

import CardEngineer from './cardEngineer'

class EngineerList extends Component{

    constructor () {
        super()
        this.state = {
          firstQuery: '',
          visible: false,
          selectedIndex: 0,
          searchNmae: ''
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
      }


    componentDidMount(){
      // this.doFilter()
      this.props.dispatch(this.props.getEngineersAction(this.props.authUser.token))
    }

    // doFilter(data){
      
      // this.props.dispatch(this.props.getEngineersAction(this.props.authUser.token, this.state.selectedIndex))
    // }

    navigateDetail(e){
      // console.log(e,"adalah id di navigate")
      this.props.navigation.navigate('EngineerDetail', {eng: e})
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }

    _showModal = () => this.setState({ visible: true })
    _hideModal = () => this.setState({ visible: false })

    openDrawer(){
      this.drawer.openDrawer();
    }

    render(){
      // console.log(JSON.stringify(this.props.engineersList.engineersList, null, 4), "ini props engineerlist")
      // console.log(this.state.selectedIndex," ini selectedIndex")  
      const buttons = ['ASC', 'DESC']
      // console.log(JSON.stringify(this.props.authUser.userCompany.name, null, 4), "ini props engineerlist")
      let userName = (this.props.authUser.userEngineer.name)? this.props.authUser.userEngineer.name: this.props.authUser.userCompany.name
      let drawer = <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <Container>
                    <View style={{backgroundColor:'#AB84C8'}}>
                      <TouchableOpacity>
                          <Avatar.Image style={{marginHorizontal: 60, marginTop: 50}} size={80} source={require('../../assets/img/default-propic.jpg')} />
                          <Text style={{margin: 10, marginHorizontal:40, color: 'white',fontSize: 15, textAlign: 'center', fontWeight: 'bold'}}>{userName}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{marginTop: 15}}>
                      {(this.props.authUser.userEngineer.name)?
                      <Drawer.Item onPress={() => this.props.navigation.push("Engineer Projects")} icon={"briefcase-check"} label="My Projects" />
                      :
                      <Drawer.Item onPress={() => this.props.navigation.push("Company Projects")} icon={"briefcase-check"} label="Projects" />
                      }
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={() => this.props.navigation.push("Login")}>
                      <Drawer.Item icon={"door-open"} label="Logout" />
                    </TouchableOpacity>
                    </Container>
                  </View>
      return(
            <>
                <DrawerLayoutAndroid ref={_drawer => (this.drawer = _drawer)}
                  drawerWidth={200}
                  drawerPosition="left" 
                  renderNavigationView={() => drawer}>
                <Container style={styles.container}>
                        <View style={styles.ownHeader}>
                        {/* <Badge>3</Badge> */}
                        <TouchableOpacity onPress={this.openDrawer}>
                          <Avatar.Image size={50} source={require('../../assets/img/default-propic.jpg')} />
                        </TouchableOpacity>
                        <Image style={styles.arkademy}  source={require('../../assets/img/arkademy-logo.png')} />
                        <IconButton
                            icon="bell"
                            color={Colors.purple200}
                            size={40}
                            style={styles.notif}
                            />
                        </View>
                        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                          {/* <Searchbar
                                  placeholder="Search"
                                  style={styles.searchBar}
                              /> */}
                              <Item style={styles.searchBar}>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                              </Item>
                                
                        </View>
                        <ScrollView contentContainerStyle={styles.scrolls} style={{height: '100%', marginHorizontal: -20}}
                        // style={{marginHorizontal:-25, marginTop: 10, marginBottom: -20}}
                        >
                            <CardEngineer list={this.props.engineersList.engineersList} getIdFromCard={(e) => {this.navigateDetail(e)}}/>
                        </ScrollView>
                        <FAB
                          style={styles.fab}
                          medium
                          icon="filter"
                          onPress={this._showModal}
                          />
                        <Provider>
                          <Portal>
                            <Modal visible={this.state.visible} onDismiss={this._hideModal}>
                            <Card style={styles.modal}>
                              <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Order: </Paragraph>
                                <ButtonGroup
                                  onPress={this.updateIndex}
                                  selectedIndex={this.state.selectedIndex}
                                  buttons={buttons}
                                  containerStyle={{height: 50}}
                                />
                              </Card.Content>
                            </Card>
                            </Modal>
                          </Portal>
                        </Provider>
                </Container>
                </DrawerLayoutAndroid>
            </>
        )
    }
}

// const AppDrawerNavigator = createDrawerNavigator({
//   Login: login
// })

// export default createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 30,
    },
    ownHeader: {
      marginTop: 10,
      fontSize: 18,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'pink',
    },
    arkademy: {
        width:120,
        height:100,
        marginTop:-25,
        // marginRight: 5,
        marginLeft: 20
    },
    notif: {
      width:100,
      height:100,
      marginTop:-25,     
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#AB84C8',
      color: 'white'
    },
    modal: {
      width: '90%',
      marginLeft: 15,
      height:200
    },
    searchBar: {
      width: '100%', 
      marginTop:-15,
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 7,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      paddingHorizontal:15,
    },
    scrolls: {
      // marginHorizontal:-25,
      // marginTop: 10,
      // marginBottom: -20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  });

const mapStateToProps = (state) => ({
    authUser : state.Auth,
    engineersList : state.getEngineersReducer
})

const mapDispatchToProps = (dispatch) =>({
    getEngineersAction,
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(EngineerList)
