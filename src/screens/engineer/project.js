import React, { Component } from 'react'
import { Text } from 'native-base'
import { Container, ScrollView, View, TouchableOpacity } from 'react-native'
import { DataTable, Button, Menu, Modal, Portal, Card } from 'react-native-paper'
import {connect} from 'react-redux'
import { getEngProject, updateProject } from '../../public/redux/actions/project'
import { Icon } from 'react-native-elements'

class engProject extends Component {
    
    state = {
        visible: false,
      }

    componentDidMount(){
        this.props.dispatch(getEngProject(this.props.authUser.token, this.props.authUser.userEngineer.id_engineer))
    }
    
    _showModal = () => this.setState({ visible: true })
    _hideModal = () => this.setState({ visible: false })

    handleReply(){

    }

    render() {
        let projects = this.props.projects.projects
        return (
            <>
                <DataTable style={{borderWidth:0.4}}>
                        <DataTable.Header>
                        <DataTable.Title >Project</DataTable.Title>
                        <DataTable.Title style={{marginLeft:40, marginRight:10, width:500}}>Company</DataTable.Title>
                        <DataTable.Title style={{paddingLeft:30}}>Status</DataTable.Title>
                        <DataTable.Title style={{marginRight: -30}}>Action</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView style={{maxHeight: 200}}>
                         {projects.map(p =>
                            <DataTable.Row key={p.id_project}>
                            <DataTable.Cell >{p.name_project}</DataTable.Cell>
                            <DataTable.Cell >{p.company}</DataTable.Cell>
                            <DataTable.Cell style={{marginRight: -30}}>{p.status}</DataTable.Cell>
                         <TouchableOpacity onPress={() => this.props.navigation.push('Reply Project', {projectpick: p})}>
                            <DataTable.Cell >Reply</DataTable.Cell>
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
  getEngProject,
  updateProject,
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(engProject)