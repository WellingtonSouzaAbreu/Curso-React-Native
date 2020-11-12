import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Primeiro from './components/Primeiro.js'
// import CompPadrao, {Comp1, Comp2} from './components/Multi.js'
// import MinMax from './components/MinMax.js'
import Aleatorio from './components/Aleatorio.js'

export default () => (
  <View style={style.App}>
    {/* <Comp1/>
    <Comp2/>
    <CompPadrao/>
    <Primeiro /> */}
    {/* <MinMax min={3} max={20}/> */}
    <Aleatorio min={0} max={20}/>
    <Aleatorio min={0} max={20}/>
    <Aleatorio min={0} max={20}/>
  </View>
)

const style = StyleSheet.create({
  App: {
    flex: 1, // flex: 1 = flexGrow: 1 // Permite ele crescer
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})