import React from 'react';
import {Box,Text} from '@chakra-ui/react'
const Planet =({planet})=>{
    return(
        <Box className='card' bgColor='orange.200' m={2} p={5} display='block' borderRadius='3px'>
            <Text fontWeight={500} fontSize='2xl'>{planet.name}</Text>
            <p>Population-{planet.population}</p>
            <p>Terrain-{planet.terrain}</p>
        </Box>
    )
}

export default Planet