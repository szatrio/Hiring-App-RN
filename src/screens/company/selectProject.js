import React, { Component } from 'react'
import { Text } from 'native-base'
import { Container, ScrollView, View, TouchableOpacity } from 'react-native'
import { DataTable, Button, Menu, Modal, Portal, Card } from 'react-native-paper'
import {connect} from 'react-redux'
import { getProject, updateProject } from '../../public/redux/actions/project'
import { Icon } from 'react-native-elements'

class engProject extends Component {
    
    state = {
        visible: false,
      }

    componentDidMount(){
        this.props.dispatch(getProject(this.props.authUser.token, this.props.authUser.userEngineer.id_engineer))
    }
    
    _showModal = () => this.setState({ visible: true })
    _hideModal = () => this.setState({ visible: false })

    handleReply(){

    }

    render() {
        let projects = this.props.projects.projects.filter(p => p.id_engineer == undefined)
        let engineer = this.props.navigation.state.params.engineer
        return (
            <>
                <DataTable style={{borderWidth:0.4}}>
                        <DataTable.Header>
                        <DataTable.Title style={{marginRight:200}}>Project</DataTable.Title>
                        <DataTable.Title >Action</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView style={{maxHeight: 200}}>
                         {projects.map(p =>
                            <DataTable.Row key={p.id_project}>
                            <DataTable.Cell >{p.name_project}</DataTable.Cell>
                         <TouchableOpacity onPress={() => this.props.navigation.push("Confirm Send Project", {projectpick: p, engineer: engineer})}>
                            <DataTable.Cell>Select</DataTable.Cell>
                         </TouchableOpacity>
                            </DataTable.Row>
                        )}   
                        </ScrollView>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center', fontWeight: 'bold', alignItems: 'center'}}>Total: {projects.length} projects</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    
                    
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    projects : state.Project,
    authUser : state.Auth
})

const mapDispatchToProps = (dispatch) => ({
  updateProject,
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(engProject)