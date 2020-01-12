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

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  EngineerList: {
    screen: EngineerList,
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
