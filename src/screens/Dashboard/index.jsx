import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
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
  ScrollView,
  Menu,
} from 'native-base';
import UserDetails from '../../components/custom/Dashboard/UserDetails';
import NotiifcationBox from '../../components/custom/Notification';
import FrequentContacts from '../../components/custom/Dashboard/FrequentContacts';

const Dashboard = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      color: '#4067dd',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      color: '#dd409d',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      color: '#40dd5f',
    },
  ];
  return (
    <ScrollView style={{flex: 1}}>
      <Box flex="1" flexDirection="column">
        <Text bold paddingTop={5} paddingLeft={4} fontSize="lg">
          Dashboard
        </Text>
        <UserDetails />
        <Box flexDirection="column" paddingBottom={5}>
          <Text bold paddingTop={5} paddingLeft={4} fontSize="lg">
            Notifications
          </Text>
        </Box>
        <FlatList
          data={DATA}
          renderItem={({item}) => <NotiifcationBox />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{height: 5}} />}
        />
        <Box flexDirection="column" paddingBottom={5}>
          <Text bold paddingTop={5} paddingLeft={4} fontSize="lg">
            Frequent Contacts
          </Text>
        </Box>
      </Box>
      <FlatList
        data={DATA}
        renderItem={({item}) => <FrequentContacts leftColor={item.color} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
      />
    </ScrollView>
  );
};

export default Dashboard;
