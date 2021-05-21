import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import {danger, primary, white} from '../../config/colors';
import UploadScreen from '../../components/LottieView';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderEmpty, userCreateOrder} from '../../redux/Orders/OrdersAction';
import {emptyCart} from '../../redux/cart/CartActions';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  city: Yup.string().required().min(3).label('City'),
  address: Yup.string().required().min(3).label('Address'),
  phoneNumber: Yup.string().required().min(3).label('Phone Number'),
  zipCode: Yup.string().required().min(3).label('Zip code'),
});

export default function AddressScreen({navigation}) {
  const [visible, setVisible] = useState(false);
  const {orderItems, success} = useSelector(state => state.order);
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(userCreateOrder(orderItems, values));
  };
  useEffect(() => {
    if (success) {
      setVisible(true);
      dispatch(emptyCart());
      dispatch(setOrderEmpty())
    }
  }, [success]);
  const handleDone = () => {
    setVisible(false);
    navigation.navigate('More');
  };
  return (
    <View style={styles.screen}>
      <UploadScreen visible={visible} onDone={handleDone} />
      <View style={styles.container}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: '',
            city: '',
            address: '',
            phoneNumber: '',
            zipCode: '',
          }}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <AppInput
                placeholder="Email"
                value={values.email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                Icon={() => (
                  <FontAwesome5
                    name="user-alt"
                    size={22}
                    color="gray"
                    style={{paddingRight: 5}}
                  />
                )}
              />
              {errors.email && touched?.email ? (
                <Text style={styles.errorMessage}>{errors?.email}</Text>
              ) : null}

              <AppInput
                placeholder="Phone Number"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                Icon={() => (
                  <FontAwesome5
                    name="phone"
                    size={22}
                    color="gray"
                    style={{paddingRight: 5}}
                  />
                )}
              />
              {errors.phoneNumber && touched?.phoneNumber ? (
                <Text style={styles.errorMessage}>{errors?.phoneNumber}</Text>
              ) : null}
              <AppInput
                placeholder="City"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.city}
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                Icon={() => (
                  <FontAwesome5
                    name="city"
                    size={22}
                    color="gray"
                    style={{paddingRight: 5}}
                  />
                )}
              />
              {errors.city && touched?.city ? (
                <Text style={styles.errorMessage}>{errors?.city}</Text>
              ) : null}
              <AppInput
                placeholder="Address"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                Icon={() => (
                  <FontAwesome5
                    name="location-arrow"
                    size={22}
                    color="gray"
                    style={{paddingRight: 5}}
                  />
                )}
              />
              {errors.address && touched?.address ? (
                <Text style={styles.errorMessage}>{errors?.address}</Text>
              ) : null}
              <AppInput
                placeholder="Zip Code"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.zipCode}
                onChangeText={handleChange('zipCode')}
                onBlur={handleBlur('zipCode')}
              />
              {errors.zipCode && touched?.zipCode ? (
                <Text style={styles.errorMessage}>{errors?.zipCode}</Text>
              ) : null}
              <AppButton onPress={handleSubmit} title="Order" color={primary} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: white,
  },
  container: {
    marginTop: 20,
  },
  errorMessage: {
    color: danger,
    margin: 10,
    fontSize: 16,
  },
});
