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

const Experience = ({navigation}) => {
  const educationData = [
    {
      title: 'React-Native Developer',
      details:
        'I have done my BsCS at the end of 2022 and at the begining of 2023 I have started my career as a react-native developer at Appcrates, Gujranwala. \n I am also doing projects online as a freelancer at Fiveer',
      image: require('../../icons/reactnative.png'),
    },
    {
      title: 'Video Editor',
      details:
        'I have been working as a Video Editor since 2016 and edit a lot of Videos on various Applications on mobile as well as PC. \n I worked on Adobe Premier Pro, After Effects, filmora, Kinemaster, Capcut etc. \n I am also teaching Video Editing on Various Freelance Platform sice 2022',
      image: require('../../icons/videoEditor.jpg'),
    },
    {
      title: 'Graphic Designer',
      details:
        'Designing a logo and graphics was one of my moto since my Intermidiate, So I started learnig graphics and started editing the pictures on Adobe photoshop and illustrator. \n And also I have done the color grading on Adobe lightroom Now I am also doing the Graphics Design work on fiveer and done many successful projects ',
      image: require('../../icons/graphicDesigner.jpg'),
    },
    {
      title: 'Whiteboard Animator',
      details:
        'I build up my interest in WhiteBoard Animation in 2018 when I see the people doing animation on Youtube for their content So I started learing on how to make whiteboard animation and within 2 months I started creating my own WhiteBoard Animation video And right now on Fiveer I have created the animation videos for my gig to showcase my experties. ',
      image: require('../../icons/whiteboardAnimation.png'),
    },
    {
      title: 'Mobile Phone Dealer',
      details:
        'In 2019 I purchased iphone 8 just to buy and sell it and gained a profit of approx 12k and after that I started purchasing mobile phones again and again and sell them on profit I sold more than 150 devices in 3 years mostly are iphones and have a vast knowledge of iphones as well as android phones, I have used almost every single iphone untill now.                                     jk',
      image: require('../../icons/phone_dealer.jpg'),
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
        <Text style={styles.headingText}>Experience</Text>
      </View>
      <Text
        style={{color: 'purple', fontSize: 26, marginLeft: 15, marginTop: 10}}>
        Experience Detail:
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

export default Experience;
