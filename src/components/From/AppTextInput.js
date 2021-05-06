import {useFormikContext} from 'formik';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AppInput from '../../common/AppInput';
import {danger} from '../../config/colors';

const AppTextInput = ({name, ...otherProps}) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errors[name] || touched[name] ? (
        <Text style={styles.errorMessage}>{errors[name]}</Text>
      ) : null}
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  errorMessage: {
    color: danger,
    margin: 10,
    fontSize: 16,
  },
});
