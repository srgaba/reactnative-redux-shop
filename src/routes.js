import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/main';
import User from './Pages/user';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF'
            }
        }
    )
);

export default Routes;