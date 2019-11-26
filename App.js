import React, { Component } from 'react';
import { Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default class Login extends Component {
  render() {

    let pic = { uri: 'http://irtech.com.vn/irtechweb/wp-content/uploads/2019/09/cropped-LOGO-IRTECH-06.png'};
    let pic2 = {uri: 'https://wallpaperaccess.com/full/850240.jpg'}
    return(
        <ImageBackground
          source = {pic2}
          blurRadius={3}
          style = {{
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
            <Image  source = {pic} style = {styles.ScreenPicture}/>

            <View>
              <Icon name="email" size={30} color="rgba(0, 0, 0, 0.7)" style = {styles.InputIcon} />
              <TextInput style = {styles.InputBox}
                          placeholder = 'Email'
                          placeholderTextColor = 'rgba(0, 0, 0, 0.7)'
                          underlineColorAndroid ='transparent'/>
            </View>

            <View>
              <Icon name="locked" size={30} color="rgba(0, 0, 0, 0.7)" style = {styles.InputIcon} />
              <TextInput style = {styles.InputBox}
                          placeholder = 'Mật khẩu'
                          placeholderTextColor = 'rgba(0, 0, 0, 0.7)'/>
            </View>

            <TouchableOpacity style = {styles.ButtonBox}>
              <Text style = {styles.ButtonText}> Đăng Nhập </Text>
            </TouchableOpacity>

        </ImageBackground>
    );

  }
}

const styles = StyleSheet.create({
  ScreenPicture:{
    height:250,
    width:400,
    resizeMode:'contain'
  },
  InputBox:{
    height:50,
    width:350,
    backgroundColor:'rgba(200, 200, 200, 0.35)',
    alignSelf:'center',
    borderRadius:25,
    margin:5,
    paddingLeft:65,
    fontSize:20
  },
  ButtonBox:{
    height:50,
    width:350,
    backgroundColor:'#00ced1',
    alignItems:'center',
    borderRadius:25,
    marginTop:25,
    padding:10,
  },
  ButtonText:{
    fontSize:20,
    color:'white'
  },
  InputIcon:{
    position:'absolute',
    top:  15,
    left: 30
  }
});
