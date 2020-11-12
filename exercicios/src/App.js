import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

// import Primeiro from './components/Primeiro.js'
// import CompPadrao, {Comp1, Comp2} from './components/Multi.js'
// import MinMax from './components/MinMax.js'
// import Aleatorio from './components/Aleatorio.js'
// import Titulo from './components/Titulo.js'
// import Button from './components/Botao.js'
// import Contador from './components/Contador.js'
// import Pai from './components/direta/Pai.js'
// import Pai from './components/indireta/Pai.js'
// import ContadorV2 from './components/contador/ContadorV2.js'
// import Diferenciar from './components/Diferenciar.js'
// import ParImpar from './components/ParImpar.js'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro.js'
// import UsuarioLogado from './components/UsuarioLogado.js'
// import ListaProdutos from './components/produtos/ListaProdutos.js'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2.js'
// import DigiteSeuNome from './components/DigiteSeuNome.js'
// import FlexBoxV1 from './components/layout/FlexBoxV1.js'
// import FlexBoxV2 from './components/layout/FlexBoxV2.js'
// import FlexBoxV3 from './components/layout/FlexBoxV3.js'
// import FlexBoxV4 from './components/layout/FlexBoxV4.js'
import Mega from './components/megasena/Mega.js'

export default () => (
  <SafeAreaView style={style.App}>
    {/* <Comp1/>
    <Comp2/>
    <CompPadrao/>
  <Primeiro /> */}
    {/* <MinMax min={3} max={20}/> */}
    {/*  <Aleatorio min={0} max={20}/>
    <Aleatorio min={0} max={20}/>
    <Aleatorio min={0} max={20}/> */}
    {/* <Titulo principal="Cadastro de Produto" secundario="Tela de Cadastro do Produto"/> */}
    {/* <Button/> */}
    {/* <Contador inicial={100} passo={10}/> */}
    {/* <Pai/> */}
    {/* <ContadorV2/> */}

    {/* <Familia>
      <Membro nome="Bia" sobrenome="Arruda"/>
      <Membro nome="Carlos" sobrenome="Arruda"/>
      </Familia>
    <Familia>
      <Membro nome="Bianca" sobrenome="Silva"/>
      <Membro nome="Kaká" sobrenome="Silva"/>
    </Familia> */}
    {/* <UsuarioLogado usuario={{nome: 'Hui', email: 'hui@gmail.com'}}/>
    <UsuarioLogado usuario={{nome: 'Wii', email: 'Wii@gmail.com'}}/>
    <UsuarioLogado usuario={{nome: 'Ex', email: 'Ex@gmail.com'}}/>
    <UsuarioLogado usuario={{nome: 'null', email: 'Ex@gmail.com'}}/> */}
    {/* <ListaProdutos/> */}
    {/* <ListaProdutosV2 /> */}
    {/* <DigiteSeuNome/> */}
    {/* <FlexBoxV1 /> */}
    {/* <FlexBoxV2 /> */}
    {/* <FlexBoxV3 /> */}
    {/* <FlexBoxV4 /> */}

    <Mega/>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flex: 1, // flex: 1 = flexGrow: 1 // Permite ele crescer
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})