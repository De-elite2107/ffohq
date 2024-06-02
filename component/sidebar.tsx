import { Box, Flex, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Sidebar = () => {
const [tabIndex, setTabIndex] = useState(0)
  return (
    <Box p="1rem">
      <Tabs
      onChange={(index) => setTabIndex(index)} index={tabIndex}
      >
        <TabList
        flexDirection="column"
        pos="sticky"
        w="10rem"
        >
          <Flex justifyContent="center" mb="1rem">
            <Text color="#455DFF">Dash</Text>
            <Text>Stack</Text>
          </Flex>
          <Tab
          _selected={{bg: "#4880FF", color : "white"}}
          p="0.5rem"
          borderRadius="5px"
          ><Text>Dashboard</Text></Tab>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default Sidebar