import Main from '@/components/Main';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default class ChatScreen extends Component {
  run = () => {
    setInterval(async () => {
      let response = await fetch("https://api.roxcelic.love/api/v1/chat/view");
      let data = await response.json();

        this.setState({chat: data.chat});
    }, 2500);
  }

   constructor() {
      super();
      this.state = {
         myText: '1',
         chat: []
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
          <ThemedText style=
            {styles.chatMessage}
            key={msg[2]}>
            {msg[3]}: {msg[0]}
          </ThemedText>
        ))}
        </ThemedView>
      
      </Main>
    );
  }
}

const styles = StyleSheet.create({
    chatMessage: {
        fontSize: 2,
        lineHeight: 3
    }
});
