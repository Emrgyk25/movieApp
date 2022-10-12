import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const Film = ({item}) => {
  return (
    <TouchableOpacity style={style.container}>
      <Image source={{uri: item.Image}} />
      <View style={style.detail_container}>
        <Text style={style.title}>{item.name}</Text>
        <Text style={style.category}>{item.category}</Text>
      </View>
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
  },

  title: {
    textAlign: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  category: {
    fontSize: 12,
    textAlign: 12,
  },
  detail_container: {
    marginTop: 5,
  },
});
export default Film;
