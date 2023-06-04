import React, { useState } from "react";
import { SafeAreaView, FlatList, TextInput, View } from "react-native";
import ContactItem from "./components/ContactItem";
import ContactDetails from "./components/ContactDetails";

const contactsData = [
  { id: 1, name: "Arjun", number: "1234567890" },
  { id: 2, name: "John", number: "9876543210" },
  { id: 3, name: "Jane", number: "5555555555" },
  // Add more contacts here
];

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const handleContactClose = () => {
    setSelectedContact(null);
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Search contacts"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onPress={() => handleContactPress(item)}
          />
        )}
      />
      {selectedContact && (
        <ContactDetails
          contact={selectedContact}
          onClose={handleContactClose}
        />
      )}
    </SafeAreaView>
  );
}
