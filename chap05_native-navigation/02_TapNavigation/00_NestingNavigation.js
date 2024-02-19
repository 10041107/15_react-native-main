import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TapHome from './01_TapHome';

const Tap = createBottomTabNavigator();

const NestingNavigation = () =>{
    return(
        <Tap.Navigator>
            <Tap.Screen
            name="home"
            component={TapHome}
            options={{
                tapBarIcon: ({focused})=> focused? (<Ionicons name='home' size={30} color="red"/>) : (<Ionicons name='home' size={30} color="black"/>),
                tapBarBadge: 3
            }}
            />
            <Tap.Screen
            name="rootPage"
            component={TapView}
            options={{
                tapBarIcon: ({focused})=> focused? (<Ionicons name='eye.outline' size={30} color="red"/>) : (<Ionicons name='eye.outline' size={30} color="black"/>)

            }}
            />

        </Tap.Navigator>

    )
}

export default NestingNavigation;