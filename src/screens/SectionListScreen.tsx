import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

const SECTION_DATA = [
    {
        title: "Men",
        data: ['Men Thsirt 1', 'Men Thsirt 2']
    },
    {
        title: "Women",
        data: ['Women Thsirt 1', 'Women Thsirt 2']
    },
    {
        title: "Kids",
        data: ['Kids Thsirt 1', 'Kids Thsirt 2']
    },
]
const SectionListScreen: React.FC = () => {

    const handleRenderItem = ({ item }: { item: string }) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    )

    const renderSectionHeader = ({
        section: { title }
    }: {
        section: { title: string }
    }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Section list component</Text>
            <SectionList
                renderSectionHeader={renderSectionHeader}
                sections={SECTION_DATA}
                renderItem={handleRenderItem}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeee',
    },
    sectionHeader: {
        backgroundColor: "#f0f0f0",
        padding: 5
    },
    sectionHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SectionListScreen;
