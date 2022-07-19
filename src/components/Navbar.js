import React from "react";
import { Box,Flex } from "@chakra-ui/react"

const Navbar = ({setpage}) => {
    return (
        <Flex align="center" justify="center">
            <Box m={3} maxW="80px" p={2}
                 bgGradient="radial(gray.300, yellow.400, pink.200)"
                 textAlign='center' 
                 fontWeight="extrabold"
                 onClick={()=>setpage('planets')}>Planets</Box>
            <Box m={3} maxW="80px" p={2}
                borderRadius='3px'
                 bgGradient="radial(gray.300, yellow.400, pink.200)"
                 textAlign='center' 
                 fontWeight="extrabold"
                  onClick={()=>setpage('people')}>People</Box>
        </Flex>
      );
}
 
export default Navbar ;