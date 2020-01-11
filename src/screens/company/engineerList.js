import React, { Component } from 'react'
import { FAB, Avatar, Badge, IconButton, Colors, Drawer, Modal, Portal, Button, Card, Provider, Title, Paragraph } from 'react-native-paper'
import { Container, Header, Item, Input, Icon, Segment, Text } from 'native-base'
import { StyleSheet, ImageBackground,View, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { getEngineersAction } from '../../public/redux/actions/engineersList'
import { ButtonGroup } from 'react-native-elements'

import CardEngineer from './cardEngineer'

class EngineerList extends Component{

    constructor () {
        super()
        this.state = {
          firstQuery: '',
          visible: false,
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }

    componentDidMount(){
      // this.doFilter()
      this.props.dispatch(this.props.getEngineersAction(this.props.authUser.token))
    }

    // doFilter(data){
      
      // this.props.dispatch(this.props.getEngineersAction(this.props.authUser.token, this.state.selectedIndex))
    // }

    // setData()

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }

    _showModal = () => this.setState({ visible: true })
    _hideModal = () => this.setState({ visible: false })

    render(){
      // console.log(JSON.stringify(this.props.engineersList.engineersList, null, 4), "ini props engineerlist")
      // console.log(this.state.selectedIndex," ini selectedIndex")  
      const buttons = ['ASC', 'DESC']
      return(
            <>
                <Container style={styles.container}>
                        <View style={styles.ownHeader}>
                        <Avatar.Image size={50} source={require('../../assets/img/default-propic.jpg')} />
                        {/* <Badge>3</Badge> */}
                        <Image style={styles.arkademy} source={require('../../assets/img/arkademy-logo.png')} />
                        <IconButton
                            icon="bell"
                            color={Colors.purple200}
                            size={40}
                            onPress={() => console.log('Pressed')}
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
                            <CardEngineer list={this.props.engineersList.engineersList} />
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
            </>
        )
    }
}

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
