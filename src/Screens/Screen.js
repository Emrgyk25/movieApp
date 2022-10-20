import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
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
      </View>
      <ScrollView style={style.body}>
        <Text style={style.body_title}>Films</Text>
        <FlatList numColumns={2} data={Data} renderItem={renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  header_title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  body: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  body_title: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
});
export default Screen;
