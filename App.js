import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { sendEmail } from './Mail';




export default function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  
  
  const handleSubmit = () => {
    console.log(`Name: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`)
   
    sendEmail(
      'kallurinaveen02002@gmail.com',
         'Contact form',
         'my name' + name +
      ' phone number '+ phoneNumber +'  '+message,
   { cc: 'kallurinaveen990@gmail.com' }
  ).then(() => {
      console.log('Your message was successfully sent!');
  });
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Input
        placeholder='Name'
        onChangeText={handleNameChange}
        value={name}
      />
      <Input
        placeholder='Phone Number'
        onChangeText={handlePhoneNumberChange}
        value={phoneNumber}
        keyboardType='phone-pad'
      />
      <Input
        placeholder='Email'
        onChangeText={handleEmailChange}
        value={email}
        keyboardType='email-address'
      />
      <Input
        placeholder='Message'
        onChangeText={handleMessageChange}
        value={message}
        multiline={true}
      />
      <Button
        title='Submit'
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
});
