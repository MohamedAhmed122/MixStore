import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {getAllOrders} from '../../requests/orders';
import AppLoading from '../../common/AppLoading';
import ShippingInfo from '../../components/ShippingInfo';
import OrderRow from '../../components/OrderRow';
import {primary, secondary, white} from '../../config/colors';

export default function AdminViewOrders() {
  const {currentUser} = useSelector(state => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders(currentUser.token)
      .then(res => setOrders(res))
      .catch(err => console.log(err));
  }, []);

  if (orders.length < 1) return <AppLoading />;
  return (
    <ScrollView>
      {orders.map(order => (
        <View key={order._id} style={styles.container}>
          <ShippingInfo address={order.shippingAddress} />
          {order.orderItems.map(order => (
            <OrderRow key={order._id} order={order} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    borderColor: primary,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: white,
  },
});
