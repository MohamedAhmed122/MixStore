import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import {danger, primary, secondary, white} from '../../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../redux/auth/AuthActions';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
});

export default function LoginScreen() {
  const dispatch = useDispatch();
  const {isAuthenticated, error} = useSelector(state => state.auth);
  console.log(isAuthenticated, 'is');

  const onSubmit = values => {
    const {email, password} = values;
    dispatch(userLogin(email, password));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}
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
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                Icon={() => (
                  <FontAwesome5
                    name="lock"
                    size={22}
                    color="gray"
                    style={{paddingRight: 5}}
                  />
                )}
              />
              {errors.password && touched?.password ? (
                <Text style={styles.errorMessage}>{errors?.password}</Text>
              ) : null}
              {error && <Text style={styles.errorMessage}>{error}</Text>}
              <AppButton onPress={handleSubmit} title="Login" color={primary} />
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
