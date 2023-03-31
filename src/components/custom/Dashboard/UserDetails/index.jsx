import React from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import {StyleSheet} from 'react-native';
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
  Menu,
} from 'native-base';

const UserDetails = () => {
  const chevronDownPressed = () => {
    console.log('pressedxc');
  };
  return (
    <Box>
      <Box paddingBottom={5} flexDirection="column" alignItems="center">
        <Text bold>Anna Armstrong</Text>
        <Text>Annaarmsstrong@gmail.com</Text>
      </Box>
      <Box paddingBottom={5} flexDirection="row" justifyContent="space-evenly">
        <Box flexDirection="column" alignItems="center">
          <Text bold>Phone</Text>
          <Text bold>0771719212</Text>
        </Box>
        <Divider
          orientation="vertical"
          mx="3"
          _light={{
            bg: 'muted.800',
          }}
          _dark={{
            bg: 'muted.50',
          }}
        />
        <Box flexDirection="column" alignItems="center">
          <HStack justifyContent="space-evenly">
            <VStack alignItems="center">
              <Text bold>Teams</Text>
              <Text bold>AMHP-TEAM1</Text>
            </VStack>
            <Pressable onPress={chevronDownPressed}>
              <Image
                style={{transform: [{rotate: '90deg'}]}}
                source={require('../../../../assests/right-chevron.png')}
                alt="Alternate Text"
                height="30"
                width="30"
              />
            </Pressable>
          </HStack>
        </Box>
      </Box>
      <Box paddingX={5}>
        <Divider
          orientation="horizontal"
          _light={{
            bg: 'muted.800',
          }}
          _dark={{
            bg: 'muted.50',
          }}
        />
      </Box>
    </Box>
  );
};

export default UserDetails;
