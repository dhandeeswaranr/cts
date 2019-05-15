import { Component, OnInit } from '@angular/core';
import { ReadService } from '../read.service'
import { map } from 'rxjs/operators';
//import  { } from '../../assets/csv'
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  filterValue;

  selectedFile:any;
  fileReader:FileReader;
  fileData:any;
  fileView:any;
  headerColumn:any;
  headerColumnValue:any;
  csvData: any[] = [];
  constructor(private readService:ReadService) { }
  a:object;
  rowValue:any[];
  rowdata:any;

  rowData:any;
  rowheader:any;
  ngOnInit() {
    //this.readService.getCsvFile();
  }
 
 /* fileContent: any;
  chooseFile(file){
  let fileData = file[0]
  const fileReader = new FileReader();
  let self = this;
  fileReader.readAsText(fileData)
  fileReader.onload = (x) => {
    this.fileContent = fileReader.result
    console.log("a", this.fileContent)
  }
 

  }*/

  selectFile(file?){
    this.selectedFile = file[0]
    this.fileReader = new FileReader();
    this.fileReader.readAsText(this.selectedFile)
    this.fileReader.onload = (res) => {
    this.fileData = this.fileReader.result;
    }
   
 //  this.extractData(this.fileView);
 setTimeout( () =>{
  console.log(JSON.stringify(this.fileData))
  this.fileView = this.fileData.split(/\r\n|\n/);
 // this.fileView.split("\"")
 //let m = this.fileView;
 //console.log(m.replace(/"/g,''))
 
  console.log("splig", this.fileView.length)
  console.log("splig", this.fileView)
this.headerColumn= this.fileView.map((res,r) => { return res})

/*this.headerColumnValue = Array.from(this.headerColumn).reduce( (acc,curr,i):any => 
  acc
 // console.log(acc[i])

)*/

console.log("reduce", this.headerColumn[0])

for(let a=0; a<=this.headerColumn.length; a++){
 // this.rowValue = this.headerColumn[a].split(",")
  console.log("find",{...this.rowValue})

 // this.rowdata = [{...this.rowValue}]
//  let d = Array.from(this.headerColumn[a]).map((res,r) => {return res[r]})
  // console.log("das",d)
}
//this.rowheader = this.headerColumn.map((acc,i) => acc.split(","))
this.rowData= this.headerColumn.map((acc,i) => acc.split(","))
console.log("map", this.rowData)
//var a = this.headerColumn;
//var c= a.replace(/"/g,'')
//console.log(c)
//this.filter();
 }, 1000)
  
 

   
  }


  filter(filterData:number){
    console.log(filterData)
    this.rowData = this.rowData.filter( (count) => {
      if(count[2] == filterData){
        console.log(this.rowData)
       // this.selectFile();
        return count;
      }
    })
  }

  
}
