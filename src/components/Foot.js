import React from 'react';
import {
    Title,
    Menu,
    Anchor,
    Box,
    Footer,
    Paragraph,
  } from 'grommet';

export default () => (
  <Footer justify='between'
  size='small'>
  <Title>
    Logo
     Title
  </Title>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>
    <Paragraph margin='none'>
      © 2016 Grommet Labs
    </Paragraph>
    <Menu direction='row'
      size='small'
      dropAlign={{"right": "right"}}>
      <Anchor href='#'>
        Support
      </Anchor>
      <Anchor href='#'>
        Contact
      </Anchor>
      <Anchor href='#'>
        About
      </Anchor>
    </Menu>
  </Box>
</Footer>
);