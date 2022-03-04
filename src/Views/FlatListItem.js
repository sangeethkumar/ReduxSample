import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import reactotron from "../../ReactotronConfig";

const FlatListItem = ({item, onPress}) => {

    reactotron.log('Child is called --> ' + item);
    const [count, setCount] = useState(0);

    const incrementCountValue = () => {
        setCount(count + 1);
    }

    const onPressed = useCallback((item) => {
        onPress(item);
    }, []);

    // const onPressed = () => {
    //     onPress(item);
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressed} activeOpacity={0.5}>
                <Text style={styles.textStyle}>{item}</Text>
                <TouchableOpacity
                    onPress={incrementCountValue}
                >
                    <Text style={styles.textStyle}>Increment Count</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>Count: {count}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#dcdcdc',
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textStyle: {
        marginVertical: 3,
        fontSize: 22
    }
});

export default React.memo(FlatListItem);

// Rule 1: Never pass objects as param, pass only values needed in object
// Rule 2: Always use arrow function as variable
// Rule 3: Always pass useCallback for callbacks passed as props
// Rule 4: Merging of styles ?
// Rule 5: Always bind for callback when parent is class component
// Rule 6: if there is necessary to send objects as params for memo func component, use areequal methods to compare the props
            // NOTE: Try to avoid rule no 6 using destructring 

