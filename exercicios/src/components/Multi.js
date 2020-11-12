import React from 'react'
import { Text } from 'react-native'

import estilo from './estilo.js'
// Export necessita de nome
// Export default não

function Comp(){
    return <Text style={estilo.fontG}>Comp #Oficial</Text>
}

function Comp1(){
    return <Text style={estilo.fontG}>Comp #01</Text>
}

function Comp2(){
    return <Text style={estilo.fontG}>Comp #02</Text>
}

export {Comp1, Comp2}
export default Comp

