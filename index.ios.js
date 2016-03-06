/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var RecipesList = require('./app/components/recipes');

class coffeeLog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RecipesList></RecipesList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
});

AppRegistry.registerComponent('coffeeLog', () => coffeeLog);