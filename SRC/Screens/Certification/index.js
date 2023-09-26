import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import images from '../../icons';

import {PermissionsAndroid} from 'react-native';

const Certification = ({navigation}) => {
  const reviews = [
    {
      reviewImage: images.review1,
      text: 'Introduction to HTML-Certificate',
      downloadImage: require('../../icons/HTML_Certificate.jpg'),
    },
    {
      reviewImage: images.review2,
      text: 'Introduction to CSS-Certificate',
      downloadImage: require('../../icons/CSS_Certificate.jpg'),
    },
    {
      reviewImage: images.review3,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
    {
      reviewImage: images.review4,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
    {
      reviewImage: images.review5,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
    {
      reviewImage: images.review6,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
    {
      reviewImage: images.review7,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
  ];
  const certificates = [
    {
      image: images.HTML_Certificate,
      text: 'Introduction to HTML-Certificate',
      downloadImage: require('../../icons/HTML_Certificate.jpg'),
    },
    {
      image: images.CSS_Certificate,
      text: 'Introduction to CSS-Certificate',
      downloadImage: require('../../icons/CSS_Certificate.jpg'),
    },
    {
      image: images.Digital_Marketing_Certificate,
      text: 'Degital Marketing-Certificate',
      downloadImage: require('../../icons/Digital_Marketing_Certificate.png'),
    },
  ];

  const shareImage = async image => {
    try {
      const imageResource = await Image.resolveAssetSource(image);
      const imageUrl = imageResource.uri;
      const shareOptions = {
        url: imageUrl,
        type: 'image/jpeg',
      };
      Share.open(shareOptions)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const downloadImage = async (url, imageName) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to download images.',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const filePath = `${RNFS.DocumentDirectoryPath}/${imageName}`;
        RNFS.downloadFile({
          fromUrl: url,
          toFile: filePath,
        }).promise.then(() => {
          alert('Image downloaded successfully!');
        });
      } else {
        alert('Storage permission denied.');
      }
    } catch (err) {
      console.error(err);
    }
  };

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
        <Text style={styles.headingText}>Certification</Text>
      </View>
      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Certification Detail:
      </Text>

      <FlatList
        horizontal
        data={certificates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollContainer}>
            <Image source={item.image} style={styles.scrollImage} />
            <View style={styles.scrollTextContainer}>
              <Text style={styles.scrollText}>{item.text}</Text>
            </View>
            <TouchableOpacity
              onPress={() => downloadImage(item.downloadImage, 'FileName.jpg')}>
              <Image style={styles.downloadButton} source={images.download} />
            </TouchableOpacity>
          </View>
        )}
      />

      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Reviews Detail:
      </Text>
      <FlatList
        horizontal
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollContainer}>
            <Image source={item.reviewImage} style={styles.scrollImage} />
            <View style={styles.scrollTextContainer}>
              <Text style={styles.scrollText}>{item.text}</Text>
            </View>
            <TouchableOpacity
              onPress={() => downloadImage(item.downloadImage, 'FileName.jpg')}>
              <Image style={styles.downloadButton} source={images.download} />
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
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  scrollTextContainer: {
    padding: 5,
    borderRadius: 5,
    marginTop: 6,
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

export default Certification;
