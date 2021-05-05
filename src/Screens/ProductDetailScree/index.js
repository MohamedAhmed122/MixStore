import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBadge from '../../common/AppBadge';
import AppButton from '../../common/AppButton';
import {primary, secondary} from '../../config/colors';

const windowHeight = Dimensions.get('window').height;

export default function ProductDetailScreen({route}) {
  const item = route.params;
  return (
    <ScrollView>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <View>
          <AntDesign name="hearto" size={25} color="gray" />
          <Text style={{marginTop: 3}}>{item.liked}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ingredients</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {item.ingredients.map(ing => (
            <AppBadge title={ing} />
          ))}
        </View>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          aliquid excepturi repellendus ut corrupti blanditiis quisquam fuga qui
          enim distinctio perferendis dignissimos quae officia, quis id in illo
          cupiditate veniam
        </Text>
      </View>
      <View style={{marginBottom: 100}}>
        <AppButton title="Buy Now" color={primary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: windowHeight / 2 - 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  name: {
    fontSize: 18,
    color: primary,
    fontWeight: 'bold',
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: primary,
    marginRight: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
  },
});
