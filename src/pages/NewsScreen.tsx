import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Button} from '../components';
import {backgroundColor} from '../constants/colors';

interface props {
  children?: JSX.Element;
}

const NewsScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>GameStop</Text>
        <Text style={styles.heading}>Fan</Text>
      </View>

      <View>
        <Button>News Screen</Button>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-around',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
});

export {NewsScreen};
