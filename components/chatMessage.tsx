import { StyleSheet, Text, type TextProps } from 'react-native';

class message {
    message : string;
    color : string;
    id : number;
    name : string;
    date : string;
}

export type ThemedTextProps = TextProps & {
    msg : message
};

export function chatMessage({
    msg
}: ThemedTextProps) {
    console.log(message);
  return (
    <Text>
        hiiiiiii
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'PixelifySans',
    fontSize: 16,
    lineHeight: 16,
  }
});
