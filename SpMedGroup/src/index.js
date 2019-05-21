import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignIn from './pages/signin';
import Consultas from './pages/minhasConsultas';
import Especializacoes from './pages/especializacoes';

const AuthStack = createStackNavigator({ SignIn });

const MainNavigator = createBottomTabNavigator (
    {
    Consultas,
    Especializacoes,
    },
         {
        //Rota inicial
        initialRouteName: 'Consultas',        
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            inactiveBackgroundColor: "2A4EFF",
            activeBackgroundColor: "2A4EFF",
            activeTintColor: "00DFA9",
            inactiveTintColor: "00DFA9",
            style: {
              height: 50
                }
            }
         }
);

export default createAppContainer(
    createSwitchNavigator(
      {
        MainNavigator,
        AuthStack
      },
      {
        initialRouteName: "AuthStack"
      }
    )
  );


