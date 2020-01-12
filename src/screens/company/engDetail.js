import React, { Component } from 'react'
import {Text, Card, Accordion} from 'native-base'
import {View, Image, ScrollView} from 'react-native'
import { Button } from 'react-native-paper' 

export default class engDetail extends Component {
    render() {
        // console.log(this.props.navigation.state.params.id_engineer,"ini props detail engineer")
        const eng = this.props.navigation.state.params.eng
        return (
            <>
               <View style={{backgroundColor: 'white', height: '100%'}}>
                        <View >
                                <Image style={{width: '100%', height: 200, opacity: 0.75}} source={{uri: 'https://images.unsplash.com/photo-1578553981570-c8c951da4d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'}} />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column'}}>
                                <Image style={{width: 100, height: 100, borderRadius:50, margin:20, marginLeft:10, borderWidth:5, borderColor: 'white', marginTop: -50}} source={require('../../assets/img/default-propic.jpg')} />
                                <Button style={{width: 50, marginLeft:30}} mode="contained" onPress={() => console.log('Pressed')}>Hire</Button>
                            </View>
                                <View style={{flexDirection: 'column', marginTop:-35, marginLeft:15}}>
                                <Text style={{color: "white", textShadowColor: 'black', textShadowOffset: { width: 0, height: -3 },textShadowRadius: 10, fontSize: 20, fontWeight: 'bold'}}>
                                    {eng.name}
                                </Text>
                                    <View style={{marginTop:20}}>
                                        <Text >
                                            {eng.description}
                                        </Text>
                                        <Card style={{maxWidth:300,maxHeight:230,borderRadius:10, marginTop:25, marginLeft:-18, padding:10}}>
                                            <ScrollView >
                                                <Text style={{fontWeight: 'bold'}}>Skills</Text>
                                                <View
                                                style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />
                                                <Text>{(eng.skills)?<Text>{eng.skills}</Text>:<Text>No data</Text>}</Text>
                                                
                                                <Text style={{marginTop:10, fontWeight: 'bold'}}>Location</Text>
                                                <View
                                                style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />
                                                <Text>{(eng.location)?<Text>{eng.location}</Text>:<Text>No data</Text>}</Text>
                                            
                                                <Text style={{marginTop:10, fontWeight: 'bold'}}>Showcase</Text>
                                                <View
                                                style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />
                                                <Text style={{width: 150}}>{(eng.showcase)?<Text>{eng.showcase}</Text>:<Text>No data</Text>}</Text>
                                                
                                                <Text style={{marginTop:10, fontWeight: 'bold'}}>Expected Salary</Text>
                                                <View
                                                style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />
                                                <Text >{(eng.e_salary)?<Text>{eng.e_salary}</Text>:<Text>No data</Text>}</Text>
                                            </ScrollView>
                                        </Card>
                                    </View>
                                </View>
                        </View>
               </View>
            </>
        )
    }
}
