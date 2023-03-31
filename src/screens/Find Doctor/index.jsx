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
  TextInput,
  Input,
  Icon,
} from 'native-base';

const FindDoctor = () => {
  return (
    <Box flex={1}>
      <Text bold paddingTop={5} paddingLeft={4} fontSize="lg">
        Find Doctor
      </Text>
      <Box
        marginTop={6}
        flex={1}
        flexDirection="row"
        justifyContent="center"
        maxHeight="8%"
        marginX={5}>
        <Input
          flex={7}
          placeholder="Search"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          backgroundColor="white"
          borderColor="gray.400"
          selectionColor="gray.400"
          InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" />}
          InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" />}
        />
        <Image
          flex="1"
          marginLeft={5}
          source={require('../../assests/chat.png')}
          alt="Alternate Text"
          height="null"
          resizeMode="contain"
          width="50"
        />
      </Box>
      <Spacer />
    </Box>
  );
};

export default FindDoctor;
