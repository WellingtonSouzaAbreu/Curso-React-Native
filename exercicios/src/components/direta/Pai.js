import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './../estilo.js'

import Filho from './Filho.js'

export default props => {
    let x = 1
    let y = 2
    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </>
    )
}