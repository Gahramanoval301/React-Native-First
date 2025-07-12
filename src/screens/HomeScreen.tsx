import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "./RootNavigator"
import { FlatList } from "react-native-gesture-handler"

const topics = [
    {
        id: 1,
        title: "Flat list demo",
        screen: "FlatListDemo"
    },
    {
        id: 2,
        title: "Section list demo",
        screen: "SectionListDemo"
    },
    {
        id: 3,
        title: "Touchable demo",
        screen: "TouchableDemo"
    },
    {
        id: 4,
        title: "Modal demo",
        screen: "ModalDemo"
    },
    {
        id: 4,
        title: "Pull To Refresh",
        screen: "PullToRefreshDemo"
    },
]


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
    navigation: HomeScreenNavigationProp
}
const HomeScreen: React.FC<Props> = ({ navigation }) => {
    // const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            <FlatList
                data={topics}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.topicBtn}
                        onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}>
                        <Text style={styles.topicText}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
            {/* <Button title="Flat List Demo"
                onPress={() => navigation.navigate('FlatListDemo')} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    topicBtn: {
        backgroundColor: "#e0e0e0",
        padding: 16,
        marginBottom: 8,
        borderRadius: 8
    },
    topicText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
export default HomeScreen
