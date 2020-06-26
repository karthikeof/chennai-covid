
import React, { Component } from 'react'
import './App.css';
import './index.css'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import * as d3 from "d3";
import { CSSTransition } from 'react-transition-group';

const columnHeader =["No","Zone_Name","Confirmed","Active","Recovered","Deaths"];

class Table extends Component {
  state = {
   data: [],
   confirmed:[],
 }
 componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.valueFromParent2 !== prevProps.valueFromParent2) {
  this.handleClick(16);
 }
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
  res.push(<th style={{border:"0px solid black",backgroundColor: "#ccffb3",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='Deaths') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#cccccc",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

}
else if(columnHeader[i]==='Zone_Name') {
  res.push(<th style={{border:"0px solid black",backgroundColor: "#b3b3ff",colour:"#000000",textAlign: "center",  padding: "5px"}} key={columnHeader[i]}>{columnHeader[i]}</th>)

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

    var flag=1;
    Object.keys(this.props.valueFromParent2).map(el => {
    // console.log('key', el);
    flag=0;
    //obj[el].map(sub_el => console.log(sub_el));
    })

    if(flag===1)
    {
      return (<div></div>)

    }



    return (
          

      <div style={{ width: '40%',  padding: "4px", fontFamily:"Bree Serif" ,color:'#333333', marginTop: "-2.7%",marginLeft:"2%"
      ,color: "#000000",fontFamily: "Saira", fontWeight: 'bold',fontSize:14
}}>
<div >
<div style={{fontSize:17,color:"#6666ff"}} ><h4>{this.props.valueFromParent[0].Zone==='Total'?'CHENNAI':this.props.valueFromParent[0].Zone} </h4></div>

</div>
<div className="rowC" style={{marginTop: "%"}} >
<Card style={{ width: '100%',backgroundColor: "#ffbeb3",padding: "8px", border: 'none',color: "#e62200",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div >Confirmed</div><div>{this.props.valueFromParent[0].value}</div></center>
</Card>
<Card style={{ width: '100%',backgroundColor: "#ccf2ff",padding: "8px" ,border: 'none',color: "#00ace6",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div>&nbsp;&nbsp;Active&nbsp;</div><div>{this.props.valueFromParent[0].active}</div></center>
</Card>
<Card style={{ width: '100%',backgroundColor: "#ddffcc",padding: "8px", border: 'none',color: "#408000",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div >Recovered</div><div>{this.props.valueFromParent[0].recovered}</div></center>
</Card>
<Card style={{ width: '100%',backgroundColor: "#d9d9d9",padding: "8px" ,border: 'none',color: "#666666",fontFamily: "Saira", fontWeight: 'bold'}}>
<center><div>&nbsp;&nbsp;Deaths&nbsp;&nbsp;&nbsp;</div><div>{this.props.valueFromParent[0].deaths}</div></center>
</Card>

</div>


 <table className="zui-table-highlight" style={{border:"0px solid black", marginTop: "3%"}}>
 <caption style={{ padding: "10px", fontSize:16,backgroundColor: "#ffffff"}}>Zone wise break down</caption>

         <thead>
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


export default Table
