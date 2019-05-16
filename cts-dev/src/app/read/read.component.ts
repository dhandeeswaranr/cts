import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  selectedFile:any;
  fileReader:FileReader;
  fileRawData:any;
  rawDataLevelOneSplit:any;
  rawDataLevelOneArray:any;
  rawDataLevelTwoArray:any;
  fileInnerData:any;
  noData:boolean;
  filterBox:boolean = false;

  constructor() { }

  ngOnInit(){
  }

  selectFile(file){
        if(file){
          this.filterBox = true;
        }
          this.selectedFile = file[0]
          this.fileReader = new FileReader();
          this.fileReader.readAsText(this.selectedFile)
          this.fileReader.onload = (res) => {
          this.fileRawData = this.fileReader.result;
      }
      setTimeout( () =>{
        this.rawDataLevelOneSplit = this.fileRawData.split(/\r\n|\n/);
        this.rawDataLevelOneArray= this.rawDataLevelOneSplit.map((res,r) => { return res})
        this.rawDataLevelOneArray.shift();
        this.rawDataLevelTwoArray= this.rawDataLevelOneArray.map((acc,i) => acc.split(","))
        this.filter('')
      }, 1000)
  }
  filter(filterData:any){
     this.fileInnerData = this.rawDataLevelTwoArray.filter( (count) => {
        if(count[2] == filterData)
        {
          console.log(this.rawDataLevelTwoArray)
          return count;

        }
        else if(filterData == '' || filterData ==  null)
        {
          return count;
        }
    });
        if(this.fileInnerData == ""){
          this.noData = true;
        }
        else{
          this.noData = false;
        }
  }
}
