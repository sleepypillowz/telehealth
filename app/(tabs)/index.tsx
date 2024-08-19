import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default HomeScreen;
