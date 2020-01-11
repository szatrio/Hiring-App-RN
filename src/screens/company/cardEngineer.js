import React, { Component } from 'react'
import {Avatar, Button, Title, Paragraph} from 'react-native-paper'
import { StyleSheet, Image, Text, Icon } from 'react-native'
import { Card, } from 'react-native-elements'

export default class cardEngineer extends Component {
    render() {
        return (
            <>
                {this.props.list.map(eng =>
                    <Card key={eng.id_engineer} containerStyle={styles.card} image={require('../../assets/img/default-propic.jpg')}>
                        <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>
                            {eng.name}
                        </Text>
                            <Paragraph style={{paddingBottom:10, color:'white'}}>{eng.description}</Paragraph>
                    </Card>
                            // source={{ uri: 'https://picsum.photos/700' }}
                )}
            </>
        )
    }
}

const styles = StyleSheet.create({
    card: {
    //   width: '45%',
    //   backgroundColor: 'cyan',
    margin: 5,
    //   borderBottomEndRadius:10
    //   padding: 30,
    backgroundColor: '#AB84C8',
    width: '45%',
    borderRadius:2
    },
  });