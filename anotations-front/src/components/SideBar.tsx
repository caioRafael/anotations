import { GridItem, Button, Text } from '@chakra-ui/react';

function SideBar(){
    return(
        <GridItem p='2' borderRadius={5} bg='#1E1E1E' area={'nav'}>
            <Button 
                w={'100%'} h={55} bg={'#0F0F0F'} 
                borderRadius={5} 
                display={"flex"} 
                alignItems={'center'}
            >
                <Text color='teal' fontSize={'2xl'}>3</Text>
            </Button>
        </GridItem>
    )
}

export default SideBar