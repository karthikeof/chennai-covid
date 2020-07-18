import React, { Component,useRef } from 'react'
import { ComposableMap, Geographies, Geography,ZoomableGroup,Marker} from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import './App.css';
import { UserProvider } from './UserContext'
import Charts from './Charts'
import * as d3 from "d3";
import { extent } from 'd3-array';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';



const Chennai_TOPO_JSON = require('./chennaiTopo.json');
const PROJECTION_CONFIG = {
  scale: 112790,

  center:[80.2167, 13.0439] // always in [East Latitude, North Longitude]
};


const DEFAULT_COLOR = '#EEE';
const geographyStyle = {
  default: {
    outline: 'none',
    border: '5px'
  },
  hover: {
    fill: '',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};


var x,y,svg,xAxis;

class App extends Component {

  state = {
   data: [],
   ZoneName: 'NA',
   name:'Chennai',
   tooltipContent:'',
   list: [20, 200, 600],
   list1:[{id: "TN", Zone: "THIRUVOTTIYUR", value: 127, deaths: 0, recovered: 14},
 {id: "KL", Zone: "MANALI", value: 75, deaths: 0, recovered: 5}]

//this.colorScale.bind(this);
 }


  COLOR_RANGE = [
    '#ffa899',
    '#ff674d',
    '#ff3c1a',
    '#b31b00',
    '#660f00'
  ];

     childFunction=(e)=>{

          this.props.functionCallFromParent(e);

        }
   onMouseEnter = (geo, current = { value: 'NA' }) => {
   
    return () => {
      this.setState(
        {
        tooltipContent:('Zone '+geo.properties.ZONE_NO+'- '+geo.properties.ZONE_NAME+ ', '+geo.properties.Name+'- '+geo.properties.wardName),
        ZoneName:'NA'
        });
      var keys = [];
      
      if(current.value==='NA')
      current = this.props.valueFromParent1.find(s => s.Zone === 'Total');

      console.log(current);
      keys.push(current);
      this.childFunction(keys);

    
  };
  };

   onMouseLeave = () => {

     this.setState(
{
tooltipContent:(undefined),
ZoneName:'NA'
});
  };


  /*constructor(props, context) {
      super(props, context);
       this.state = {
             ZoneName: ''
        };
     }

     componentWillReceiveProps(){ //this is called to before render method
      this.setState({
         ZoneName:this.props.valueFromParent3
       })
     }*

     

/*   componentDidMount() {
    this.colorScale = this.colorScale.bind(this);

    const url =
      'https://chennaicorona-96dcb.firebaseio.com/data.json'
    fetch(url)
      .then(result => result.json())
      .then(result => {
        var d1='';
        Object.keys(result.ZonesDaily)
        .forEach(function(key) {
      d1=result.ZonesDaily[key];

      })
      console.log('rr');
      var res=List(d1);
      console.log(res);
      console.log('end');
      this.setState(
       { data: this.props.valueFromParent1,
         name: 'Chennai',
         list1:res
       }
      );
      console.log('rrm');
      console.log(this.state.list1);
      console.log('rrj');
      console.log(this.state.data);
      this.colorScale = scaleQuantile()
         .domain(this.state.data.map(d =>d.value))
         .range(this.COLOR_RANGE);
         console.log(this.props.valueFromParent);
         this.forceUpdate();

    })


  }



   React.useEffect(() => {
 fetch('https://chennaicorona-96dcb.firebaseio.com/data.json')
   .then(res => res.json())
   .then(d => {
    /*  console.log(d.data.total);
    setConfirmed(d.data.total.Confirmed)
     setdeaths(d.data.total.deaths)
     setrecovered(d.data.total.recovered)
     setactive(d.data.total.active)
     setname('India')
     setTs(d.data.lastRefreshed)
     setConfirmedI(d.data.total.confirmed)
     setdeathsI(d.data.total.deaths)
     setrecoveredI(d.data.total.recovered)
     setactiveI(d.data.total.active)*/
    /* this.state.name('Chennai')
     var d1='';
     Object.keys(d.ZonesDaily).forEach(function(key) {
   d1=d.ZonesDaily[key];
 });

setData(List(d1));

   });
}, []);*/


componentDidMount() {
  svg=d3.select(this.refs.colourscale).append("svg")
  .attr("height", 30)
  .append("g")
  .attr("font-family", "Saira")
  .attr("font-size","10.5")
  .attr("class", "x axis")
  
  ;
  svg.append("text")
    
    .text("Population density");
    document.addEventListener('click', this.handleClickOutside, true);

}
handleClickOutside = event => {

      console.log('Heelo');
  
}
render()
{
  console.log('APP render'+this.props.valueFromParent3);

  var flag=1,max=0;
  Object.keys(this.props.valueFromParent1).map(el => {
  flag=0;
  if(this.props.valueFromParent1[el].value>max && el<15)
max=this.props.valueFromParent1[el].value;
console.log(max);
  //obj[el].map(sub_el => console.log(sub_el));
  })
 
  
//d3.select("g").call(xAxis);
  if(flag===1)
  {
    return (
      <div style={{ marginLeft: '-2%', marginTop: '1%'}}>
      <ReactTooltip  > {this.state.tooltipContent}</ReactTooltip>


      <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={0}
          height={0}
          data-tip=""
        >
  
          <Geographies geography={Chennai_TOPO_JSON}>
            {({ geographies }) =>
              geographies
              .map(geo => {
               // this.childFunction(keysT);
                const current = this.props.valueFromParent1.find(s => s.Zone !== geo.properties.ZONE_NAME);
               
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke={geo.properties.ZONE_NO === this.props.valueFromParent3? "#000000":"#000000" }
                    strokeWidth={geo.properties.ZONE_NO === this.props.valueFromParent3? 1:1}
                   fill={current ? this.colorScale(current.value) : "#fff"}
                    //fill="#660f00"
                    style={geographyStyle}
                    onMouseEnter=
                    {
                    //
                      this.onMouseEnter(geo, current)
                    }
                    onMouseLeave={this.onMouseLeave}
                  />
                );
              })
  
            }
          </Geographies>
   </ComposableMap>
        
 <div ref='colourscale' style={{ marginLeft: '20%'}} >
 </div>

        
      </div>
       
      )

  }
  else
  {
   
var inc=max/5;
console.log(max+'max'+inc);
var data = [];
for(var i=1;i<=5;i++)
{
data.push(i*inc);
}

var threshold = d3.scaleThreshold()
.domain(data)
.range([
    '#ffa899',
    '#ff674d',
    '#ff3c1a',
    '#b31b00',
    '#660f00'
  ]);

x = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([0, 200]);

xAxis = d3.axisBottom(x)
  .tickSize(13)
  .tickValues(threshold.domain())
  .tickFormat(function(d) { return d < 1000 ? d3.format(".2s")(d) : d3.format(".2s")(d); })
  ;
   // svg=d3.select(this.refs.colourscale).append("svg").append("g");
    svg.call(xAxis)
    .attr("font-family", "Saira")
            .attr("font-size","12")
            .attr("font-weight","bold")
    .select(".domain")
    .remove();
    svg.selectAll("rect")
    .data(threshold.range().map(function(color) {
      var d = threshold.invertExtent(color);
      if (d[0] == null) d[0] = x.domain()[0];
      if (d[1] == null) d[1] = x.domain()[1];
      return d;
    }))
    .enter().insert("rect", ".tick")
      .attr("height", 8)
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); })
      .attr("fill", function(d) { return threshold(d[0]); })

      ;
   
     
  }


  this.colorScale = d3.scaleThreshold()
     .domain(data)
     .range(this.COLOR_RANGE);


 
     
  return (

    <div style={{ marginLeft: '-30px', marginTop: '-2px'}}>
      
    <ReactTooltip id='test'>{this.state.tooltipContent}</ReactTooltip>
    <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={520}
        height={850}
        data-tip=""
      >

        <Geographies geography={Chennai_TOPO_JSON}>
          {({ geographies }) =>
            geographies
            //.filter(d => d.properties.ZONE_NAME === "SOZHINGANALLUR")
            .map(geo => {
             // this.childFunction(keysT);
              const current = this.props.valueFromParent1.find(s => s.Zone === geo.properties.ZONE_NAME);
             
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke={geo.properties.ZONE_NO === this.props.valueFromParent3? "#ffe6e6":"#000000" }
                  strokeWidth={geo.properties.ZONE_NO === this.props.valueFromParent3? 1:1}
                 fill={current ? this.colorScale(current.value) : "#fff"}
                  //fill="#660f00"
                  style={geographyStyle}
                  onMouseEnter=
                  {
                  //
                    this.onMouseEnter(geo, current)
                  }
                  onMouseLeave={this.onMouseLeave}
                />
              );
            })

          }
        </Geographies>
 </ComposableMap>
      
 <div ref='colourscale' style={{ marginLeft: '95px', marginTop: '-10px'}} >
 </div>

    </div>
   
  )
  
}
}


export default App;
