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
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {/* {console.log(errors)}  */}
              {console.log(touched, 'e')}
              <AppInput
                placeholder="First Name"
                value={values.firstName}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
              />
              {errors.firstName && touched?.firstName ? (
                <Text style={styles.errorMessage}>{errors?.firstName}</Text>
              ) : null}
              <AppInput
                placeholder="Last Name"
                value={values.lastName}
                autoCorrect={false}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
              />
               {errors.lastName && touched?.lastName ? (
                <Text style={styles.errorMessage}>{errors?.lastName}</Text>
              ) : null}
              <AppInput
                placeholder="Email"
                value={values.email}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
               {errors.email && touched?.email ? (
                <Text style={styles.errorMessage}>{errors?.email}</Text>
              ) : null}
              <AppInput
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
               {errors.password && touched?.password ? (
                <Text style={styles.errorMessage}>{errors?.password}</Text>
              ) : null}
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
