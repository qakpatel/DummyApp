import React, { Component } from 'react'
import { View, Text,FlatList,StyleSheet,AsyncStorage,TextInput } from 'react-native';
import { connect } from "react-redux";



class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            text:''
        }
      }
    componentDidMount(){
     this.props.reduxGetUser();
     this.setState({name:this.props.userData.name})
    }

    render() {
      console.log(this.props.userData)
      console.log(this.props.searchData)
        return (
            <View>
              <TextInput
                style={{height: 40,backgroundColor:'#000000',color:'#ffffff'}}
                placeholder="Search by name and email"
                onChangeText={(text) => this.setState({text},()=>{
                  this.props.reduxSearchData(this.state.text)
                })}
                value={this.state.text}
              />  
              <FlatList
                data={this.props.searchData?this.state.text==''?this.props.userData:this.props.searchData:this.props.userData}
               renderItem={({item}) =>(
                <View style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.item} key={item.id}>{item.name}</Text>
                <Text>{item.email}</Text>
                </View>
                )}
             />
           </View>
        
        )
    }
}

const mapStateToProps = state =>{
  console.log('this is user data',state.ListReducer.userData)
   return{
       userData:state.ListReducer.userData,
       searchData:state.ListReducer.searchData
   }
}

const mapDispatchToProps = dispatch =>{
  return{
    reduxGetUser:()=>{
      dispatch({
        type:'GET_USER_DATA'
      })
    },
    reduxSearchData:(key)=>{
      dispatch({
        type:'SEARCH_DATA',
        payload:key
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListScreen);

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  