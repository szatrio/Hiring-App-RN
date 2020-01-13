import React, { Component } from 'react'
import { TextInput, Button, Card } from 'react-native-paper'
import { Container } from 'native-base'
import { Form } from 'react-native'
import { StyleSheet, ImageBackground, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import { addProject } from '../../public/redux/actions/project'

class addComProject extends Component {
    constructor(){       
        super()
        this.state = {
          name_project: '',
        }
      }
    
    handleAddProject(){
        const data = {
            name_project: this.state.name_project,
            status: 'Engineer Needed',
            id_company: this.props.authUser.userCompany.id_company,
            id_engineer: '',
        } 
        this.props.addProject(this.props.authUser.token, data)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <>
                <Container style={styles.container}>
                    <Card>
                        <Card.Content>
                            <TextInput
                            label='Project name'
                            mode='outlined' style={styles.inputForm}
                            value={this.state.name_project}
                            onChangeText={name_project => this.setState({ name_project })}
                            /> 
                            </Card.Content>
                            <Card.Actions style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Button mode="contained" onPress={() => this.handleAddProject()} style={styles.button}>
                                SAVE PROJECT
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
      backgroundColor: '#AB84C8',
      padding: 8,
    },
    inputForm: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      textAlign: 'center',
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 38,
        width: 150,
        textAlign: 'center',
      },
  });

const mapStateToProps = (state) => ({
    authUser : state.Auth,
})

const mapDispatchToProps = (dispatch) =>({
    addProject,
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(addComProject)