import React from 'react';
import {
    Title,
    Header,
    Menu,
    Anchor,
    Box,
    Search
  } from 'grommet';
  import Actions from 'grommet/components/icons/base/Actions';
  
  export default () => (
    <Header 
      colorIndex='neutral-2'
      fixed={false}
      splash={false}
      float={false}
      pad='small'>
      <Title>
        BI Dashboard
      </Title>
      <Box flex={true}
        justify='end'
        direction='row'
        responsive={false}>
        <Search inline={true}
          fill={true}
          size='medium'
          placeHolder='Search'
          dropAlign={{"right": "right"}} />
        <Menu icon={<Actions />}
          dropAlign={{"right": "right"}}>
          <Anchor href='#'
            className='active'>
            Cool
          </Anchor>
          <Anchor href='#'>
            Awesome
          </Anchor>
          <Anchor href='#'>
            Great
          </Anchor>
        </Menu>
      </Box>
    </Header>
);