import React from 'react';
import {Image} from 'react-native';
import Styles from './styles';
import {Box, Center} from 'native-base';

const HeaderView = () => {
  return (
    <Box flex="1" bg="info.500" width="full" maxHeight="10%" maxWidth="100%">
      <Center flex="1">
        <Image
          width="15%"
          height="80%"
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          resizeMode="center"
          borderRadius={20}
        />
      </Center>
    </Box>
  );
};

export default HeaderView;
