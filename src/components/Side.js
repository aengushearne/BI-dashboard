import React from 'react';
import {
    Title,
    Header,
    Menu,
    Anchor,
    Sidebar,
    Button,
    Box,
    Footer,
  } from 'grommet';
  import User from 'grommet/components/icons/base/User';
  
export default () => (
  <Sidebar colorIndex='light-2'
      fixed={false}
      size='small'>
      <Header pad='medium'
        justify='between'>
        <Title pad='small'>
        <img src="http://notman.org/wp-content/uploads/2017/07/NOTMAN_logo.png" alt="Maison Norman House" width='180em'/> 
        </Title>
      </Header>
      <Box flex='grow'
        justify='start'>
        <Menu primary={true}>
          <Anchor href='#'
            className='active'>
            Cool Things
          </Anchor>
          <Anchor href='#'>
            Awesome Stuff
          </Anchor>
          <Anchor href='#'>
            Great Details
          </Anchor>
        </Menu>
      </Box>
      <Footer pad='medium'>
        <Button icon={<User />} />
      </Footer>
    </Sidebar>
  );