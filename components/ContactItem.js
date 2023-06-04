import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ContactItem = ({ contact, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{contact.name}</Text>
  </TouchableOpacity>
);

export default ContactItem;
