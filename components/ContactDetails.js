import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ContactDetails = ({ contact, onClose }) => (
  <View>
    <Text>Name: {contact.name}</Text>
    <Text>Number: {contact.number}</Text>
    <TouchableOpacity onPress={onClose}>
      <Text>Close</Text>
    </TouchableOpacity>
  </View>
);

export default ContactDetails;
