import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import FlatListScreen from "./FlatListScreen";
import SectionListScreen from "./SectionListScreen";
import TouchableScreen from "./TouchableScreen";
import ModalScreen from "./ModalScreen";
import PullToRefreshScreen from "./PullToRefreshScreen";

export type RootStackParamList = {
    Home: undefined;
    FlatListDemo: undefined;
    SectionListDemo: undefined;
    TouchableDemo: undefined;
    ModalDemo: undefined;
    PullToRefreshDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
            <Stack.Screen name="SectionListDemo" component={SectionListScreen} />
            <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
            <Stack.Screen name="ModalDemo" component={ModalScreen} />
            <Stack.Screen name="PullToRefreshDemo" component={PullToRefreshScreen} />
        </Stack.Navigator>
    )
}
export default RootNavigator;