import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Data from '../Data/Movies.json';
import Modal from 'react-native-modal';
import Video from 'react-native-video';

const view = props => {
  const videoRef = useRef(null);
  const id = props.route.params.id;
  const item = Data.filter(item => item.id == id)[0];
  const [isModalVisible, setModalVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const Cast = ({cast}) => {
    return (
      <View style={style.cast_container}>
        <Image style={style.cast_image} source={{uri: item.image}} />
        <Text style={style.cast_name}>Oyuncular: {cast.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={style.image_container}>
          <Image source={{uri: item.image}} style={style.header_image} />
          <View style={style.playButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!isModalVisible);
                setPaused(false);
              }}>
              <Icon name="play" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={style.informationImageContainer}>
            <Image style={style.information_image} source={{uri: item.image}} />
          </View>
          <View style={style.informationNameContainer}>
            <Text style={style.informationName}> {item.name}</Text>
          </View>
        </View>
        <View style={style.body}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}} />
            <View style={style.top_right}>
              <View style={style.top_right_item}>
                <Icon name="folder" size={20} />
                <Text style={style.top_right_item_text}>{item.category}</Text>
              </View>
              <View style={style.top_right_item}>
                <Icon name="clock" size={20} />
                <Text style={style.top_right_item_text}>{item.time}</Text>
              </View>
              <View style={style.top_right_item}>
                <Icon name="street-view" size={20} />
                <Text style={style.top_right_item_text}>{item.director}</Text>
              </View>
            </View>
          </View>
          <View style={style.content}>
            <Text style={style.content_text}>{item.title}</Text>
            <View style={style.casts}>
              {item.cast.map(item => (
                <Cast cast={item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={style.modalContainer}>
          <View style={style.modalBody}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setPaused(true);
              }}
              style={style.modalCloseButton}>
              <Icon name="times-circle" size={15} />
            </TouchableOpacity>
            <Video
              ref={videoRef}
              resizeMode={'stretch'}
              paused={paused}
              source={{uri: item.video}}
              style={style.video}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    textAlign: 'auto',
    fontSize: 25,
    color: 'black',
  },

  header_image: {
    width: '100%',
    height: 300,
  },

  playButtonContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information_image: {
    width: 150,
    height: 200,
    left: 20,
    borderRadius: 5,
  },
  informationNameContainer: {
    position: 'absolute',
    zIndex: 11,
    bottom: 170,
    right: 100,
  },
  informationName: {
    fontSize: 25,
    color: 'white',
  },
  informationNameContainer: {
    position: 'absolute',
    zIndex: 11,
    bottom: 20,
    right: 10,
    width: 230,
  },
  informationImageContainer: {
    position: 'absolute',
    bottom: -100,
    zIndex: 11,
  },
  body: {
    flex: 1,
  },
  top_right: {
    flex: 1.3,
    marginHorizontal: 5,
    paddingVertical: 25,
    right: -10,
  },
  top_right_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top_right_item_text: {
    left: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content_text: {
    fontSize: 17,
    color: 'black',
  },
  casts: {
    marginTop: 20,
  },
  cast_name: {
    color: 'black',
  },
  modalBody: {
    backgroundColor: 'white',
    height: 300,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 99999,
    width: 30,
    height: 30,
  },
  video: {
    height: 300,
    width: '100%',
  },
});

export default view;
