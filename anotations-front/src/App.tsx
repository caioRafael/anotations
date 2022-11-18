import { Box, Grid, GridItem } from "@chakra-ui/react"
import SideBar from "./components/SideBar"

function App() {
  return (
    <Box 
      width={'100vw'} 
      height={'100vh'} 
      bg={'#000000'}
      p={5}
    >
      <Grid
          templateAreas={`"nav main main main"
                          "nav main main main"`}
          gridTemplateColumns={'261px 2fr'}
          h='100%'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <SideBar/>
          <GridItem pl='2' area={'main'} color={'#fff'}>
            <h1>main</h1>
          </GridItem>
        </Grid>
    </Box>
  )
}

export default App
