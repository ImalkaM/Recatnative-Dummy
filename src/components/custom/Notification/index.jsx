import React from 'react';
import {SafeAreaView, View, StyleSheet, Pressable} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Flex,
  Spacer,
  VStack,
  Text,
  Center,
  Image,
  Divider,
  Heading,
} from 'native-base';

const NotiifcationBox = () => {
  return (
    <Box flex={1} borderColor="gray" borderWidth={0.5} mx={3} borderRadius={10}>
      <Pressable style={({pressed}) => pressed && styles.pressedItem}>
        <Box flex={1} flexDirection="row">
          <Box flex={1} flexDirection="row" pt={2.5} pl={2.5} mr={2.5}>
            <Box flex={4} pb={2.5}>
              <Text>Dr Andy has confirmed their attendance</Text>
              <Text>Available - 11 miles away</Text>
            </Box>
            <Box
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../assests/phone-call.png')}
                alt="Alternate Text"
                height="30"
                width="30"
              />
              <Image
                source={require('../../../assests/chat.png')}
                alt="Alternate Text"
                height="30"
                width="30"
              />
            </Box>
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  notificationDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 8,
    marginRight: 10,
  },
  pressedItem: {
    backgroundColor: '#eb9393',
    borderRadius: 10,
  },
});

export default NotiifcationBox;
