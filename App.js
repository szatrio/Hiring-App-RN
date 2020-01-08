import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
// import {Provider} from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { View, Text } from 'react-native'
import Login from './src/screens/login'

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  }
})

const Main = createAppContainer(StackNavigator)

class App extends React.Component {
  render() {
    return (
      // <Provider>    
           <PaperProvider>
            <Main />
          </PaperProvider>
      // </Provider>
      // <View>
      //   <Text>
      //     Heloo Dunia
      //   </Text>
      // </View>
    )
  }
}

export default App;
