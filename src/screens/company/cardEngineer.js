import React, { Component } from 'react'
import {Avatar, Button, Title, Paragraph} from 'react-native-paper'
import { StyleSheet, Image, Text, Icon } from 'react-native'
import { Card, } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class cardEngineer extends Component {
    
    cardPress(e){
        this.props.getIdFromCard(e)
        console.log(e, "tertekan")
    }
    
    render() {
        return (
            <>
                {this.props.list.map(eng =>
                            <Card key={eng.id_engineer} containerStyle={styles.card}  image={require('../../assets/img/default-propic.jpg')}>
                                <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>
                                    {eng.name}
                                </Text>
                                    <Paragraph style={{paddingBottom:10, color:'white'}}>{eng.description}</Paragraph>
                                <Button style={{borderColor: 'white', borderWidth:1, borderRadius: 5}}onPress={()=>{this.cardPress(eng)}}><Text style={{color: 'white'}}>Detail</Text></Button>
                            </Card>
                  )}
            </>
        )
    }
}

const styles = StyleSheet.create({
    card: {
    
    marginHorizontal: 5,
    width: '45%',
    backgroundColor: '#AB84C8'
    
    },
  });