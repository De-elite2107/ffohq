import { Sen } from "next/font/google";
import IconBars from '@/svgs/bars-icon'
import IconCalendar from '@/svgs/calendar-icon'
import IconCardChecklist from '@/svgs/checklist-icon'
import IconSpeedometer from '@/svgs/dash-icon'
import IconGift from '@/svgs/gift-icon'
import IconHeart from '@/svgs/heart-icon'
import IconInvoice from '@/svgs/invoice-icon'
import IconMessages from '@/svgs/message-icon'
import IconPeople, { IconPeopleFill } from '@/svgs/people-icon'
import IconSoftware_layout_4boxes from '@/svgs/prod-icon'
import IconStock from '@/svgs/stock-icon'
import IconBasic_todo from '@/svgs/todo-icon'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Dashboard from "@/component/dashboard";
import IconBuilding from "@/svgs/building-icon";

const sen = Sen({ subsets: ["latin"] });

export default function Home() {
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <Box>
      <Tabs
      onChange={(index) => setTabIndex(index)} index={tabIndex}
      >
        <Flex>
          <TabList
          flexDirection="column"
          w="20rem"
          lineHeight={10}
          >
            <Flex justifyContent="center" pt="1rem" mb="1rem">
              <Text fontWeight={600} fontSize="24px" color="#455DFF">Dash</Text>
              <Text fontWeight={600} fontSize="24px">Stack</Text>
            </Flex>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconSpeedometer width="20px" height="20px"/>&emsp;
              <Text>Dashboard</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconBuilding width="20px" height="20px"/>&emsp;
              <Text>Restaurants</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconPeopleFill width="20px" height="20px"/>&emsp;
              <Text>Users</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            mb="2rem"
            >
              <IconMessages width="20px" height="20px"/>&emsp;
              <Text>Reviews</Text>
            </Tab>
            <Box
            p="1rem 1rem 2rem 1rem"
            borderTop="1px solid grey"
            >
              <Text ml="30px" color="grey">PAGES</Text>
            </Box>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconGift width="20px" height="20px"/>&emsp;
              <Text>Pricing</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconCalendar width="20px" height="20px"/>&emsp;
              <Text>Calendar</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconBasic_todo width="20px" height="20px"/>&emsp;
              <Text>To-do</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconPeople width="20px" height="20px"/>&emsp;
              <Text>Contact</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconInvoice width="20px" height="20px"/>&emsp;
              <Text>Invoice</Text>
            </Tab>
            <Tab
            ml="30px"
            _selected={{bg: "#4880FF", color : "white"}}
            p="0.5rem 1rem 0.5rem 1rem"
            borderRadius="5px"
            justifyContent="left"
            >
              <IconBars width="20px" height="20px"/>&emsp;
              <Text>UI Elements</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Dashboard/>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
}
