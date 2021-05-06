import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import AppButton from '../../common/AppButton';

const AppSubmitButton = ({title, ...otherProps}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      title={title}
      {...otherProps}
      onPress={handleSubmit}
    />
  );
};

export default AppSubmitButton;

const styles = StyleSheet.create({});
