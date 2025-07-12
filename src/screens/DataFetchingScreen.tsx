import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Post {
    id: number,
    title: string
}

const DataFetchingScreen: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);


    const fetchListOfPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data: Post[] = response.json();

            if (data) {
                setData(data)
                setLoading(false)
            }
            else {
                setData([])
                setLoading(false)

            }

        } catch (err) {
            console.error(err);

        }
    }
    useEffect(() => {
        fetchListOfPosts
    }, [])

    const renderItem = ({ item }: { item: Post }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data fetching using fetch API</Text>
            {
                loading ? <ActivityIndicator style={styles.loader} size={"large"} color={"#0000ff"} /> :
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}

                    />
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: "yellow",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    }, title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    loader: {
        marginVertical: 20,
    }

});

export default DataFetchingScreen;
