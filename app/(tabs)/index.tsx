import { StyleSheet } from 'react-native';

import Main from '@/components/Main';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function HomeScreen() {
  return (
    <Main
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>
          Hey
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>
          Hiiiiiii, this is really really really stupid lmaos
        </ThemedText>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pinimg.com/736x/de/f4/55/def455a0b9b70d101e71429e1fb092fa.jpg',
        }}
      />
      <ThemedText>
        hehehehe i added an image frick you
      </ThemedText>
      </ThemedView>
    
    </Main>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  tinyLogo: {
    width: 250,
    height: 250,
    borderRadius: 13
  },
});
