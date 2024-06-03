import CounterClockwiseClock from '@/svgs/counterclock-icon';
import IconCube from '@/svgs/cube-icon';
import DownChartLine from '@/svgs/downchartline';
import {IconPeopleFill} from '@/svgs/people-icon';
import IconUpChart from '@/svgs/upchart-icon';
import UpChartLine from '@/svgs/upchartline';
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type ICard = {
    head: "User" | "Order" | "Sales" | "Pending";
    figure: string;
    percent: string;
    direction: "Up" | "Down";
    period: string;
}
const Card = (props: ICard) => {
  return (
    <Box w="15rem" fontSize="small" bg="white" p="1rem" borderRadius="10px">
        <Flex justifyContent="space-between" mb="2rem" alignItems="center">
            <Box lineHeight={8}>
                {props.head !== "Pending" ? (<Text color="grey">Total {props.head}</Text>) : <Text color="grey">Number of Restaurants</Text>}
                <Text fontSize="24px" fontWeight={600}>{props.figure}</Text>
            </Box>
            <Box>
                {props.head === "User" ? <IconPeopleFill color='purple' width="50px" height="50px"/> : props.head === "Order" ? <IconCube color='orange' width="50px" height="50px"/> : props.head === "Sales" ? <IconUpChart color='lightgreen' width="50px" height="50px"/> : props.head === "Pending" ? <CounterClockwiseClock color='coral' width="50px" height="50px"/> : null}
            </Box>
        </Flex>
        <Flex gap={2}>
            <Text color={props.direction === "Up" ? "green" : "red"}>
                <Flex alignItems="center" gap={2}>
                    {props.direction === "Up" ? <UpChartLine/> : <DownChartLine/>} {props.percent}%
                </Flex>
            </Text>
            <Text>{props.direction === "Up" ? "Up" : "Down"} from {props.period}</Text>
        </Flex>
    </Box>
  )
}

export default Card