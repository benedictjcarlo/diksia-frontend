import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#D4D4D4', true: '#96CDF8'}}
        thumbColor={isEnabled ? '#4485B7' : '#FFF'}
        ios_backgroundColor="#8A8A8A"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;