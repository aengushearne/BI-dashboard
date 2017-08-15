import React, { Component } from 'react';
import {
    Box,
    Header,
    Heading,
    Layers,
    Value,
    Label
  } from 'grommet';
import Chart, {Axis, Base, Line, HotSpots} from 'grommet/components/chart/Chart';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Distribution from 'grommet/components/Distribution';
import Meter from 'grommet/components/Meter';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import weather from '../api/weather.js';
import netatmo from '../api/netatmo.js';


export default class ChartTiles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weather: {main:0},
            forecast: {'hi':' forecast'},
            loading: true,
            env:[{modules:[{dashboard_data:{Temperature:0}},{dashboard_data:{Temperature:0}},{dashboard_data:{Temperature:0}},{dashboard_data:{Temperature:0}}]}]
        }
        this.fetchWeather = this.fetchWeather.bind(this);
        this.fetchNetatmo = this.fetchNetatmo.bind(this);
    }
    componentWillMount(){
        let city = 'Montreal';
        this.fetchWeather(city);
        this.fetchNetatmo();
    }
    /*componentWillReceiveProps(nextProps) {
        let city = queryString.parse(nextProps.location.search).city;
        this.fetchWeather(city);
    }*/
    fetchNetatmo(){
        netatmo.environmental().then(function(res) {
            this.setState(function(){
                return{env: res}
            });
        }.bind(this));
    }
    fetchWeather(city){
        weather.weather(city).then(function(res) {
            this.setState(function(){
                return{weather: res}
            });
        }.bind(this));
        weather.forecast(city).then(function(res) {
            this.setState(function(){
                return{
                    forecast: res,
                    loading: false
                }
            });
        }.bind(this));
        console.log(this.state.loading);
    }

    render(){
        return(
    <Tiles fill={false}
      flush={false}>
      <Tile separator='top'
        align='start'
        basis='1/4'>
        <Header size='small'
          pad={{"horizontal": "small"}}>
          <Heading tag='h4'
            strong={true}
            margin='none'>
            Twitter mentions
          </Heading>
        </Header>
        <Box
         pad='small'>
         <Chart full={true}
         vertical={true}>
         <Base height='small'
           width='small' />
         <Layers>
           <Line values={[60, 66, 80, 82, 42, 70, 60, 55, 48, 68, 40, 89]}
             colorIndex='accent-1'
             smooth={true}
             activeIndex={11} />
           <HotSpots count={12}
             max={100}
             activeIndex={11}
             onActive={null} />
         </Layers>
         <Axis count={2}
           labels={[{"index": 0, "label": "2016"}, {"index": 1, "label": "2017"}]} />
       </Chart>
        </Box>
      </Tile>

      <Tile separator='top'
        align='start'
        basis='1/4'>
        <Header size='small'
          pad={{"horizontal": "small"}}>
          <Heading tag='h4'
            strong={true}
            margin='none'>
            Footfall
          </Heading>
        </Header>
        <Box pad='small'>
        
        <AnnotatedMeter legend={true}
          type='circle'
          max={58}
          series={[{"label": "Tenants", "value": 27, "colorIndex": "graph-1"}, {"label": "Visitors", "value": 31, "colorIndex": "graph-2"}]} />
        </Box>
      </Tile>

      <Tile separator='top'
      align='start'
      basis='1/4'>
      <Header size='small'
        pad={{"horizontal": "small"}}>
        <Heading tag='h4'
          strong={true}
          margin='none'>
          Weather
        </Heading>
      </Header>
      <Box pad='small'>
      
      <Box>
        
      <Meter type='circle'
      max={50}

      label={<Value value={Math.round(this.state.weather.main.temp)}
      units='&#8451;'
      size='small' />}
      value={Math.round(this.state.weather.main.temp)}
      colorIndex='graph-2'
      onActive={null} />
      <Box direction='row'
      justify='center'
      align='center'
      pad={{"between": "small"}}
      announce={true}
      responsive={false}>
    
      <Label
      size='small'>
          Current outdoor temp
      </Label>
      </Box>
      </Box>
      
      </Box>
      </Tile>

      <Tile separator='top'
        align='start'
        basis='1/4'>
        <Header size='small'
          pad={{"horizontal": "small"}}>
          <Heading tag='h4'
            strong={true}
            margin='none'>
            Environmental
          </Heading>
        </Header>
        <Box pad='small'>
        
        <Box>
          <Box direction='row'
            justify='between'
            align='center'
            pad={{"between": "small"}}
            announce={true}
            responsive={false}>
            <Label
            size='small'>
                Netatmo sensor data
            </Label>
          </Box>
          <Meter 
          max={50}
          series={[{"label": "Gen 7", "value": this.state.env[0].modules[0].dashboard_data.Temperature, "onClick": console.log('onClick'), "colorIndex": "graph-1"}, {"label": "Gen 8", "value": this.state.env[0].modules[1].dashboard_data.Temperature, "onClick": console.log('onClick'), "colorIndex": "graph-2"}, {"label": "Gen 9", "value": this.state.env[0].modules[2].dashboard_data.Temperature, "onClick": console.log('onClick'), "colorIndex": "graph-3"}, {"label": "Gen 10", "value": this.state.env[0].modules[3].dashboard_data.Temperature, "onClick": console.log('onClick'), "colorIndex": "graph-4"}]}
            stacked={false}
            vertical={false}
            onActive={console.log('onactiveMeter')} />
            <Box direction='row'
            justify='between'
            pad={{"between": "small"}}
            responsive={false}>
            <Label size='small'>
              0 &#8451;
            </Label>
            <Label size='small'>
              50 &#8451;
            </Label>
          </Box>
            
        </Box>
        </Box>
      </Tile>

      <Tile separator='top'
        align='start'
        basis='1/4'>
        <Header size='small'
          pad={{"horizontal": "small"}}>
          <Heading tag='h4'
            strong={true}
            margin='none'>
            Occupancy
          </Heading>
        </Header>
        <Distribution series={[{"label": "Leased", "value": 40, "colorIndex": "graph-1"}, {"label": "Vacant", "value": 15, "colorIndex": "accent-1"}, {"label": "Shared space", "value": 20, "colorIndex": "graph-3"}, {"label": "Refurb", "value": 10, "colorIndex": "unknown"}]}
        full={false}
        size='small' />
      </Tile>
    </Tiles>
)}
}