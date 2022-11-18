import { GridItem, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

function SideBar(){
    const [selected, setSelected] = useState<boolean>(false)
    return(
        <GridItem p='2' borderRadius={5} bg='#1E1E1E' area={'nav'}>
            <Button 
                w={'100%'} h={55} bg={'#0F0F0F'} 
                borderRadius={5} 
                display={"flex"} 
                alignItems={'center'}
                border={"2px"}
                borderColor={selected ? "teal" : '#0F0F0F'}
                onClick={() => setSelected(!selected)}
                _hover={{ bg: '#1E1E1E' }}
                marginBottom={3}
            >
                <Text color='teal' fontSize={'2xl'}>
                    Anotações
                </Text>
            </Button>
            
            <Button 
                w={'100%'} h={55} bg={'#0F0F0F'} 
                borderRadius={5} 
                display={"flex"} 
                alignItems={'center'}
                border={"2px"}
                borderColor={selected ? "teal" : '#0F0F0F'}
                onClick={() => setSelected(!selected)}
                _hover={{ bg: '#1E1E1E' }}
                marginBottom={3}
            >
                <Text color='teal' fontSize={'2xl'}>
                    Anotações
                </Text>
            </Button>
        </GridItem>
    )
}

export default SideBar