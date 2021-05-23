import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PickImage from '../../components/PickImage';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import PickItem from '../../components/PickItem';
import {danger, primary} from '../../config/colors';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  des: Yup.string().required().min(10).label('Description'),
  cal: Yup.string().required().min(3).label('Cal'),
  price: Yup.string().required().min(3).label('Price'),
});

export default function AdminCreateNew() {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <View style={styles.screen}>
      <PickImage />
      <View style={styles.container}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{name: '', desc: '', cal: '', price: ''}}
          onSubmit={values => onSubmit(values)}>
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
                placeholder="Name"
                value={values.name}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                Icon={() => (
                  <FontAwesome
                    name="shopping-basket"
                    color="gray"
                    size={20}
                    style={{marginRight: 10}}
                  />
                )}
              />
              {errors.name && touched?.name ? (
                <Text style={styles.errorMessage}>{errors?.name}</Text>
              ) : null}
              <PickItem />
              <View style={{width: '50%'}}>
                <AppInput
                  placeholder="Cal"
                  value={values.cal}
                  autoCorrect={false}
                  onChangeText={handleChange('cal')}
                  onBlur={handleBlur('cal')}
                  Icon={() => (
                    <FontAwesome5
                      name="chart-pie"
                      color="gray"
                      size={20}
                      style={{marginRight: 10}}
                    />
                  )}
                />
              </View>
              {errors.cal && touched?.cal ? (
                <Text style={styles.errorMessage}>{errors?.cal}</Text>
              ) : null}

              <View style={{width: '50%'}}>
                <AppInput
                  placeholder="Price"
                  value={values.price}
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  Icon={() => (
                    <FontAwesome
                      name="rouble"
                      color="gray"
                      size={20}
                      style={{marginRight: 10}}
                    />
                  )}
                />
              </View>
              {errors.price && touched?.price ? (
                <Text style={styles.errorMessage}>{errors?.price}</Text>
              ) : null}
              <AppInput
                placeholder="Description"
                autoCapitalize="none"
                autoCorrect={false}
                value={values.desc}
                onChangeText={handleChange('desc')}
                onBlur={handleBlur('desc')}
                Icon={() => (
                  <FontAwesome
                    name="align-center"
                    color="gray"
                    size={20}
                    style={{marginRight: 10}}
                  />
                )}
              />
              {errors.desc && touched?.desc ? (
                <Text style={styles.errorMessage}>{errors?.desc}</Text>
              ) : null}
              {/* {error && <Text style={styles.errorMessage}>{error}</Text>} */}
              <AppButton
                onPress={handleSubmit}
                title="Create Product"
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
    backgroundColor: 'white',
  },
  container: {
    // marginTop: 20,
  },
  errorMessage: {
    color: danger,
    margin: 10,
    fontSize: 16,
  },
});
