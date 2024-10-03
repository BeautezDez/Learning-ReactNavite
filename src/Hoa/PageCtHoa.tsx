import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigator/HoaNavigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type PageCtHoaNavigationProp = StackNavigationProp<RootStackParamList,'PageCtHoa'>;
type PageCtHoaRouteProp = RouteProp<RootStackParamList, 'PageCtHoa'>;

const PageCtHoa: React.FC = () => {
  const route = useRoute<PageCtHoaRouteProp>();

  const {hoa} = route.params;

  return (
    <View>
      <Text style={styles.texttit}>Tên Hoa: {hoa.tenhoa}</Text>

      <Image source={hoa.hinh} />

      <Text style={styles.texttit}>Mô Tả: {hoa.mota}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texttit: {
    color: 'black',
  },
});

export default PageCtHoa;
