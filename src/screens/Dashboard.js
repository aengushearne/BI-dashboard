import React from 'react';

import {
  App,
  Split,
  Box,
} from 'grommet';

import Side from '../components/Side';
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import ChartTiles from '../components/ChartTiles';

export default () => (
  <App
    centered={false}>

    <Split 
      separator={false}
      flex='right'>
    <Box colorIndex='neutral-1'
      justify='center'
      align='center'
      >
      
      <Side />

    </Box>
    <Box colorIndex='grey-3'
      justify='start'
      flex='grow'
      full='vertical'
      pad='small'>

    <Nav />
    
    <ChartTiles />

    </Box>
  </Split>

  </App>
);
