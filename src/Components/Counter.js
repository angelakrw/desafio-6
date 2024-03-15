import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {

    const [inputToAdd, setInputToAdd] = useState(0)

    const count = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()
    const confirmAdd = () => {
        const numericInput = Number(inputToAdd)
        if (!isNaN(numericInput)) {
            dispatch(incrementByAmount(inputToAdd))
        } else {
            console.error("Not a number.")
        }
    }

  return (
    <View style={styles.container}>

        {/* Modificador de contador */}
        <View style={styles.buttonsContainer}>
            <Pressable 
                style={styles.button}
                onPress={() => dispatch(decrement())}
            >
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            
            <Text style={styles.span}>{count}</Text>

            <Pressable 
                style={styles.button}
                onPress={() => dispatch(increment())}    
            >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>

        <View style={styles.buttonsContainer}>
            <TextInput
                placeholder='0'
                value={inputToAdd.toString()}
                onChangeText={text => setInputToAdd(Number(text))}
                style={styles.spanInput}
                onSubmitEditing={confirmAdd}
                keyboardType='numeric'
            />

            <Pressable 
                style={styles.button}
                onPress={confirmAdd}
            >
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} width={200}>
                <Text style={styles.buttonText} numberOfLines={1} width={70}>Reset</Text>
            </Pressable>
        </View>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 5
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        borderWidth: 2,
        width: 50,
        marginHorizontal: 5,
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: 'Ubuntu',
        fontSize: 17,
        margin: 5,
        textAlign: 'center',
        width: '100%'
    },

    span: {
        fontFamily: 'Ubuntu',
        fontSize: 17,
        margin: 5,
        fontWeight: 'bold'
    },

    spanInput: {
        fontFamily: 'Ubuntu',
        fontSize: 17,
        margin: 5,
        fontWeight: 'bold'
    }
})