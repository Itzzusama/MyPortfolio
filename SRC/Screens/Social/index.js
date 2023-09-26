import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import RNFS from 'react-native-fs';
import Share, {Social} from 'react-native-share';
import {Linking} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import images from '../../icons';

const SocialAcc = ({navigation}) => {
  const openLink = url => {
    Linking.openURL(url);
  };

  // const [whatsAppLink, setWhatsAppLink] = useState('');
  const personalAccount = [
    {
      image: require('../../icons/fb.jpg'),
      text: 'Facebook Account',
      url: 'https://www.instagram.com/usama_aman_official/',
    },
    {
      image: require('../../icons/whatsapp.png'),
      text: 'Personal Whatsapp',
      url: 'https://wa.me/923207799693',
    },
    {
      image: require('../../icons/insta.png'),
      text: 'Instagram',
      url: 'https://www.instagram.com/usama_aman_official/',
    },
  ];
  const reviews = [
    {
      reviewImage: require('../../icons/linkedin.png'),
      text: 'Linkedin',
      url: 'https://www.linkedin.com/in/usama-aman-039a20175/',
    },
    {
      reviewImage: require('../../icons/github.jpeg'),
      text: 'GitHub',
      url: 'https://github.com/Itzzusama',
    },
    {
      reviewImage: require('../../icons/WAbusiness.png'),
      text: 'WhatsApp Business',
      url: 'https://wa.me/923071224772',
    },
    {
      reviewImage: require('../../icons/fiveer.png'),
      text: 'Fiveer',
      url: 'https://www.fiverr.com/itzzaman?up_rollout=true',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backArrow} style={styles.leftImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Right image pressed')}>
          <Image source={images.notification} style={styles.rightImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.headingVIew}>
        <Text style={styles.headingText}>Social Accounts</Text>
      </View>
      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Personal Accounts Detail:
      </Text>

      <FlatList
        horizontal
        data={personalAccount}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => openLink(item.url)}>
              <Image source={item.image} style={styles.scrollImage} />
              <View style={styles.scrollTextContainer}>
                <Text style={styles.scrollText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Business Account Detail:
      </Text>
      <FlatList
        horizontal
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => openLink(item.url)}>
              <Image source={item.reviewImage} style={styles.scrollImage} />
              <View style={styles.scrollTextContainer}>
                <Text style={styles.scrollText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        )}
      />
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  detailsTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
  },
  downloadButton: {
    height: 26,
    width: 26,
    marginTop: 5,
    alignSelf: 'flex-end',
    tintColor: 'white',
  },
  bulletPoint: {
    marginLeft: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'purple',
    height: 70,
  },
  leftImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  rightImage: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    marginTop: windowHeight * 0.01,
    borderRadius: 20,
    height: '90%',
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
    height: '85%',
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
  scrollContainer: {
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
    borderRadius: 20,
    marginLeft: 12,
    width: Dimensions.get('window').width - 38,
    backgroundColor: 'purple',
    elevation: 7,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginRight: 7,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 22,
  },
  headingVIew: {
    height: 70,
    backgroundColor: 'purple',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default SocialAcc;
