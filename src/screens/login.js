import React, { Component } from 'react'
import { TextInput, Button, Card } from 'react-native-paper'
import {Container} from 'native-base'
import { StyleSheet, ImageBackground, AsyncStorage} from 'react-native'

class Login extends Component {
    render() {
        const {navigate} = this.props.navigation
        return (
            <>
                <Container style={styles.container}>
            
                    <Card>
                        <Card.Title title="Login" />
                        <Card.Content>
                        <TextInput
                        label='Email'
                        mode='outlined' style={styles.inputForm}
                        />
                        <TextInput
                        label='Password'
                        secureTextEntry={true}
                        mode='outlined'
                        /> 
                        </Card.Content>
                        <Card.Actions style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Button mode="contained" onPress={() => navigate('EngineerList')} style={styles.buttonLogin}>
                            LOGIN
                        </Button>
                        </Card.Actions>
                    </Card>
                
                </Container>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 30,
      backgroundColor: 'purple',
      padding: 8,
    },
    inputForm: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      textAlign: 'center',
    },
    buttonLogin: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 38,
        width: 100,
        textAlign: 'center',
      },
  });

export default Login