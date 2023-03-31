import React from 'react';
import {Box, Text, Image, Pressable} from 'native-base';

const FrequentContacts = ({leftColor}) => {
  return (
    <Box flex={1} mx="3.5">
      <Pressable
        _pressed={{
          bg: '#eb9393',
        }}
        borderRadius="10"
        flex={1}
        flexDirection="row"
        justifyContent="space-evenly">
        <Box flex="0.1" bg={leftColor} maxWidth="3%" borderLeftRadius="9" />
        <Box
          borderColor="gray"
          borderWidth="0.5"
          flex={0.9}
          borderRadius="10"
          borderLeftRadius="0"
          borderLeftColor={leftColor}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          pr="3">
          <Box flex="9" py="3" pl="3">
            <Text>Dr Andy hasconfirmed their attendance</Text>
            <Text>Available - 11 miles away</Text>
          </Box>
          <Image
            flex="1"
            source={require('../../../../assests/right-chevron.png')}
            alt="Alternate Text"
            height="30"
            width="30"
          />
        </Box>
      </Pressable>
    </Box>
  );
};
export default FrequentContacts;
