import IconBell from '@/svgs/bell-icon';
import IconHamburgerMenu from '@/svgs/hamburger-icon';
import IconSearch from '@/svgs/search-icon';
import UKIcon from '@/svgs/uk-icon';
import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import React from 'react'

const Search = () => {
  return (
    <Flex justifyContent="space-between">
        <Flex alignItems="center" gap={5}>
            <IconHamburgerMenu width="20px" height="20px"/>
            <InputGroup>
                <InputLeftElement>
                    <IconSearch/>
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
        </Flex>
    </Flex>
  )
}

export default Search;