import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FlatListItem from "./FlatListItem";
import reactotron from "../../ReactotronConfig";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


const FlatListFunctionalComponent = () => {
    reactotron.log('Parent is called!');

    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }

    // const onItemClicked = ((item) => {
    //     reactotron.log(item);
    // });

    const onItemClicked = useCallback((item) => {
        reactotron.log(item);
    }, []);

    const renderItemList = ({item}) => {
        return <FlatListItem item={item.title} onPress={onItemClicked}/>;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{backgroundColor: 'red'}}
                data={DATA}
                renderItem={renderItemList}
                keyExtractor={item => item.id}
            />

            <View style={styles.counterView}>
                <TouchableOpacity
                    onPress={incrementCounter}
                >
                    <Text style={styles.title}>Increment Counter</Text>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Count in Parent -- > {count}
                </Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    counterView: {
        padding: 15
    }
});

export default FlatListFunctionalComponent;
