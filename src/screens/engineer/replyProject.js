import React, { Component } from 'react'
import { Text, Container } from 'native-base'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { DataTable, Button, Menu, Modal, Portal, Card } from 'react-native-paper'
import {connect} from 'react-redux'
import { StyleSheet } from 'react-native'
import { updateProject } from '../../public/redux/actions/project'

class ReplyProject extends Component {
    
    state = {
        visible: false,
      }

    _showModal = () => this.setState({ visible: true })
    _hideModal = () => this.setState({ visible: false })

    handleAccept(){  
        let p = this.props.navigation.state.params.projectpick
        console.log(this.props.updateProject,"ini p")
        const data = {
                "name_project":p.name_project,
                "status": "Completed",
                "id_company":p.id_company,
                "id_engineer":p.id_engineer
            }    
        
        this.props.updateProject(this.props.authUser.token, data, p.id_project)
        this.props.navigation.goBack()    
    }
    handleDecline(){
        let p = this.props.navigation.state.params.projectpick
        const data = {
            "name_project":p.name_project,
            "status": "Rejected",
            "id_company":p.id_company,
            "id_engineer":p.id_engineer
        }    
        this.props.updateProject(this.props.authUser.token, data, p.id_project)   
        this.props.navigation.goBack()
    }

    render() {
        const project = this.props.navigation.state.params.projectpick
        console.log("ini prsa", project)
        // console.log(this.props.navigation.state.params, "ini props ss")
        return (
            <>
                    <Container style={styles.container}>
                        <Card style={{padding : 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, margin: 10}}>Are you accept "{project.name_project}"?</Text>
                            <View style={{flexDirection: 'row',marginTop: 10}}>
                                <Button mode="contained" style={{marginHorizontal:20, backgroundColor: 'green'}} onPress={()=>{this.handleAccept()}}>
                                    Accept
                                </Button>
                                <Button mode="contained" style={{marginHorizontal:20, backgroundColor: 'red'}} onPress={()=>{this.handleDecline()}}>
                                    Decline
                                </Button>
                            </View>    
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
      backgroundColor: '#AB84C8',
      padding: 8,
    },
})

const mapStateToProps = (state) => ({
    projects : state.Project,
    authUser : state.Auth
})

const mapDispatchToProps = (dispatch) => ({
  updateProject,
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ReplyProject)