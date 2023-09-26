import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  const [confettis, setConfettis] = useState(generateRandomConfetti(100));
  const fallAnims = confettis.map(
    () => useRef(new Animated.Value(-100)).current,
  );

  const springAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bgColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MyDrawer');
    }, 5500);

    return () => clearTimeout(timer);
  }, [navigation]);
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(bgColorAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false,
        }), // This animation
        Animated.spring(springAnim, {
          toValue: 1,
          friction: 2,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    fallAnims.forEach((fallAnim, index) => {
      Animated.loop(
        Animated.timing(fallAnim, {
          toValue: height + 100,
          duration: confettis[index].duration,
          useNativeDriver: true,
        }),
      ).start();
    });
  }, [springAnim, fallAnims, fadeAnim, bgColorAnim]);

  const scale = springAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });
  const interpolatedBGColor = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'purple'],
  });

  const opacity = fadeAnim;

  return (
    <View style={styles.container}>
      {confettis.map((confetti, index) => (
        <Animated.View
          key={index}
          style={[
            styles.confetti,
            {
              left: confetti.position,
              height: confetti.height,
              width: confetti.width,
              backgroundColor: confetti.color,
              transform: [
                {translateY: fallAnims[index]},
                {rotateZ: `${confetti.rotation}deg`},
              ],
            },
          ]}
        />
      ))}
      {/* <View style={styles.purpleBar} /> */}
      <View style={styles.content}>
        <Animated.Text
          style={{...styles.welcomeText, transform: [{scale}], opacity}}>
          Welcome
        </Animated.Text>
      </View>
      {/* <View style={styles.purpleBar} /> */}
    </View>
  );
};

// Generate random confetti characteristics
const generateRandomConfetti = num => {
  const colors = ['#aaaaaa', '#d3d3d3', '#8af7b0', '#d0f461', '#f2ae6f'];
  let confettis = [];
  for (let i = 0; i < num; i++) {
    confettis.push({
      position: Math.random() * width,
      rotation: Math.random() * 360,
      height: Math.random() * 8 + 8,
      width: 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 3000 + 5000, // Between 5 to 8 seconds
    });
  }
  return confettis;
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  confetti: {
    position: 'absolute',
    top: 0,
  },
  purpleBar: {
    flex: 1,
    backgroundColor: 'purple',
  },
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 50,
    color: 'white',
  },
});
