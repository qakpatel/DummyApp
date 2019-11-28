import React, { Component } from "react";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Text, View, StyleSheet, TextInput, Alert,Button,AsyncStorage } from 'react-native';
import { connect } from 'react-redux'


class FormScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Form</Text>
        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={Yup.object({
            name: Yup.string()              
              .required('Required'),
            email: Yup.string()
              .email('Invalid Email')
              .required('Required'),
              contact:Yup.string()
              .min(10,'not valoid')
              .max(10,'not valid')
              .required('contact required'),
              address:Yup.string()
              .required('Address required')
          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
               this.props.reduxPostUserData(values)
              navigate('List')
              formikActions.setSubmitting(false);
            }, 500);
          }}>
          {props => (
            <View>
             <TextInput
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                autoFocus
                placeholder="Your Name"
                style={styles.input}
                onSubmitEditing={() => {
                  this.emailInput.focus()
                }}
              />
              {props.touched.name && props.errors.name ? (
                <Text style={styles.error}>{props.errors.name}</Text>
              ) : null}
              <TextInput
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                placeholder="Email Address"
                style={styles.input}
                ref={el => this.emailInput = el}
              />
              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}
              <TextInput
                onChangeText={props.handleChange('contact')}
                onBlur={props.handleBlur('contact')}
                value={props.values.contact}
                placeholder="Contact Number"
                style={styles.input}
                ref={el => this.contactInput = el}
              />
              {props.touched.contact && props.errors.contact ? (
                <Text style={styles.error}>{props.errors.contact}</Text>
              ) : null}
              <TextInput
                onChangeText={props.handleChange('address')}
                onBlur={props.handleBlur('address')}
                value={props.values.address}
                placeholder="Your Address"
                style={styles.input}
                ref={el => this.addressInput = el}
              />
              {props.touched.address && props.errors.address ? (
                <Text style={styles.error}>{props.errors.address}</Text>
              ) : null}
              <Button
                onPress={props.handleSubmit}
                color="black"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}
                title="Submit"
                >
              </Button>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const mapStateToProps = state =>{
   return {
      state
   }
}
const mapDispatchToProps = dispatch =>{
  return {
    reduxPostUserData: (data) => dispatch({
      type: 'POST_USER_DATA',
      payload: data,
    }),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FormScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    title: {
      margin: 24,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    error: {
      margin: 8,
      fontSize: 14,
      color: 'red',
      fontWeight: 'bold',
    },
    input: {
      height: 50,
      paddingHorizontal: 8,
      width: '100%',
      borderColor: '#ddd',
      borderWidth: 1,
      backgroundColor: '#fff',
    },
  });
  