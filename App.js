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
} from 'native-base';
import HeaderView from './src/components/custom/Headerview';
import Dashboard from './src/screens/Dashboard';
import FindDoctor from './src/screens/Find Doctor';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <HeaderView />
        <Dashboard />
        {/* <FindDoctor /> */}
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  notificationDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 8,
    marginRight: 10,
  },
});
