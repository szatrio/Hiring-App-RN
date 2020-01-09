import React, { Component } from 'react'
import { Searchbar, Button, Card, Avatar, Badge, IconButton, Colors } from 'react-native-paper'
import {Container} from 'native-base'
import { StyleSheet, ImageBackground,View, Text, Image} from 'react-native'

class EngineerList extends Component{
    state = {
        firstQuery: '',
      }

    render(){
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
                          <Searchbar
                                  placeholder="Search"
                                  style={styles.searchBar}
                                  clearicon
                              />
                        </View>
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
    searchBar: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 38,
        width: 250,
        textAlign: 'center',
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
   
  });

export default EngineerList
