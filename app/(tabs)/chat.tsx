import Main from '@/components/Main';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Var } from '@/constants/Var';
import React, { Component } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

export default class ChatScreen extends Component {
  run = () => {
    if (this.state.callingChat) return;
    this.setState({callingChat: true});

    setInterval(async () => {
      console.log("refreshing..");
      let response = await fetch(`${Var.apiURL}/chat/view`);
      let data = await response.json();

      try {
        if (data.constructor === ({}).constructor)
          this.setState({chat: data.chat});
        else
          console.log("beep boop");
      } catch (e) {
        console.log("issue with the requested json: ");
        console.log(data);
        console.log("error: ");
        console.log(e);
      }

    }, 2500);
  }

   constructor() {
      super();
      this.state = {
         myText: '1',
         callingChat: false,
         chat: [["loading...", "#fff", 0, "super cool and awesome developer roxie"]]
      }
      this.run();
   }
   
  render() {
    return (
      <Main
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
        <ThemedView>
        {this.state.chat.map((msg, index) => (
          <ThemedView key={msg[2]}>
            <ThemedText style=
              {forceStyle().chatMessage}
            >
              {msg[3]}: 
            </ThemedText>
          
            <ThemedText style=
              {forceStyle(msg[1], 15).chatMessage}
            >
              {msg[0]}
            </ThemedText>
          </ThemedView>
        ))}
        </ThemedView>
      </Main>
    );
  }
}

const forceStyle = (color : string, padding : number = 0) => {
  return StyleSheet.create({
    chatMessage: {
        fontSize: 12,
        lineHeight: 13,
        color: color,
        paddingLeft: padding
      }
  });
};

const colorScheme = useColorScheme();

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#fff",
    width: '100%',
    height: 10,
    position: 'absolute'
  },
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1
  },floatingMenuButtonStyle: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  },
  input: {
    color: Colors[colorScheme ?? 'light'].text,
    borderColor: Colors[colorScheme ?? 'light'].input.borderColor,
    borderWidth: 2,

    // positioning
    position: 'absolute',
    bottom:0,
  }
});