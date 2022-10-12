import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Data from '../Data/Movies.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Film from '../Components/Film.js';
const Screen = () => {
  useEffect(() => {
    console.log(Data);
  }, []);
  const renderItem = ({item}) => {
    return <Film item={item} />;
  };
  return (
    <SafeAreaView>
      <View style={style.header}>
        <Text style={style.header_title}>Movies</Text>
        <Icon name="search" size={20} color="black" />
      </View>
      <View style={style.body}>
        <Text style={style.body_title}>Films</Text>
        <FlatList data={Data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  header_title: {
    fontSize: 20,
    fontWeight: '700',
  },
  body: {
    paddingHorizontal: 20,
  },
  body_title: {
    fontSize: 15,
    fontWeight: '500',
  },
});
export default Screen;
