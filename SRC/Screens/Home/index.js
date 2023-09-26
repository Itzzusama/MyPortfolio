import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Linking} from 'react-native';
import images from '../../icons';

const Home = ({navigation}) => {
  //   const handleLeftImagePress = () => {};

  const handleRightImagePress = () => {
    // Logic for right image press
  };

  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={images.menu} style={styles.headerImage} />
          </TouchableOpacity>
          {/* <Text style={styles.headerTitle}>Home</Text> */}
          <TouchableOpacity onPress={handleRightImagePress}>
            <Image
              source={images.notification}
              style={styles.notificationImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image source={images.profile} style={styles.roundedImage} />
          </View>
          <View>
            <Text style={styles.name}>Usama Aman</Text>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => navigation.navigate('About')}>
              <Text style={styles.info}>More info</Text>
              <Image style={styles.moreInfo} source={images.forwardArrow} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* New Container */}
      <View style={styles.whiteContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.leftText}>Portfolio</Text>
        </View>
        <View style={styles.smallBoxesContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Education')}>
            <View style={styles.smallBox}>
              <Image source={images.education} style={styles.smallBoxImage} />
              <Text style={styles.smallBoxText}>Education</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
            <View style={styles.smallBox}>
              <Image source={images.experience} style={styles.smallBoxImage} />
              <Text style={styles.smallBoxText}>Experience</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Certification')}>
            <View style={styles.smallBox}>
              <Image
                source={images.certification}
                style={styles.smallBoxImage}
              />
              <Text style={styles.smallBoxText}>Certification</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SocialAcc')}>
            <View style={styles.smallBox}>
              <Image source={images.profile} style={styles.smallBoxImage} />
              <Text style={styles.smallBoxText}>Accounts</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.featureText}>Featured:</Text>

      <ScrollView horizontal>
        <View style={styles.scrollContainer}>
          <Image source={images.review1} style={styles.scrollImage} />
          <View style={styles.scrollTextContainer}>
            <Text style={styles.scrollText}>Fiveer Client</Text>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <Image source={images.review4} style={styles.scrollImage} />
          <View style={styles.scrollTextContainer}>
            <Text style={styles.scrollText}>Fiveer Client Feedback</Text>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <Image source={images.review5} style={styles.scrollImage} />
          <View style={styles.scrollTextContainer}>
            <Text style={styles.scrollText}>Client Feedback</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  purpleContainer: {
    height: windowHeight * 0.4,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'white',
    margin: 5,
  },
  notificationImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    margin: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 90,
  },
  imageContainer: {
    borderRadius: 50,
    padding: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  info: {
    marginLeft: 10,
    fontSize: 12,
    marginTop: 6,
    color: 'white',
    textDecorationLine: 'underline',
  },
  moreInfo: {
    height: 10,
    width: 10,
    tintColor: 'white',
    marginTop: 10,
    marginLeft: 5,
  },
  whiteContainer: {
    marginTop: -windowHeight * 0.12,
    borderRadius: 20,
    height: 170,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 7,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContainer: {
    marginTop: windowHeight * 0.01,
    borderRadius: 20,
    height: 210,
    marginLeft: 12,
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'purple',
    elevation: 7,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginRight: 10,
  },
  scrollImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  scrollTextContainer: {
    padding: 5,
    borderRadius: 5,
  },
  scrollText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  featureText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'purple',
    margin: 10,
    marginTop: 20,
  },
  smallBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallBox: {
    width: 75,
    height: 75,
    backgroundColor: 'purple',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBoxImage: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
  smallBoxText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Home;
