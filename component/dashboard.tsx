import React from 'react'
import Layout from './layout';
import { Box, Flex, Text } from '@chakra-ui/react';
import Card from './card';

const Dashboard = () => {
  return (
    <Layout>
        <Box bg="#E5E5E5" border="1px solid #D9D9D9" p="2rem 1rem 2rem 1rem">
          <Text fontSize="32px">Dashboard</Text>
          <Flex gap={5}>
            <Card 
            head='User'
            figure='40,689' 
            percent='8.5' 
            direction='Up' 
            period='yesterday'
            />
            <Card 
            head='Order'
            figure='10293' 
            percent='1.3' 
            direction='Up' 
            period='past week'
            />
            <Card 
            head='Sales'
            figure='$89,000' 
            percent='4.3' 
            direction='Down' 
            period='yesterday'
            />
            <Card 
            head='Pending'
            figure='2040' 
            percent='1.8' 
            direction='Up' 
            period='yesterday'
            />
          </Flex>
        </Box>
    </Layout>
  )
}

export default Dashboard;