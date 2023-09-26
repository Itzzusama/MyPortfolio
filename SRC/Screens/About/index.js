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

const About = ({navigation}) => {
  const openLink = url => {
    Linking.openURL(url);
  };

  // const [whatsAppLink, setWhatsAppLink] = useState('');

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
        <Text style={styles.headingText}>About Me</Text>
      </View>
      <ScrollView>
        <Text
          style={{
            color: 'purple',
            fontSize: 26,
            marginLeft: 15,
            marginTop: 10,
          }}>
          Personal Detail:
        </Text>
        <Text style={{color: 'black', padding: 15}}>
          {
            'Assalam o Alaikum.\nMyself Usama, Full name is Usama Aman Ullah, I am from Ali Pur Chattha, Pakistan.\nI was born in Lahore on 15 June 2000 and right now I am 23 years old, I am a developer by profession and design and develop many websites and mobile Apps for both ios and Android'
          }
        </Text>

        <Text
          style={{
            color: 'purple',
            fontSize: 26,
            marginLeft: 15,
            marginTop: 10,
          }}>
          Business Detail:
        </Text>
        <Text style={{color: 'black', padding: 15}}>
          {
            'I have done my matriculation from a local school from my hometown and intermediate in Engineering from Punjab Group of College, Later on I have done my Bachelor in Computer Sciences and started working as a React Native Developer at Appcrates.\n During my journing I have done many businesses on my own like \nI have worked as a mobile phone dealer\nI am doing Video Editing and Graphic Designing as well.\nIn January, 2023 I started my journey as a React Native Developer at Appcrates, With the on site job I also started as a Freelancer on Fiveer,\nI started teaching video editing and Development on Fiveer and Allhamdullilah right now I am a level One Seller,'
          }
        </Text>
        <Text
          style={{
            color: 'purple',
            fontSize: 26,
            marginLeft: 15,
            marginTop: 10,
          }}>
          Contact Details:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.contactTextHeading}>{'Email:'}</Text>
          <TouchableOpacity
            onPress={() => openLink('mailto:usamaaman123@gmail.com')}>
            <Text style={styles.contactSubTextHeading}>
              {'usamaaman123@gmail.com'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.contactTextHeading}>{'Phone No:'}</Text>
          <TouchableOpacity onPress={() => openLink('tel:+923071224772')}>
            <Text style={styles.contactSubTextHeading}>{'+92 3071224772'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.contactTextHeading}>{'WhatsApp:'}</Text>
          <TouchableOpacity
            onPress={() => openLink('https://wa.me/3071224772')}>
            <Text style={styles.contactSubTextHeading}>
              {'+92 (307) 1224772'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Pressable onPressIn={3}>
          <Text style={styles.headingText}>I'm pressable!</Text>
        </Pressable> */}
      </ScrollView>
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'purple',
    height: 70,
  },
  leftImage: {
    width: 27,
    height: 27,
    tintColor: 'white',
    marginTop: 3,
  },
  rightImage: {
    width: 27,
    height: 27,
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
  contactTextHeading: {
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    width: '20%',
    fontWeight: 'bold',
  },
  contactSubTextHeading: {
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
});

export default About;
