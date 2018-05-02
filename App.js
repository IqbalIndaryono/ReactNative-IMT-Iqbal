import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button  
} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={MT:0,TB:0,IMT:'',D:'',MT2:'',TB2:'',IMT2:''}
  }
  Diagnose=()=>{
  var a = this.state.MT
  var b = this.state.TB/100
  var IMT3 = a/(b*b)
  var D2
    if(IMT3 < 18.5){D2:'BB anda kurang'}
    else if (IMT3 <= 18.5 && IMT3 >= 24.9){D2:'BB anda ideal'}
    else if (IMT3 <= 25 && IMT3 >= 29.9){D2:'BB anda berlebih'}
    else if (IMT3 <= 30 && IMT3 >= 39.9){D2:'BB anda sangat berlebih'}
    else{D2:'Anda Obesitas'}
    this.setState({D:D2,IMT2:IMT3})
  }
    render() {
    return (
      <View>
        <TextInput placeholder = 'Massa(kg)'
        onChangeText={(input)=>this.setState({MT:input})}/>
        <TextInput placeholder = 'Tinggi(cm)'
        onChangeText={(input2)=>this.setState({TB:input2})}/>
        <Button
        title='Hitung IMT' 
        onPress = {()=>{
          this.setState({
            MT2:'Massa Tubuh Anda '+this.state.MT,
            TB2:'Tinggi Badan Anda '+this.state.TB,
            IMT:'Indeks Massa Tubuh Anda '
          })
          this.Diagnose()
          }
        }
        />
        <Text>
          {this.state.MT2}
        </Text>
        <Text>
          {this.state.TB2}
        </Text>
        <Text>
          {this.state.IMT}
        </Text>
        <Text>
          {this.state.IMT2}
        </Text>
        <Text>
          {this.state.D2}
        </Text>
      </View>
    );
  }
}

