import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import images from '../../icons';
const Education = ({navigation}) => {
  const educationData = [
    {
      title: 'Matriculation',
      details:
        'Done Matriculation from Wazir Hassan Memorial School, AliPur Chattha \nPassing with A division\nFuthermore I have also participated in various activities at School Level ',
      image: images.school,
    },
    {
      title: 'Intermediate',
      details:
        'I have started my Intermidiate in 2016 at Punjab Group of College, Ali Pur Chattha. From there I got my FSC Pre-Engineering Degree in First Division and graduated in 2018',
      image: images.Intermidiate,
    },
    {
      title: "Bachelor's",
      details:
        'After passing my intemidiate from Punjab Group of College, Ali Pur Chattha, I got admission in BSCS at University of Gujrat, Gujrat, It was a 4 year Bachelor Degree and passed at the end of 2022 ',
      image: images.Bachelor,
    },
  ];

  const handleCardPress = index => {
    if (index === expandedCardIndex) {
      setExpandedCardIndex(-1); // Collapse the card if it's already expanded
    } else {
      setExpandedCardIndex(index);
    }
  };
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

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
        <Text style={styles.headingText}>Education</Text>
      </View>
      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Education Detail:
      </Text>
      {/* {Card view} */}
      <ScrollView>
        {educationData.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[
              styles.scrollContainer,
              expandedCardIndex === index && {height: windowHeight * 0.6},
            ]}
            onPress={() => handleCardPress(index)}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.scrollImage} />
            </View>
            <View style={styles.scrollTextContainer}>
              <Text style={styles.scrollText}>{item.title}</Text>
            </View>
            {expandedCardIndex === index && (
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>{item.title} Details:</Text>
                <Text style={styles.detailsText}>
                  {item.details.split('\n').map((detail, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      {detail}
                    </Text>
                  ))}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
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
  scrollImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageContainer: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
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

export default Education;
