import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Note from './note'; 

export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            noteArray:[],
            noteText: '',
        }
    }
    render(){
        let notes = this.state.noteArray.map((val, key)=> {
            return <Note key={key} keyval={key} val={val}
            deleteMethod={()=> this.deleteNote(key)}/>
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}> NOTE </Text>  
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                    onChangeText={(noteText)=>this.StyleSheet({noteText})}
                    style={styles.textInput}
                    placeholder="Write your note"
                    placeholderTextColor="black"/>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}> + </Text>
                </TouchableOpacity>
            </View>
         );
    }
    addNote(){
        if(this.state.noteArray){
            var d = new Date();
            this.state.noteArray.push({
                'date' : d.getFullYear() +
                '/' + (d.getMonth() +1) +
                '/' + d.getDate(),
                'note' : this.state.noteText
            });
            this.state({noteArray: this.state.noteArray})
            this.setState({noteText: ''})
        }
    }
    deleteNote(key){
        this.setState({noteArray: this.state.noteArray})
        this.setState.apply({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      backgroundColor:'#DEB887',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth: 2,
      borderBottomColor:'#DEB887',
  },
  textHeader: {
      color:'black',
      fontSize:20,
      paddingTop: 40,
      paddingBottom: 0
  },
  scrollContainer:{
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      zIndex: 10,
      backgroundColor:'#DEB887',
  },
  TextInput:{
      alignSelf:'auto',
      color: 'black',
      padding:20,
      backgroundColor:'#DEB887',
      borderTopWidth:50,
      borderTopColor:'#DEB887',
  },
  addButton:{
      position: 'absolute',
      zIndex: 11,
      right: 10,
      bottom: 80,
      backgroundColor:'#DEB887',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
  addButtonText:{
      color:'black',
      fontSize: 24,
  }
});
