import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field.js'

export default props => {
    const rows = props.board.map((row, i) => {
        const columns = row.map((field, j) => {
            return <Field {...field} key={j}
                onOpen={() => props.onOpenField(i, j)}
                onSelect={() => props.onSelectField(i, j)} />
        })
        return <View style={{ flexDirection: 'row' }} key={i}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})