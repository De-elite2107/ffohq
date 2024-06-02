import IconBell from '@/svgs/bell-icon';
import DownArrow from '@/svgs/down-arrow-icon';
import IconHamburgerMenu from '@/svgs/hamburger-icon';
import IconSearch from '@/svgs/search-icon';
import UKIcon from '@/svgs/uk-icon';
import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Select, Text } from '@chakra-ui/react';
import React from 'react'

const Search = () => {
  return (
    <Flex justifyContent="space-between" pb="0.5rem">
        <Flex alignItems="center" gap={5}>
            <IconHamburgerMenu width="20px" height="20px"/>
            <InputGroup>
                <InputLeftElement>
                    <IconSearch color='grey'/>
                </InputLeftElement>
                <Input borderRadius="20px" placeholder='Search' w="20rem"/>
            </InputGroup>
        </Flex>
        <Flex alignItems="center" gap={3}>
            <IconBell color='blue' width = "30px" height = "30px"/>
            <UKIcon width = "30px" height = "30px"/>
            <Select>
                <option value="eng">English</option>
            </Select>
            <Avatar w="50px" h="50px"/>
            <Box w="10rem">
                <Text>Moni Roy</Text>
                <Text color="grey">Admin</Text>
            </Box>
            <DownArrow width="40px" height="40px" color='grey'/>
        </Flex>
    </Flex>
  )
}

export default Search;