
import React, { Component,useRef } from 'react'
import './App.css';
import './index.css'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import * as d3 from "d3";
import { CSSTransition } from 'react-transition-group';

const columnHeader =["No","Zone_Name","Confirmed","Active","Recovered","Deaths"];
var svg,rect;
var colourData= [
  '#cc99ff',
  '#cc99ff',
  '#cc99ff','#cc99ff','#cc99ff'];

class Table extends Component {
  state = {
   data: [],
   confirmed:[],
 }
 componentDidUpdate(prevProps) {
  if (this.props.valueFromParent2 !== prevProps.valueFromParent2) {
  this.handleClick(16);
 }
 
 }
 componentDidMount() {
  svg =d3.select(this.refs.BarGraph)
  .append("svg")
  .attr("width", 180)
  .attr("height", 120)
  .style("margin-left", 0)
  .attr("class", "x axis");   
 }

 generateHeader(){
       let res=[];
     for(var i =0; i < columnHeader.length; i++){
       if(columnHeader[i]==='Confirmed')
         res.push(<th style={{border:"0px solid black",backgroundColor: "#ffbeb3",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)
else if(columnHeader[i]==='Active') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#b3ecff",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='Recovered') {
  res.push(<th style={{border:"0px solid black",width:'70px', backgroundColor: "#ccffb3",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='Deaths') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#cccccc",width:'50px',colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='Zone_Name') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#b3b3ff",width:'100px',colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='No') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#d9d9d9",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}

     }
     return res;
   }

   handleClick = (e) => {
     this.props.functionCallFromParent1(e);
    console.log(e);
  };


  generateTableData1(){
    let res=[];

const  rows = this.props.valueFromParent2.map((row, index) => {
  //  console.log('Row HI'+index);

  if(index%2===0)
  {
    res.push(

        <tr  style={{backgroundColor: "#ffffff"}} key={row.id} onMouseEnter={() => this.handleClick(row.id)}>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.id}</td>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.Zone}</td>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.value}</td>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.active}</td>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.recovered}</td>
          <td style={{border:"0px solid black", textAlign: "center"}}>{row.deaths}</td>


        </tr>
      )
    }

    else {
      if(row.Zone!=='Total')
      {
        res.push(

            <tr style={{backgroundColor: "#e6e6e6"}} key={row.id} onMouseEnter={() => this.handleClick(row.id)}>
              <td style={{border:"0px solid black",  textAlign: "center"}}>{row.id}</td>
              <td style={{border:"0px solid black", textAlign: "center"}}>{row.Zone}</td>
              <td style={{border:"0px solid black", textAlign: "center"}}>{row.value}</td>
              <td style={{border:"0px solid black",  textAlign: "center"}}>{row.active}</td>
              <td style={{border:"0px solid black", textAlign: "center"}}>{row.recovered}</td>
              <td style={{border:"0px solid black",  textAlign: "center"}}>{row.deaths}</td>


            </tr>
          )

    }

    else {

      res.push(

          <tr style={{backgroundColor: "#e6e6e6"}} key={row.id} onMouseEnter={() => this.handleClick(row.id)}>
            <td style={{border:"0px solid black",backgroundColor: "#ffffff",  textAlign: "center"}}>{row.id1}</td>
            <td style={{border:"0px solid black", textAlign: "center"}}>{row.Zone}</td>
            <td style={{border:"0px solid black", textAlign: "center"}}>{row.value}</td>
            <td style={{border:"0px solid black", textAlign: "center"}}>{row.active}</td>
            <td style={{border:"0px solid black", textAlign: "center"}}>{row.recovered}</td>
            <td style={{border:"0px solid black",  textAlign: "center"}}>{row.deaths}</td>
          </tr>
        )

    }
  }
    })
return res;
  }
  render() {

    var flag=1,flag1='TBU',f=1;
    Object.keys(this.props.valueFromParent2).map(el => {
    // console.log('key', el);
    flag=0;
    Object.keys(this.props.valueFromParent6).map(el1=> {
      // console.log('key', el);
      Object.keys(this.props.valueFromParent).map(el2=> {
f=0;
      flag1=this.props.valueFromParent6[this.props.valueFromParent[0].id-1].ContainmentZone;
    })
      
      })
      
    //obj[el].map(sub_el => console.log(sub_el));
    })
    
 

    if(flag===1 )
    {
      return (
     

      <div style={{ width: '40%',  padding: "2px", fontFamily:"Bree Serif" ,color:'#333333', marginTop: "-2.7%",marginLeft:"2%"
      ,color: "#000000",fontFamily: "Saira", fontWeight: 'bold',fontSize:14
}}>
<div >
<div style={{fontSize:17,color:"#6666ff"}} ><h4>{} </h4></div>

</div>
<div className="rowC" style={{marginTop: "%"}} >
<Card style={{ marginTop:"2%",backgroundColor: "#ffffff",padding: "1px" ,border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<div style={{marginLeft:"1%"}}>Hi</div>

<div className="rowC" >
<Card style={{ width: '150%',height:'10%',marginTop:"0%",backgroundColor: "#ffffff",padding: "7px", border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div >Containment&nbsp;Zones    </div><div>{}</div></center>
</Card>

<Card style={{ width: '50%',height:'10%',marginTop:"2%",backgroundColor: "#ffffff",padding: "7px" ,border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div> Wards  </div><div>{}</div></center>
</Card>
</div>

</Card>
<Card style={{ width: '150%',height:'10%',marginTop:"2%",backgroundColor: "#ffffff",padding: "7px" ,border: 'none',color: "#ffffff",fontFamily: "Saira", fontWeight: 'bold'}}>
<div className="rowC" ><div style={{fontSize : 14,marginLeft: '0px',marginTop:'-8px'}}>NEW CASES</div><div style={{fontSize : 10.5, paddingLeft:15}}>09 JUL - 14 JUL</div></div>

<div ref='BarGraph'></div>
</Card>

</div>

 <table className="zui-table-highlight" style={{border:"0px solid black", marginTop: "3%"}}>
 <caption style={{ padding: "10px", fontSize:16,backgroundColor: "#ffffff"}}></caption>

         <thead>
             <tr style={{border:"1px solid black",color: "#000000"}}>
             {}
             </tr>
         </thead>
         <tbody style={{border:"1px solid black",  textAlign: "justify"}} >
                   
                     {this.generateTableData1()}

                 </tbody>
         </table>
      </div>

      
      )

    }
    else{
      console.log(this.props.valueFromParent4.length)

      var DailyData=[];
      //var id=parseInt(this.props.valueFromParent[0].id);
      var id1=this.props.valueFromParent[0].id >0 ?this.props.valueFromParent[0].id:0;
     var max=0;
        for(let i=this.props.valueFromParent4.length-1,j=0;j<=4;j++,i--)
        {
          console.log(this.props.valueFromParent[0].id);
          console.log(id1);

          DailyData.push({Date:this.props.valueFromParent4[i].date,NewCases:this.props.valueFromParent4[i].value[id1-1].value -this.props.valueFromParent4[i-1].value[id1-1].value});
          if(this.props.valueFromParent4[i].value[id1-1].value -this.props.valueFromParent4[i-1].value[id1-1].value>max)
          max=this.props.valueFromParent4[i].value[id1-1].value -this.props.valueFromParent4[i-1].value[id1-1].value;

        }
        console.log(DailyData);
        console.log(max);
        var data1 = [DailyData[4].NewCases,DailyData[3].NewCases,DailyData[2].NewCases,DailyData[1].NewCases,DailyData[0].NewCases  ];
      var data = [DailyData[4].NewCases/max *100 ,DailyData[3].NewCases/max *100 ,DailyData[2].NewCases/max *100 ,DailyData[1].NewCases/max *100,DailyData[0].NewCases/max *100   ];
        console.log(data1);
        var data2 = [d3.timeFormat("%b %d")(d3.timeParse("%d-%b-%y")(DailyData[4].Date)),d3.timeFormat("%b %d")(d3.timeParse("%d-%b-%y")(DailyData[3].Date)),d3.timeFormat("%b %d")(d3.timeParse("%d-%b-%y")(DailyData[2].Date)),d3.timeFormat("%b %d")(d3.timeParse("%d-%b-%y")(DailyData[1].Date)),d3.timeFormat("%b %d")(d3.timeParse("%d-%b-%y")(DailyData[0].Date )) ];

      //  d3.timeFormat("%d-%b-%y")
             
      svg//.select(".x.axis")
      .selectAll("rect").remove();
  var bar=    svg//.select(".x.axis")
      .selectAll("rect")    
      .data([DailyData[4].NewCases/max *100 ,DailyData[3].NewCases/max *100 ,DailyData[2].NewCases/max *100 ,DailyData[1].NewCases/max *100,DailyData[0].NewCases/max *100   ])
      .enter()
      .append("rect") 
      .attr("x", (d, i) => i * 35)
      .attr("y", (d, i) => 120- d)
      .attr("width", 30)
      .attr("height", (d, i) => d-30)
      .attr("fill", function (d,i){ 
        return colourData[i];
       })
       ;
       svg//.select(".x.axis")
       .selectAll("text").remove();
       svg.selectAll("text")
       .data(data1)
     .enter().append("text")
       .attr("font-size","11")
       .attr("fill",'#b366ff' )
       .attr("x", (d, i) => i * 38 -(i*3))
           .attr("y", (d, i) =>  115-data[i]<85?115-data[i]:85)
           .text((d) => d)


        //////////////////////

         svg
       .selectAll("text1").remove();
       svg.selectAll("text1")
       .data(data2)
     .enter().append("text")
       .attr("font-size","11")
       .attr("fill",'#b366ff' )
       .attr("x", (d, i) => i * 38 -(i*3))
           .attr("y", (d, i) =>  103)
           .text((d) => d)
        
         
     
    
    
    
    return (
          

      <div  style={{  padding: "2px", fontFamily:"Bree Serif" ,color:'#333333', marginTop: '-30px',marginLeft:"29px"
      ,color: "#000000",fontFamily: "Saira", fontWeight: 'bold',fontSize:14
}}>
<div >
<div style={{fontSize:17,color:"#6666ff"}} ><h4>{this.props.valueFromParent[0].Zone==='Total'?'CHENNAI':this.props.valueFromParent[0].Zone} </h4></div>

</div>
<div className="rowC" style={{marginTop: '-20px',marginLeft:'2px',width:'460px'}} >
<Card style={{ marginTop:'5px',backgroundColor: "#ffffff",padding: "0px" ,border: 'none',color: "#737373",fontFamily: "Saira", fontWeight: 'bold'}}>
<Card style={{ width: '226px',height:'50px',marginTop:"2px",backgroundColor: "#ffbeb3",padding: "7px", border: 'none',color: "#e62200",fontFamily: "Saira", fontWeight: 'bold'}}>

<center><div style={{marginLeft:'2px'}}>Confirmed Cases <div> {this.props.valueFromParent[0].value} </div> </div></center>
</Card>

<div className="rowC" style={{marginTop: '1px',padding: "0px" }}  >
<Card style={{ width: '70px',height:'50px',marginTop:'2px',backgroundColor: "#e6ecff",padding: "6px" ,border: 'none',color: "#668cff",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div>&nbsp;&nbsp;&nbsp;Wards&nbsp;&nbsp;</div><div>{this.props.valueFromParent[0].wards}</div></center>
</Card>
<Card style={{ width: '142px',marginLeft: '-6px',height:'50px',marginTop:"2px",backgroundColor: "#ffd699",padding: "6px", border: 'none',color: "#cc7a00",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div >Containment&nbsp;Zones  </div><div>{flag1}</div></center>
</Card>


</div>

</Card>

<Card style={{ width: '188px',height:'115px',marginTop:"7px",marginLeft: '-15px',backgroundColor: "#f2e6ff",padding: '7px' ,border: 'none',color: "#b366ff",fontFamily: "Saira", fontWeight: 'bold'}}>
<div className="rowC" ><div style={{fontSize : 13,marginLeft: '50px',marginTop:'-6px'}}>NEW CASES</div><div style={{fontSize : 10,marginLeft: '5px',marginTop:'-3px'}}></div></div>
<div style ={{marginTop:'-10px',padding: '7px'}}ref='BarGraph'></div>
</Card>

</div>


 <table className="zui-table-highlight" style={{border:"0px solid black", marginTop: '0px'}}>
 <caption style={{ padding: "6px", fontSize:16,backgroundColor: "#ffffff"}}>Zone wise break down</caption>

         <thead >
             <tr style={{border:"1px solid black",color: "#000000"}}>
             {this.generateHeader()}
             </tr>
         </thead>
         <tbody style={{border:"1px solid black",  textAlign: "justify"}} >
                   
                     {this.generateTableData1()}

                 </tbody>
         </table>
      </div>

    )
}
  }
}


export default Table
