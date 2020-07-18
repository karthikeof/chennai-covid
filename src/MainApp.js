import React, {Component} from 'react';
import { Container,Grid } from '@material-ui/core';

import App from './App';
import Table from './Table';
import Charts from './Charts';
import * as d3 from "d3";
const Chennai_TOPO_JSON = require('./chennaiTopo.json');
var WardsCount=new Array(16);

class MainApp extends Component{
    constructor(props){
        super(props);
        this.state={
            value_key:'',
            value_key1:'',
            data:[{}],
            ContainmentZone:[{}],
            result:[],
            chartresult:[],
            zoneNum:17
        }
    }
    componentDidMount() {
      var arr1 = [];
      var ContainmentZoneArray=[];
      const url1 =
        'https://chennaicorona-96dcb.firebaseio.com/data.json'
      fetch(url1)
        .then(result => result.json())
        .then(result => {
          Object.keys(result)
          .forEach(function(key) {
     // console.log(result[key]);
      ContainmentZoneArray.push(result[key]);
        })
        })
console.log(ContainmentZoneArray);
      const url =
        'https://v2-api.sheety.co/be53bea9995480777df56e14adcfd93b/covid19Chennai/cases'
      fetch(url)
        .then(result => result.json())
        .then(result => {
          /*var d1='';
          Object.keys(result.ZonesDaily)
          .forEach(function(key) {
        d1=result.ZonesDaily[key];
        var res=List(d1);
        arr1.push({date:d3.timeFormat("%d-%b-%y")	(new Date(key*1000)), value:res})
        })
        console.log('rr');
        var res1=List(d1);
        this.setState(
         { result: res1,
           chartresult:arr1
         }
       );*/
       for(let i=0;i<16;i++)
       WardsCount[i]=0;
       for(let i=1;i<Chennai_TOPO_JSON.objects["Chennai-Wards-2011"].geometries.length;i++)
       {
         
        WardsCount[Chennai_TOPO_JSON.objects["Chennai-Wards-2011"].geometries[i].properties.ZONE_NO -1]++
        WardsCount[15]++;
       }
     
       var data=[];
var counter=0;
       Object.keys(result.cases)
       .forEach(function(key) {
if(key>29 && result.cases[key].zoneName!=='OTHER DISTRICT')
         {
         counter++;
          data.push(result.cases[key]);
         if(counter%15===0  )
         {

           var res=List(data);
           arr1.push({date:d3.timeFormat("%d-%b-%y")	(new Date(data[0].date)), value:res})

           //console.log(res);

           data=[];
         }
}
    // d1=result.cases[key];
     //console.log(result.cases[key]);

     })
       console.log('rr');
       console.log(Chennai_TOPO_JSON.objects["Chennai-Wards-2011"].geometries.length);
      
        console.log(arr1[arr1.length-1].value);
       // var j=0;
       
       // console.log(DailyData);
        console.log(arr1);
        var res1=arr1[arr1.length-1].value;
        var res2=res1[15];
        console.log(res1[15]);

        this.setState(
         { 
          ContainmentZone:ContainmentZoneArray,
           result: res1,
           chartresult:arr1,
           data:[res2],

         }
       );
        this.forceUpdate();

      }
)

    }
  /*  parentFunction=(data_from_child,data_from_child1,data_from_child2,data_from_child3,data_from_child4)=>{
  <Table valueFromParent={this.state.data}  valueFromParent2={this.state.result} />

        this.setState({value_key:data_from_child});
        this.setState({value_key1:data_from_child1});
        this.setState({value_key2:data_from_child2});
        this.setState({value_key3:data_from_child3});
        this.setState({value_key4:data_from_child4});*/
        parentFunction=(res)=>{
              this.setState(
                {
                  data:res,

                }
              );

    }
    parentFunction1=(res)=>{
          this.setState(
            {
              //data:res,
              zoneNum:res

            }
          );
          //console.log(this.state.data[0].Zone);

}
    render(){
      console.log('Main App render');

        return(
          <div style={{ backgroundColor: "#ffffff"}}>
          <div className="rowC" style={{fontFamily: "Saira", fontWeight: 'bold',backgroundColor: "#ffffff",color:"#404040",marginTop:"-20px",marginLeft:"30px",fontSize:18.5}}>
          <h4>COVID-19</h4>
          <h6 style={{marginTop:"31px",color:"#666666"}}>  &nbsp;Chennai</h6>

          </div>
          <div className="rowB" >
          <Table valueFromParent={this.state.data} valueFromParent4={this.state.chartresult} valueFromParent6={this.state.ContainmentZone}  valueFromParent2={this.state.result} functionCallFromParent1={this.parentFunction1.bind(this)} />
          <App valueFromParent1={this.state.result} functionCallFromParent={this.parentFunction.bind(this)} valueFromParent3={this.state.zoneNum}  />

            <Charts valueFromParent2={this.state.chartresult} valueFromParent3={this.state.zoneNum}/>
            </div >


            </div >

        );
    }
}
function List(d) {
var arr = [];
var ress=[];
var text = 'Hi';

d.map(ds => (

      arr.push([ds.zoneName,ds.confirmedCases,ds.deceased,ds.recovered,ds.hospitalized])

  ))
  //console.log(arr);
var Tvalue=0,Tdeaths=0,Trecovered=0,Tactive=0;
  for (var i = 0; i < arr.length; i++) {

Tvalue+=arr[i][1];
Tdeaths+=arr[i][2];
Trecovered+=arr[i][3];
Tactive+=arr[i][4];


  /*  if(arr[i][0]==='Royapuram')
    {
      ress.push({ id: 'MH', Zone: 'ROYAPURAM', value: arr[i][1]})

    }*/
     if(arr[i][0]==='THIRUVOTTIYUR')
    {
      ress.push({ id: 1, Zone: 'THIRUVOTTIYUR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[0]})

    }
    else if(arr[i][0]==='MANALI')
    {
      ress.push({ id: 2, Zone: 'MANALI', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[1]})

    }
    else if(arr[i][0]==='MADHAVARAM')
    {
      ress.push({ id: 3, Zone: 'MADHAVARAM', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[2]})

    }
    else if(arr[i][0]==='TONDIARPET')
    {
      ress.push({ id: 4, Zone: 'TONDIARPET', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[3]})

    }
    else if(arr[i][0]==='ROYAPURAM')
    {
      ress.push({ id: 5, Zone: 'ROYAPURAM', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[4]})

    }
    else if(arr[i][0]==='THIRU VI KA NAGAR')
    {
      ress.push({ id: 6, Zone: 'THIRU-VI-KA-NAGAR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[5]})

    }
    else if(arr[i][0]==='AMBATTUR')
    {
      ress.push({ id: 7, Zone: 'AMBATTUR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[6]})

    }
    else if(arr[i][0]==='ANNA NAGAR')
    {
      ress.push({ id: 8, Zone: 'ANNANAGAR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[7]})

    }
    else if(arr[i][0]==='TEYNAMPET')
    {
      ress.push({ id: 9, Zone: 'TEYNAMPET', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[8]})

    }
    else if(arr[i][0]==='KODAMBAKKAM')
    {
      ress.push({ id: 10, Zone: 'KODAMBAKKAM', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[9]})

    }
    else if(arr[i][0]==='VALASARAVAKKAM')
    {
      ress.push({ id: 11, Zone: 'VALASARAVAKKAM', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[10]})

    }
    else if(arr[i][0]==='ALANDUR')
    {
      ress.push({ id: 12, Zone: 'ALANDUR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[11]})

    }

    else if(arr[i][0]==='ADYAR')
       {
         ress.push({ id: 13, Zone: 'ADYAR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[12]})

       }
    else if(arr[i][0]==='PERUNGUDI')
    {
      ress.push({ id: 14, Zone: 'PERUNGUDI', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[13]})

    }
    
    else if(arr[i][0]==='SOZHINGANALLUR')
   {
     ress.push({ id: 15, Zone: 'SOZHINGANALLUR', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4],wards:WardsCount[14]})

   }

   /*else if(arr[i][0]==='Total')
      {
        ress.push({ id: 16, Zone: 'Total', value: arr[i][1],deaths :arr[i][2],recovered:arr[i][3],active:arr[i][4]})

      }*/



}

  if (true) {
    ress.push({ id: 16, Zone: 'Total', value: Tvalue,deaths :Tdeaths,recovered:Trecovered,active:Tactive,wards:WardsCount[15]});

console.log(ress)
      return ress;
  }


}
export default MainApp;
