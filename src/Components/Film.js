import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Film = ({item}) => {
  const history = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => history.navigate('view', {id: item.id})}
      style={style.container}>
      <ScrollView style={style.image_container}>
        <View style={style.category_container}>
          <Text style={style.category}> {item.category} </Text>
        </View>

        <View style={style.image_container}>
          <Image source={{uri: item.image}} style={style.image} />
        </View>
        <View style={style.detail_container}>
          <Text style={style.title}>{item.name}</Text>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  category: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  detail_container: {
    marginTop: 10,
  },
  image_container: {
    width: '100%',
    height: 200,
  },
  category_container: {
    position: 'absolute',
    zIndex: 99999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
export default Film;
