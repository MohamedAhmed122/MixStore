import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import {danger, primary, secondary, white} from '../../config/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  firstName: Yup.string().required().min(3).label('First Name'),
  lastName: Yup.string().required().min(3).label('Last Name'),
});

export default function RegisterScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', firstName: '', lastName: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <AppInput
                placeholder="First Name"
                value={values.firstName}
                autoCapitalize="none"
                autoCorrect={false}
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
              />
              {errors.firstName && (
                <Text style={styles.errorMessage}>{errors.firstName}</Text>
              )}
              <AppInput
                placeholder="Last Name"
                value={values.lastName}
                autoCorrect={false}
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
              />
              {errors.lastName && (
                <Text style={styles.errorMessage}>{errors.lastName}</Text>
              )}
              <AppInput
                placeholder="Email"
                value={values.email}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              <AppInput
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
              <AppButton
                onPress={handleSubmit}
                title="Register"
                color={primary}
              />
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
