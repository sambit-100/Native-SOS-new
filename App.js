


// // import React, { useState } from 'react';
// // import {
// //   SafeAreaView,
// //   Text,
// //   Button,
// //   FlatList,
// //   TouchableOpacity,
// //   StyleSheet,
// //   PermissionsAndroid,
// //   Alert,
// //   View,
// //   Modal,
// //   TouchableWithoutFeedback,
// // } from 'react-native';
// // import { pickContact } from 'react-native-contact-pick';

// // const App = () => {
// //   const [selectedContacts, setSelectedContacts] = useState([]);
// //   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
// //   const [deleteIndex, setDeleteIndex] = useState(null); // Track which contact to delete

// //   // Function to request READ_CONTACTS permission on Android
// //   const requestContactsPermission = async () => {
// //     try {
// //       const granted = await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
// //         {
// //           title: 'Contacts Access Permission',
// //           message: 'This app needs access to your contacts to set emergency contacts.',
// //           buttonNeutral: 'Ask Me Later',
// //           buttonNegative: 'Cancel',
// //           buttonPositive: 'OK',
// //         }
// //       );
// //       return granted === PermissionsAndroid.RESULTS.GRANTED;
// //     } catch (err) {
// //       console.warn(err);
// //       return false;
// //     }
// //   };

// //   // Function to pick contacts from the phone
// //   const ContactPick = async () => {
// //     const hasPermission = await requestContactsPermission();
// //     if (hasPermission) {
// //       pickContact()
// //         .then((contact) => {
// //           if (contact) {
// //             console.log('Selected contact:', contact); // Log contact structure

// //             // Save the selected contact
// //             setSelectedContacts((prevContacts) => [...prevContacts, contact]);
// //           }
// //         })
// //         .catch((error) => {
// //           console.warn('Error picking contact:', error);
// //           Alert.alert('Error', 'Failed to pick a contact.');
// //         });
// //     } else {
// //       Alert.alert('Permission Denied', 'Unable to access contacts.');
// //     }
// //   };

// //   // Function to delete a contact
// //   const deleteContact = () => {
// //     setSelectedContacts((prevContacts) => {
// //       const updatedContacts = [...prevContacts];
// //       updatedContacts.splice(deleteIndex, 1); // Remove the contact at the specified index
// //       return updatedContacts;
// //     });
// //     setDeleteModalVisible(false); // Close the modal
// //     setDeleteIndex(null); // Reset the delete index
// //     Alert.alert('Success', 'Contact deleted successfully.');
// //   };

// //   const showDeleteModal = (index) => {
// //     setDeleteIndex(index);
// //     setDeleteModalVisible(true);
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text style={styles.title}>Emergency Contacts</Text>

// //       {/* Button to pick a contact */}
// //       <Button title="Set Emergency Contacts" onPress={ContactPick} />

// //       {/* Display saved contacts */}
// //       <Text style={styles.contactsTitle}>Saved Contacts:</Text>
// //       {selectedContacts.length > 0 ? (
// //         <FlatList
// //           data={selectedContacts}
// //           keyExtractor={(item, index) => index.toString()}
// //           renderItem={({ item, index }) => (
// //             <TouchableOpacity
// //               style={styles.contactItem}
// //               onLongPress={() => showDeleteModal(index)} // Show delete modal on long press
// //             >
// //               <Text style={styles.contactText}>
// //                 {item.fullName || 'Unnamed Contact'}
// //               </Text>
// //               <Text style={styles.contactSubText}>
// //                 {item.phoneNumbers[0].number || 'No phone number'}
// //               </Text>
// //             </TouchableOpacity>
// //           )}
// //         />
// //       ) : (
// //         <Text>No contacts selected yet.</Text>
// //       )}

// //       {/* Delete confirmation modal */}
// //       <Modal
// //         transparent={true}
// //         animationType="slide"
// //         visible={deleteModalVisible}
// //         onRequestClose={() => setDeleteModalVisible(false)}
// //       >
// //         <TouchableWithoutFeedback onPress={() => setDeleteModalVisible(false)}>
// //           <View style={styles.modalOverlay}>
// //             <View style={styles.modalContainer}>
// //               <Text style={styles.modalTitle}>Delete Contact</Text>
// //               <Text style={styles.modalMessage}>Are you sure you want to delete this contact?</Text>
// //               <View style={styles.modalButtonContainer}>
// //                 <Button title="Cancel" onPress={() => setDeleteModalVisible(false)} />
// //                 <Button title="Delete" onPress={deleteContact} color="red" />
// //               </View>
// //             </View>
// //           </View>
// //         </TouchableWithoutFeedback>
// //       </Modal>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: '#fff',
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: 'blue',
// //   },
// //   contactsTitle: {
// //     fontSize: 20,
// //     marginTop: 20,
// //     marginBottom: 10,
// //     color: 'red',
// //   },
// //   contactItem: {
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   contactText: {
// //     fontSize: 18,
// //     color: 'black',
// //   },
// //   contactSubText: {
// //     fontSize: 16,
// //     color: '#666',
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   modalContainer: {
// //     width: '80%',
// //     padding: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     elevation: 5,
// //   },
// //   modalTitle: {
// //     fontSize: 20,
// //     marginBottom: 10,
// //     textAlign: 'center',
// //   },
// //   modalMessage: {
// //     fontSize: 16,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: 'red',
// //   },
// //   modalButtonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// // });

// // export default App;

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Alert,
  Vibration,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { pickContact } from 'react-native-contact-pick';
import RNShake from 'react-native-shake'; // Shake detection
//import SmsAndroid from 'react-native-sms-android'; // SMS sending
import { SendDirectSms } from 'react-native-send-direct-sms';
import BackgroundService from 'react-native-background-actions';// running app in background
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Geolocation from 'react-native-geolocation-service';

const audioRecorderPlayer = new AudioRecorderPlayer();
const App = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null); // Track which contact to delete
  const [smsSent, setSmsSent] = useState(false);



  // const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

  // const veryIntensiveTask = async (taskDataArguments) => {
  //   const { delay } = taskDataArguments;
  //   while (BackgroundService.isRunning()) {
  //     handleShake(); // Your shake detection logic
  //     await sleep(delay); // Wait for the delay time
  //   }
  // };

  // const addContact = (contact) => {
  //   setSelectedContacts( [...selectedContacts, contact]);
  //   setSmsSent(false);  // Reset the smsSent flag
  // };

  

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Task to run in the background
const veryIntensiveTask = async (taskDataArguments) => {
  const { delay } = taskDataArguments;
  
  // Task keeps running until BackgroundService.stop() is called
  while (BackgroundService.isRunning()) {
    console.log("Checking for shake events...");
    handleShake();
    // Your shake detection or other logic here
    await sleep(delay); // Delay between checks
  }
};

const options = {
  taskName: 'BackgroundTask',
  taskTitle: 'Running background task',
  taskDesc: 'This service runs even when screen is locked.',
  // taskIcon: {
  //   name: 'ic_launcher',
  //   type: 'mipmap',
  // },
  color: '#ff00ff',
  //linkingURI: 'yourapp://home',
  parameters: {
    delay: 1000, // Check every second
  },
};

useEffect(() => {
  const startBackgroundService = async () => {
    try {
      await BackgroundService.start(veryIntensiveTask, options); // Start the background task
      console.log('Background service started');
    } catch (error) {
      console.error('Error starting background service:', error);
    }
  };

  startBackgroundService(); // Start the background service when the app starts

  // Optional cleanup to stop the service when component unmounts
  return () => {
    BackgroundService.stop(); // Stop the background service
    console.log('Background service stopped');
  };
}, []);



  useEffect(() => {
    // Listen for shake event
    const subscription = RNShake.addListener(async () => {
      setSmsSent(false)
      // startRecording();
      handleShake();
    });

    return () => {
      subscription.remove(); // Cleanup
    };
  }, [selectedContacts.length]);

  // const handleShake = async () => {
  //   if (selectedContacts.length > 0) {
  //     Vibration.vibrate(500); // Vibrate the phone when shaken
  //     const hasSendSMSPermission = await requestSMSPermission();
  //     if (hasSendSMSPermission) {
        
  //       sendEmergencySMS(); // Send SMS to saved contacts
  //     } else {
  //       Alert.alert('Permission Denied', 'Unable to send SMS.');
  //     }
  //   } else {
  //     Alert.alert('No Contacts', 'Please save at least one emergency contact.');
  //   }
  // };

  // const RecordAudio = ({ onFinishRecording }) => {
  //   const [recording, setRecording] = useState(false);
  
  //   const startRecording = async () => {
  //     setRecording(true);
  //     await audioRecorderPlayer.startRecorder();
  //     setTimeout(async () => {
  //       const result = await audioRecorderPlayer.stopRecorder();
  //       setRecording(false);
  //       onFinishRecording(result);
  //     }, 10000); // Record for 10 seconds
  //   };
  
  // new handle shake adding location
  const handleShake = async () => {
    if (selectedContacts.length > 0 ) {
      Vibration.vibrate(500); // Vibrate the phone when shaken
      const hasSendSMSPermission = await requestSMSPermission();
      if (hasSendSMSPermission) {
        // Request location permission and send the emergency SMS
        const hasLocationPermission = await requestLocationPermission();
        if (hasLocationPermission) {
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              sendEmergencySMS(latitude, longitude); // Send SMS with location
            },
            (error) => {
              console.error("Error getting location:", error);
              Alert.alert("Location Error", "Unable to fetch your location.");
              sendEmergencySMS(); // Send SMS without location if location fails
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          Alert.alert('Permission Denied', 'Unable to access location.');
          sendEmergencySMS(); // Send SMS without location if permission denied
        }
      } else {
        Alert.alert('Permission Denied', 'Unable to send SMS.');
      }
    } else {
      Alert.alert('No Contacts', 'Please save at least one emergency contact.');
    }
  };

  // const handleShake = async () => {
  //   if (selectedContacts.length > 0) {
  //     if (!smsSent) {
  //       Vibration.vibrate(500); // Vibrate the phone when shaken
  //       const hasSendSMSPermission = await requestSMSPermission();
  //       if (hasSendSMSPermission) {
  //         const hasLocationPermission = await requestLocationPermission();
  //         if (hasLocationPermission) {
  //           Geolocation.getCurrentPosition(
  //             (position) => {
  //               const { latitude, longitude } = position.coords;
  //               sendEmergencySMS(latitude, longitude); // Send SMS with location
  //             },
  //             (error) => {
  //               console.error("Error getting location:", error);
  //               Alert.alert("Location Error", "Unable to fetch your location.");
  //               sendEmergencySMS(); // Send SMS without location if location fails
  //             },
  //             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //           );
  //         } else {
  //           Alert.alert('Permission Denied', 'Unable to access location.');
  //           sendEmergencySMS(); // Send SMS without location if permission denied
  //         }
  //       } else {
  //         Alert.alert('Permission Denied', 'Unable to send SMS.');
  //       }
  //     } else {
  //       console.log('SMS already sent, shaking will not trigger again unless contacts are changed.');
  //     }
  //   } else {
  //     Alert.alert('No Contacts', 'Please save at least one emergency contact.');
  //   }
  // };

  // Function to request SEND_SMS permission on Android
  const requestSMSPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'SMS Access Permission',
          message: 'This app needs permission to send SMS for emergency purposes.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Permission',
          message: 'This app needs permission to access your location for emergencies.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // const sendEmergencySMS = () => {
  //   const message = 'Help'; // The emergency message
  //   selectedContacts.forEach((contact) => {
  //     const phoneNumber = contact.phoneNumbers[0].number;
  //     SendDirectSms(phoneNumber, message)
  //       .then((res) => console.log("SMS sent successfully", res)).then(setSmsSent(true))
  //       .catch((err) => console.error("Error sending SMS", err))
  //   })
  // }

  const sendEmergencySMS = (latitude = null, longitude = null) => {
    let message = 'Help'; // Default emergency message
    if (latitude && longitude) {
      message += `\nLocation: https://maps.google.com/?q=${latitude},${longitude}`;
    }
  
    selectedContacts.forEach((contact) => {
      const phoneNumber = contact.phoneNumbers[0].number;
      SendDirectSms(phoneNumber, message)
        .then((res) => {
          console.log("SMS sent successfully", res);
          
        })
        .catch((err) => console.error("Error sending SMS", err));
    });

    setSmsSent(true);
  };

  // Function to request READ_CONTACTS permission on Android
  const requestContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Access Permission',
          message: 'This app needs access to your contacts to set emergency contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // Function to pick contacts from the phone
  const ContactPick = async () => {
    const hasPermission = await requestContactsPermission();
    if (hasPermission) {
      pickContact()
        .then((contact) => {
          if (contact) {
            console.log('Selected contact:', contact); // Log contact structure

            // Save the selected contact
            setSelectedContacts((prevContacts) => [...prevContacts, contact]);
          }
        })
        .catch((error) => {
          console.warn('Error picking contact:', error);
          Alert.alert('Error', 'Failed to pick a contact.');
        });
    } else {
      Alert.alert('Permission Denied', 'Unable to access contacts.');
    }
  };

  // const ContactPick = async () => {
  //   const hasPermission = await requestContactsPermission();
  //   if (hasPermission) {
  //     pickContact()
  //       .then((contact) => {
  //         if (contact) {
  //           console.log('Selected contact:', contact); // Log contact structure
  //           addContact(contact);  // Add contact and reset smsSent
  //         }
  //       })
  //       .catch((error) => {
  //         console.warn('Error picking contact:', error);
  //         Alert.alert('Error', 'Failed to pick a contact.');
  //       });
  //   } else {
  //     Alert.alert('Permission Denied', 'Unable to access contacts.');
  //   }
  // };



  // Function to delete a contact
  const deleteContact = () => {
    setSelectedContacts((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts.splice(deleteIndex, 1); // Remove the contact at the specified index
      return updatedContacts;
    }); 
    setDeleteModalVisible(false); // Close the modal
    setDeleteIndex(null); // Reset the delete index
    Alert.alert('Success', 'Contact deleted successfully.');
  };

  const showDeleteModal = (index) => {
    setDeleteIndex(index);
    setDeleteModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      {/* Button to pick a contact */}
      <Button title="Set Emergency Contacts" onPress={ContactPick} />

      {/* Display saved contacts */}
      <Text style={styles.contactsTitle}>Saved Contacts:</Text>
      {selectedContacts.length > 0 ? (
        <FlatList
          data={selectedContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onLongPress={() => showDeleteModal(index)} // Show delete modal on long press
            >
              <Text style={styles.contactText}>
                {item.fullName || 'Unnamed Contact'}
              </Text>
              <Text style={styles.contactSubText}>
                {item.phoneNumbers[0].number || 'No phone number'}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No contacts selected yet.</Text>
      )}

      {/* Delete confirmation modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setDeleteModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Delete Contact</Text>
              <Text style={styles.modalMessage}>Are you sure you want to delete this contact?</Text>
              <View style={styles.modalButtonContainer}>
                <Button title="Cancel" onPress={() => setDeleteModalVisible(false)} />
                <Button title="Delete" onPress={deleteContact} color="red" />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
  },
  contactsTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: 'red',
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactText: {
    fontSize: 18,
    color: 'black',
  },
  contactSubText: {
    fontSize: 16,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;






// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   Text,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   PermissionsAndroid,
//   Alert,
//   Vibration,
//   View,
//   Modal,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import { pickContact } from 'react-native-contact-pick';
// import RNShake from 'react-native-shake'; // Shake detection
// import { SendDirectSms } from 'react-native-send-direct-sms';
// import Geolocation from 'react-native-geolocation-service';

// const App = () => {
//   const [selectedContacts, setSelectedContacts] = useState([]);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [smsSent, setSmsSent] = useState(false); // Track if SMS was sent

//   useEffect(() => {
//     // Listen for shake event
//     const subscription = RNShake.addListener(() => {
//       handleShake();
//     });

//     return () => {
//       subscription.remove(); // Cleanup
//     };
//   }, [selectedContacts]);

//   // Handle shake event logic
//   const handleShake = async () => {
//     if (selectedContacts.length > 0) {
//       // If SMS has already been sent for the current contact list, don't send again
//       if (smsSent) {
//         console.log("SMS already sent. Not sending again.");
//         return;
//       }

//       Vibration.vibrate(500); // Vibrate the phone when shaken
//       const hasSendSMSPermission = await requestSMSPermission();
//       if (hasSendSMSPermission) {
//         const hasLocationPermission = await requestLocationPermission();
//         if (hasLocationPermission) {
//           Geolocation.getCurrentPosition(
//             (position) => {
//               const { latitude, longitude } = position.coords;
//               sendEmergencySMS(latitude, longitude); // Send SMS with location
//             },
//             (error) => {
//               console.error("Error getting location:", error);
//               Alert.alert("Location Error", "Unable to fetch your location.");
//               sendEmergencySMS(); // Send SMS without location if location fails
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//           );
//         } else {
//           Alert.alert('Permission Denied', 'Unable to access location.');
//           sendEmergencySMS(); // Send SMS without location if permission denied
//         }
//       } else {
//         Alert.alert('Permission Denied', 'Unable to send SMS.');
//       }
//     } else {
//       Alert.alert('No Contacts', 'Please save at least one emergency contact.');
//     }
//   };

//   // Function to request SEND_SMS permission on Android
//   const requestSMSPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.SEND_SMS,
//         {
//           title: 'SMS Access Permission',
//           message: 'This app needs permission to send SMS for emergency purposes.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Access Permission',
//           message: 'This app needs permission to access your location for emergencies.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Send SMS to emergency contacts
//   const sendEmergencySMS = (latitude = null, longitude = null) => {
//     let message = 'Help'; // Default emergency message
//     if (latitude && longitude) {
//       message += `\nLocation: https://maps.google.com/?q=${latitude},${longitude}`;
//     }

//     selectedContacts.forEach((contact) => {
//       const phoneNumber = contact.phoneNumbers[0].number;
//       SendDirectSms(phoneNumber, message)
//         .then((res) => {
//           console.log("SMS sent successfully", res);
//           setSmsSent(true); // Set flag to indicate SMS has been sent
//         })
//         .catch((err) => console.error("Error sending SMS", err));
//     });
//   };

//   // Function to request READ_CONTACTS permission on Android
//   const requestContactsPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//         {
//           title: 'Contacts Access Permission',
//           message: 'This app needs access to your contacts to set emergency contacts.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Function to pick contacts from the phone
//   const ContactPick = async () => {
//     const hasPermission = await requestContactsPermission();
//     if (hasPermission) {
//       pickContact()
//         .then((contact) => {
//           if (contact) {
//             // Save the selected contact
//             setSelectedContacts((prevContacts) => {
//               const updatedContacts = [...prevContacts, contact];
//               setSmsSent(false); // Reset the SMS flag when contacts are modified
//               return updatedContacts;
//             });
//           }
//         })
//         .catch((error) => {
//           console.warn('Error picking contact:', error);
//           Alert.alert('Error', 'Failed to pick a contact.');
//         });
//     } else {
//       Alert.alert('Permission Denied', 'Unable to access contacts.');
//     }
//   };

//   // Function to delete a contact
//   const deleteContact = () => {
//     setSelectedContacts((prevContacts) => {
//       const updatedContacts = [...prevContacts];
//       updatedContacts.splice(deleteIndex, 1); // Remove the contact at the specified index
//       setSmsSent(false); // Reset the SMS flag when contacts are modified
//       return updatedContacts;
//     });
//     setDeleteModalVisible(false); // Close the modal
//     setDeleteIndex(null); // Reset the delete index
//     Alert.alert('Success', 'Contact deleted successfully.');
//   };

//   const showDeleteModal = (index) => {
//     setDeleteIndex(index);
//     setDeleteModalVisible(true);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Emergency Contacts</Text>

//       {/* Button to pick a contact */}
//       <Button title="Set Emergency Contacts" onPress={ContactPick} />

//       {/* Display saved contacts */}
//       <Text style={styles.contactsTitle}>Saved Contacts:</Text>
//       {selectedContacts.length > 0 ? (
//         <FlatList
//           data={selectedContacts}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity
//               style={styles.contactItem}
//               onLongPress={() => showDeleteModal(index)} // Show delete modal on long press
//             >
//               <Text style={styles.contactText}>
//                 {item.fullName || 'Unnamed Contact'}
//               </Text>
//               <Text style={styles.contactSubText}>
//                 {item.phoneNumbers[0].number || 'No phone number'}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         <Text>No contacts selected yet.</Text>
//       )}

//       {/* Delete confirmation modal */}
//       <Modal
//         transparent={true}
//         animationType="slide"
//         visible={deleteModalVisible}
//         onRequestClose={() => setDeleteModalVisible(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setDeleteModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Delete Contact</Text>
//               <Text style={styles.modalMessage}>Are you sure you want to delete this contact?</Text>
//               <View style={styles.modalButtonContainer}>
//                 <Button title="Cancel" onPress={() => setDeleteModalVisible(false)} />
//                 <Button title="Delete" onPress={deleteContact} color="red" />
//               </View>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//       backgroundColor: '#fff',
//     },
//     title: {
//       fontSize: 24,
//       marginBottom: 20,
//       textAlign: 'center',
//       color: 'blue',
//     },
//     contactsTitle: {
//       fontSize: 20,
//       marginTop: 20,
//       marginBottom: 10,
//       color: 'red',
//     },
//     contactItem: {
//       padding: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ccc',
//     },
//     contactText: {
//       fontSize: 18,
//       color: 'black',
//     },
//     contactSubText: {
//       fontSize: 16,
//       color: '#666',
//     },
//     modalOverlay: {
//       flex: 1,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     modalContainer: {
//       width: '80%',
//       padding: 20,
//       backgroundColor: 'white',
//       borderRadius: 10,
//       elevation: 5,
//     },
//     modalTitle: {
//       fontSize: 20,
//       marginBottom: 10,
//       textAlign: 'center',
//     },
//     modalMessage: {
//       fontSize: 16,
//       marginBottom: 20,
//       textAlign: 'center',
//       color: 'red',
//     },
//     modalButtonContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//   });
  
//   export default App;

