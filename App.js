import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { View, Text } from 'react-native'
import {PersistGate} from 'redux-persist/integration/react'
import { store, persistor } from './src/public/redux/store/index'

import Login from './src/screens/login'
import EngineerList from './src/screens/company/engineerList'
import EngineerDetail from './src/screens/company/engDetail'
import CompanyProject from './src/screens/company/project'
import AddComProject from './src/screens/company/addProject'
import EngineerProject from './src/screens/engineer/project'
import ReplyProject from './src/screens/engineer/replyProject'
import SelectProject from './src/screens/company/selectProject'
import ConfirmSendProject from './src/screens/company/confirmSendProject'

const StackNavigator = createStackNavigator({
  EngineerList: {
    screen: EngineerList,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  EngineerDetail: {
    screen: EngineerDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  'Company Projects': {
    screen: CompanyProject,    
  },
  'Add Project':{
    screen: AddComProject
  },
  'Engineer Projects':{
    screen: EngineerProject
  },
  'Reply Project':{
    screen: ReplyProject
  },
  'Select Project':{
    screen: SelectProject
  },
  'Confirm Send Project':{
    screen: ConfirmSendProject
  }
})

const Main = createAppContainer(StackNavigator)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
           <PaperProvider>
            <Main />
          </PaperProvider>
        </PersistGate>    
      </Provider>
    )
  }
}

export default App;
