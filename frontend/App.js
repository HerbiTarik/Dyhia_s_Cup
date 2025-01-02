import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import './global.css';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500}); // Cache le splash screen
  }, []);

  return (
    <View>
      <Text className="bg-slate-500 text-center">App</Text>
    </View>
  );
};

export default App;
