
import React,{ useEffect, useRef ,Component } from 'react';
import './App.css';
import './index.css';

import { extent } from 'd3-array';
import { line, curveMonotoneX,curveCatmullRom,curveLinear,curveStepBefore } from 'd3-shape';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

import * as d3 from "d3";
  var svg,svg1,svg2,paths,paths1,paths2,x,y,margin,width,height,x1,y1,x2,y2;

class Charts extends Component {
  
  constructor(props) {
    super(props);

    this.state 
   = {

           data1:[

           ],
           Confirmedvalue:'' ,
           ConfirmedvalueDate:'',
           Activevalue:'' ,
           ActivevalueDate:'',
           Recoveredvalue:'' ,
           RecoveredvalueDate:'',
           ZoneName:'Chennai'
       }


      }
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.valueFromParent3 !== prevProps.valueFromParent3) {
         console.log( Object.keys(this.props.valueFromParent2).length);
         let valu=Object.keys(this.props.valueFromParent2).length;
         if(valu>1)
         {
         // console.log(parseInt(valu)); 
        console.log(this.props.valueFromParent2[valu-1].date);
        console.log(this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].value);

        this.setState(
          {
            
            ConfirmedvalueDate: '('+(this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].value -this.props.valueFromParent2[valu-2].value[this.props.valueFromParent3-1].value)+') '+ this.props.valueFromParent2[valu-1].date ,
            Confirmedvalue:this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].value,
            
           ActiveDate:'('+(this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].active -this.props.valueFromParent2[valu-2].value[this.props.valueFromParent3-1].active)+') '+this.props.valueFromParent2[valu-1].date ,
           Activevalue:this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].active,

            RecoveredDate:'('+(this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].recovered -this.props.valueFromParent2[valu-2].value[this.props.valueFromParent3-1].recovered)+') '+this.props.valueFromParent2[valu-1].date ,
            Recoveredvalue:this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].recovered,

            ZoneName:this.props.valueFromParent2[valu-1].value[this.props.valueFromParent3-1].Zone
          }
        )
         }

        }
      }


   componentDidMount() {
     
     this.drawChart = this.drawChart.bind(this);
     /*var arr=[];

     const url =
       'https://chennaicorona-96dcb.firebaseio.com/data.json'
     fetch(url)
       .then(result => result.json())
       .then(result => {
         var d1='';
         Object.keys(result.ZonesDaily).forEach(function(key) {
       d1=result.ZonesDaily[key];
      //console.log(d3.timeFormat("%d-%b-%y")	(new Date(key*1000)),d1[15].Hospitalized);
      var parseTime = d3.timeParse("%d-%b-%y");

      arr.push({date:d3.timeFormat("%d-%b-%y")(new Date(key*1000)),close:d1[15].Recovered+d1[15].Deceased+d1[15].Hospitalized});


       })

       this.setState(
        { data1: arr}

       );
       console.log(this.state.data1)
       //this.forceUpdate();*/

       this.drawChart();

    // })

   }


 drawChart() {

     //var parseTime = d3.timeFormat("%x");
     var parseTime = d3.timeParse("%d-%b-%y");
console.log('drawing');
// X scale
//console.log(this.props.valueFromParent2);


 //.domain([new Date('14-Apr-20'), new Date('29-May-20')])//Need to be changed

/*.domain(d3.extent(this.props.valueFromParent2, function(d) {
console.log(new Date(d.date));
  return new Date(d.date); }))*/

//Y scale
 //y.range([height, -5]);


//Defining svg for Graph 1 - Confirmed
svg = d3.select(this.refs.cardb).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
// Parsing date to correct format
     paths= svg.append("path")
     .attr("class", "line")
     paths.transition()
    .duration(1000)

    svg
    .append("g")
        .attr("class", "x axis")
        .attr("stroke-width","1.25")
        .attr("transform", "translate(-10," + height + ")")

        svg.append("g")
            .attr("class", "y axis")
            .attr("stroke-width","1.25")


            svg1 = d3.select(this.refs.cardA).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                      "translate(" + margin.left + "," + margin.top + ")");


                      paths1= svg1.append("path")
                      .attr("class", "line")
                      
                      paths1.transition()
                     .duration(1000)

                     svg1
                     .append("g")
                         .attr("class", "x axis1")
                         .attr("stroke-width","1.25")
                         .attr("transform", "translate(-10," + height + ")")

                         svg1.append("g")
                             .attr("class", "y axis1")
                             .attr("stroke-width","1.25")

                             ////////////*****************/////////////
                             svg2 = d3.select(this.refs.cardC).append("svg")
                             .attr("width", width + margin.left + margin.right)
                             .attr("height", height + margin.top + margin.bottom)
                             .append("g")
                             .attr("transform",
                                   "translate(" + margin.left + "," + margin.top + ")");
             
             
                                   paths2= svg2.append("path")
                                   .attr("class", "line")
                                   paths2.transition()
                                  .duration(1000)
             
                                  svg2
                                  .append("g")
                                      .attr("class", "x axis2")
                                      .attr("stroke-width","1.25")
                                      .attr("transform", "translate(-10," + height + ")")
             
                                      svg2.append("g")
                                          .attr("class", "y axis2")
                                          .attr("stroke-width","1.25")
                             






 }
 handleClick = (d,vall,newCount) => {
 
  console.log('this is:', d);
  //this.props.valueFromParent2

  this.setState(currentState => {
    return { Confirmedvalue:  d.value[vall].value,
      ConfirmedvalueDate:'('+(d.value[vall].value-newCount)+') '+d.date
    };
  });
}

handleClick1 = (d,vall,newCount) => {
 
  console.log('this is:', d.value[vall].active);

  this.setState(currentState => {
    return { 
      Activevalue:  d.value[vall].active,
      ActiveDate:'('+(d.value[vall].active-newCount)+') '+d.date
    };
  });
}
handleClick2 = (d,vall,newCount) => {
 
  console.log('this is:', d.value[vall].recovered);

  this.setState(currentState => {
    return {
       Recoveredvalue:  d.value[vall].recovered,
     RecoveredDate:'('+(d.value[vall].recovered-newCount)+') '+d.date
    };
  });
}

 drawChart1(max)
 {

   console.log('Hi' +max)
   this.setState(currentState => {
    return { Confirmedvalue:  max
        };
  });
 }



 render() {
   margin = {top: 20, right: 130, bottom: 32, left: 50};
    width = 570 - margin.left - margin.right;
    height = 175 - margin.top - margin.bottom;
   console.log('chart render a'+this.props.valueFromParent3);
   console.log(this.props.valueFromParent3);
  //  vall=0;
    var vall=15;
console.log(this.props.valueFromParent3);
if(this.props.valueFromParent3>-1)
{

  if(this.props.valueFromParent3===17)
  {
   vall=15;
  }

  else
  {
  vall=this.props.valueFromParent3;
  vall--;
  }
  //console.log('greater');
}
   var flag=1,flag1=1;
   Object.keys(this.props.valueFromParent2).map(el => {
   //console.log('key', this.props.valueFromParent2[el]);
   flag=0;
   flag1=0;
   //obj[el].map(sub_el => console.log(sub_el));
})

var counter=0,max1=0,max2=0,max3=0,Confirmedvalue=0;
x = d3
 .scaleTime().domain(d3.extent(this.props.valueFromParent2, function(d) {
++counter;
//console.log();
  return new Date(d3.timeParse("%d-%b-%y")(d.date)); }))//Need to be changed
  y = d3.scaleLinear().domain(d3.extent(this.props.valueFromParent2, function(d) {
   //  console.log(d.value[vall]);
   if(d.value[vall].value>max1)
   {
max1=d.value[vall].value
   }
   return d.value[vall].value; }))
   ;

   x.range([10, 450])
   y.range([height, -5]);


   x1 = d3
    .scaleTime().domain(d3.extent(this.props.valueFromParent2, function(d) {
   //console.log((d.date));
     return new Date(d3.timeParse("%d-%b-%y")(d.date)); }))//Need to be changed
     y1 = d3.scaleLinear().domain(d3.extent(this.props.valueFromParent2, function(d) {
      //  console.log(d.value[vall]);
      if(d.value[vall].active>max2)
   {
max2=d.value[vall].active
   }
      return d.value[vall].active; }))
      ;

      x1.range([10, 450])
      y1.range([height, -5]);



   x2 = d3
   .scaleTime().domain(d3.extent(this.props.valueFromParent2, function(d) {
  //console.log((d.date));
    return new Date(d3.timeParse("%d-%b-%y")(d.date)); }))//Need to be changed
   y2 = d3.scaleLinear().domain(d3.extent(this.props.valueFromParent2, function(d) {
     //  console.log(d.value[vall]);
     if(d.value[vall].recovered>max3)
   {
max3=d.value[vall].recovered
   }

     return d.value[vall].recovered;
     }))
     ;
     //y2 = d3.scaleLinear().domain([2000,4000,6000,15000]);
     x2.range([10, 450])
     y2.range([height, -5]);




if (flag===0) {


  console.log('Yes props');
//svg.selectAll('lines').remove();
  paths
 .datum(this.props.valueFromParent2)
 .attr("class", "line")
 paths.transition()
.duration(0)
 .attr("d", d3.line()
 .curve( curveCatmullRom)
 .x(function(d) {
   //console.log('Hi1');
   return x(d3.timeParse("%d-%b-%y")(d.date));  })
 .y(function(d) {

   return y(d.value[vall].value); })
          );
          console.log('drawing dots');

          d3.selectAll("circle")

        .remove()
//var min=0;
      var  dots=  svg.selectAll("circle")
    .data(this.props.valueFromParent2)
    .enter()
    .append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling

    .attr("cx", function(d) {
       return x(d3.timeParse("%d-%b-%y")(d.date)) })
    .attr("cy", function(d) {
//console.log(d.value[vall].value);
//console.log(d.value[vall].value-min);

      return y(d.value[vall].value) 

    })
    .attr("r", 2.9);

    dots.transition()
    .duration(1000)


    dots.on("mouseover",  function() {
      d3.select(this).attr("r", 5.5);

 }) 
      .on("mouseout", function() {
         d3.select(this).attr("r", 2.9);

    }).on("mousemove",  (d,i) => {
     if(i<1)
      this.handleClick(d,vall,0); // my react method
      else
      this.handleClick(d,vall,this.props.valueFromParent2[i-1].value[vall].value); // my react method

 })
    

    ;



console.log('counter'+counter)

    svg.select(".x.axis")
      .call(d3.axisBottom(x)
      .tickSizeOuter(0)

          .ticks(d3.timeDay.every(counter/3))

          .tickFormat(function(d, i) {
              return  d3.timeFormat("%d  %b %y")(d)
            }))
            .attr("font-family", "Saira")
            .attr("font-size","10.5")
            .attr("font-weight","bold")


            //.attr("class", "axis")
            //

            svg.select(".y.axis")
                .call(d3.axisLeft(y)
                .tickValues(d3.range(max1/6, max1 , max1/6))
                .tickSizeOuter(0)
              .tickFormat(d3.format(".2s"))

              //.tickSize(2)
            )
            .attr("font-size","10.5")
            .attr("font-weight","bold")
            .attr("font-family", "Saira")


            ;

//////////////********************/************

        paths1
           .datum(this.props.valueFromParent2)
           .attr("class", "lineA")
           paths1.transition()
          .duration(0)
           .attr("d", d3.line()
           .curve( curveCatmullRom)
           .x(function(d) {
             return x1(d3.timeParse("%d-%b-%y")(d.date));  })
           .y(function(d) {

             return y1(d.value[vall].active);
             })
                    );
                    console.log('drawing dots1');


                var  dots1=  svg1.selectAll("circle")
              .data(this.props.valueFromParent2)
              .enter()
              .append("circle") // Uses the enter().append() method
              .attr("class", "dotA") // Assign a class for styling

              .attr("cx", function(d) {
                 return x1(d3.timeParse("%d-%b-%y")(d.date)) })
              .attr("cy", function(d) {
          //console.log(d.value[vall].value);
                return y1(d.value[vall].active) })
              .attr("r", 2.9);

              dots1.transition()
              .duration(1000)


              dots1.on("mouseover", function(d) {
                //  console.log('mouse');
        
              d3.select(this)
          .attr("r", 5.5);
                 })
                .on("mouseout", function() {
                   d3.select(this).attr("r", 2.9);

              }).on("mousemove",  (d,i) => {
                if(i<1)
                this.handleClick1(d,vall,0); // my react method
                else
                this.handleClick1(d,vall,this.props.valueFromParent2[i-1].value[vall].active); // my react method
           })

              ;





              svg1.select(".x.axis1")
                .call(d3.axisBottom(x1)
                .tickSizeOuter(0)

                    .ticks(d3.timeDay.every(counter/3))

                    .tickFormat(function(d, i) {
                        return  d3.timeFormat("%d  %b %y")(d)
                      }))
                      .attr("font-family", "Saira")
                      .attr("font-size","10.5")
                      .attr("font-weight","bold")


                      //.attr("class", "axis")
                      //

                      svg1.select(".y.axis1")
                          .call(d3.axisLeft(y1)
                          .tickValues(d3.range(max2/6, max2 , max2/6))

                          .tickSizeOuter(0)
                        .tickFormat(d3.format(".2s"))

                        //.tickSize(2)
                      )
                      .attr("font-size","10.5")
                      .attr("font-weight","bold")
                      .attr("font-family", "Saira")


                      ;

            //////////////////*******************///////////////

          paths2
               .datum(this.props.valueFromParent2)
               .attr("class", "lineB")
               paths2.transition()
              .duration(0)
               .attr("d", d3.line()
               .curve( curveCatmullRom)
               .x(function(d) {
                 return x2(d3.timeParse("%d-%b-%y")(d.date));  })
               .y(function(d) {

                 return y2(d.value[vall].recovered); })
                        );
                        console.log('drawing dots1');


                    var  dots2=  svg2.selectAll("circle")
                  .data(this.props.valueFromParent2)
                  .enter()
                  .append("circle") // Uses the enter().append() method
                  .attr("class", "dotB") // Assign a class for styling

                  .attr("cx", function(d) {
                     return x2(d3.timeParse("%d-%b-%y")(d.date)) })
                  .attr("cy", function(d) {
              //console.log(d.value[vall].value);
                    return y2(d.value[vall].recovered) })
                  .attr("r", 2.9);

                  dots2.transition()
                  .duration(1000)


                  dots2.on("mouseover", function(d) {
                     console.log(d.date);
                  d3.select(this)
              .attr("r", 5.5);
                     })
                    .on("mouseout", function() {
                       d3.select(this).attr("r", 2.9);

                  }).on("mousemove",  (d,i) => {
                    if(i<1)
                    this.handleClick2(d,vall,0); // my react method
                    else
     
                    this.handleClick2(d,vall,this.props.valueFromParent2[i-1].value[vall].recovered); // my react method
               });
                  svg2.select(".x.axis2")
                    .call(d3.axisBottom(x2)
                    .tickSizeOuter(0)

                        .ticks(d3.timeDay.every(counter/3))

                        .tickFormat(function(d, i) {
                            return  d3.timeFormat("%d  %b %y")(d)
                          }))
                          .attr("font-family", "Saira")
                          .attr("font-size","10.5")
                          .attr("font-weight","bold")
                          svg2.select(".y.axis2")
                              .call(d3.axisLeft(y2)
                              .tickValues(d3.range(max3/6, max3 , max3/6))
                              .tickSizeOuter(0)
                            .tickFormat(d3.format(".2s"))
                            //.tickSize(2)
                          )
                          .attr("font-size","10.5")
                          .attr("font-weight","bold")
                          .attr("font-family", "Saira");

                          //////////**************************** */

                          



}
else {

//  return (<div></div>)
return (
<div ref='chart' style={{ width: '5%',marginTop: "1%",
border: "1px"}}>
<div >
<div style={{fontSize:17,color:"#ffffff",height :'10%'}} ><h4>{this.state.ZoneName} </h4></div>

</div>

<Card  style={{ width: '100%',marginTop: "-17px%", height :'30%',backgroundColor: "#ffffff",padding: "2px", border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<div ref='cardb'><div className="rowC" ><div style={{paddingLeft: 70}}>Confirmed cases</div><div style={{paddingLeft: 50,fontSize : 15,textAlign:'right'}}>4000</div><div style={{float: 'right',paddingTop:5,fontSize : 10}}> 18 Apr 20</div></div></div>
     </Card>
     <Card  style={{ width: '780%',marginTop: "10%", height :'30%',backgroundColor: "#ffffff",padding: "2px", border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
     <div ref='cardA'><div className="rowC" ><div style={{fontSize : 17, paddingLeft:5}}>Active cases</div><div style={{alignContent: 'center',fontSize : 17,}}> &nbsp; { this.state.Activevalue}</div><div style={{paddingLeft: 3,paddingTop:4.31,fontSize : 12}}> { this.state.ActiveDate}</div></div></div>
      </Card>
<Card  style={{ width: '780%',marginTop: "15%", height :'28.5%',backgroundColor: "#ffffff",padding: "2px", border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<div ref='cardC'><div className="rowC" ><div style={{fontSize : 17, paddingLeft:5}}>Recovered cases</div><div style={{alignContent: 'center',fontSize : 17,}}> &nbsp; { this.state.Recoveredvalue}</div><div style={{paddingLeft: 3,paddingTop:4.31,fontSize : 12}}> { this.state.RecoveredDate}</div></div></div>
</Card>
</div>
)
}
console.log('size'+window.innerWidth);
      //   this.drawChart1();
      return (
       
      <div ref='chart' style={{ width: '5%', marginLeft:"0px",   marginTop: "-27px",
      border: "0px",fontFamily: "Saira" }}>
<div >
<div style={{width: '530px',fontSize:17,color:"#6666ff",height :'0%'}} ><center><h4>{this.state.ZoneName==='Total'?'CHENNAI':this.state.ZoneName} </h4></center></div>

</div>

      <Card  style={{ width: '530px',marginTop: "-17px", height :'203px',backgroundColor: "#ffd4cc",padding: "2px", border: 'none',color: "#ff2600",fontFamily: "Saira", fontWeight: 'bold'}}>
     <div ref='cardb'><div className="rowC" ><div style={{fontSize : 17, paddingLeft:15}}>Confirmed cases</div><div style={{fontSize : 17}}> &nbsp; { this.state.Confirmedvalue}</div><div style={{paddingLeft: 3,paddingTop:4.31,fontSize : 12}}> { this.state.ConfirmedvalueDate}</div></div></div>
     
      </Card>
      <Card  style={{ width: '530px',marginTop: "10%", height :'203px',backgroundColor: "#ccf2ff",padding: "2px", border: 'none',color: "#0086b3",fontFamily: "Saira", fontWeight: 'bold'}}>
      <div ref='cardA'><div className="rowC" ><div style={{fontSize : 17, paddingLeft:15}}>Active cases</div><div style={{alignContent: 'center',fontSize : 17}}> &nbsp; { this.state.Activevalue}</div><div style={{paddingLeft: 3,paddingTop:4.31,fontSize : 12}}> { this.state.ActiveDate}</div></div></div>
      </Card>
      <Card  style={{ width: '530px',marginTop: "10%", height :'203px',backgroundColor: "#ddffcc",padding: "2px", border: 'none',color: "#408000",fontFamily: "Saira", fontWeight: 'bold'}}>
      <div ref='cardC'><div className="rowC" ><div style={{fontSize : 17, paddingLeft:15}}>Recovered cases</div><div style={{alignContent: 'center',fontSize : 17}}> &nbsp; { this.state.Recoveredvalue}</div><div style={{paddingLeft: 3,paddingTop:4.31,fontSize : 12}}> { this.state.RecoveredDate}</div></div></div>
      </Card>
      </div>
      )





 }
}
export default Charts
