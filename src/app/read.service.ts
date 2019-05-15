import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http:HttpClient) { }

  fileUrl='../../assets/csv/issues.csv';
  csvData: any[] = [];
  data:any;
  fileContent:any;
getCsvFile(file):Observable<any>{
 
  let fileData = file[0]
  const fileReader:FileReader = new FileReader();
  let self = this;
  fileReader.readAsText(fileData)
  fileReader.onload = (x) => {
    this.fileContent = fileReader.result
    console.log("a", this.fileContent)
    
  }
 
 
  return;
  
}



private extractData(res: Response) {

  let csvData = res['_body'] || '';
  let allTextLines = csvData.split(/\r\n|\n/);
  let headers = allTextLines[0].split(',');
  let lines = [];

  for ( let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
          let tarr = [];
          for ( let j = 0; j < headers.length; j++) {
              tarr.push(data[j]);
          }
          lines.push(tarr);
      }
  }
  this.csvData = lines;
}

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return errMsg;
}

}
