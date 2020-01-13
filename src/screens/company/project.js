import React, { Component } from 'react'
import { Text } from 'native-base'
import { Container, ScrollView, View } from 'react-native'
import { DataTable, Button } from 'react-native-paper'
import {connect} from 'react-redux'
import { getProject } from '../../public/redux/actions/project'


class Project extends Component {


    componentDidMount(){
        this.props.dispatch(getProject(this.props.authUser.token))
    }

    render() {
        // console.log(JSON.stringify(this.props.projects.projects, null, 0), "ii props table")
        let projects = this.props.projects.projects
        return (
            <>
                    <DataTable style={{borderWidth:0.4}}>
                        <DataTable.Header>
                        <DataTable.Title style={{marginRight:50}}>Project</DataTable.Title>
                        <DataTable.Title >Engineers</DataTable.Title>
                        <DataTable.Title style={{marginLeft:50}}>Status</DataTable.Title>
                        </DataTable.Header>
                        <ScrollView style={{maxHeight: 200}}>
                         {projects.map(p =>
                            <DataTable.Row key={p.id_project}>
                            <DataTable.Cell style={{marginRight:50}}>{p.name_project}</DataTable.Cell>
                            <DataTable.Cell >{p.engineer ? p.engineer: <>No data</>}</DataTable.Cell>
                            <DataTable.Cell style={{marginLeft:50}}>{p.status}</DataTable.Cell>
                            </DataTable.Row>
                        )}   
                        </ScrollView>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center', fontWeight: 'bold', alignItems: 'center'}}>Total: {projects.length} projects</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    
                <View style={{flexDirection: 'row'}}>
                    <Button mode='contained' color='green' style={{width:150, margin:10}} onPress={() => this.props.navigation.navigate('Add Project')}>Add Project</Button>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    projects : state.Project,
    authUser : state.Auth
})

const mapDispatchToProps = (dispatch) => ({
  getProject,
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)