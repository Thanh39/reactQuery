import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Text } from "@chakra-ui/react"

const queryClient = new QueryClient();
function App() {
  const [page, setpage] = useState('planets')
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider >
        <Flex className="App" justify="center">
          <Flex bgColor='blue.300' direction='column' borderRadius='7px' w='50%' align="center">
            <Text fontSize='4xl' fontWeight='700' color="purple.600" textShadow='2px 1px 3px #ff0000' m='6'>Star Wars Infor</Text>
            <Navbar setpage={setpage} />
            <div className="content">
              {page === 'planets' ? <Planets /> : <People />}
            </div>
          </Flex>

        </Flex>
      </ChakraProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>


  );
}

export default App;
