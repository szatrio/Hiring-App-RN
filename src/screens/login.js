import React, { Component } from 'react'
import { TextInput, Button, Card } from 'react-native-paper'
import { Container } from 'native-base'
import { Form } from 'react-native'
import { StyleSheet, ImageBackground, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import { loginAction } from '../public/redux/actions/auth'

class Login extends Component {

    constructor(){       
        super()
        this.state = {
          email: '',
          password: '',
        }
      }

    handleLogin(){
        // e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        } 
        // console.log(data, "ini data")
        this.props.dispatch(this.props.loginAction(data))
        if(this.props.authUser.isLogin == true){
            this.props.navigation.push("EngineerList")
        }
    }

    render() {
        const {navigate} = this.props.navigation
        // console.log(this.props, "ini props")
        // console.log(this.state, "ini state")
        console.log(this.state, "ini state")
        // console.log(this.props.authUser, "ini props")
        return (
            <>
                <Container style={styles.container}>
                {/* <Form onSubmitEditing={this.handleLogin()}> */}
                    <Card>
                        <Card.Title title="Login" />
                        <Card.Content>
                            <TextInput
                            label='Email'
                            mode='outlined' style={styles.inputForm}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            />
                            <TextInput
                            label='Password'
                            secureTextEntry={true}
                            mode='outlined'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            /> 
                            </Card.Content>
                            <Card.Actions style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Button mode="contained" onPress={() => this.handleLogin()} style={styles.buttonLogin}>
                                LOGIN
                            </Button>
                            </Card.Actions>
                    </Card>
                {/* </Form> */}
                
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
  
const mapStateToProps = (state) => ({
      authUser : state.Auth
  })

const mapDispatchToProps = (dispatch) => ({
    loginAction,
    dispatch
 })

export default connect(mapStateToProps, mapDispatchToProps)(Login)