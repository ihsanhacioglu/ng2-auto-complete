import { Component } from '@angular/core';
import {AutoCompleteDirective} from "auto-complete.directive";
import {AutoCompleteComponent} from "auto-complete.component";


@Component({
  selector: 'my-app',
  template: `
    <!--  for component test only
    <h1> Autocomplete Component Test - Local Source </h1>
    component test with array of strings: {{arrayOfStrings | json}}<br/>
    <auto-complete [source]="arrayOfStrings" placeholder="enter text"></auto-complete>
    
    component test with array of id/values: {{arrayOfKeyValues | json}}<br/>
    <auto-complete [source]="arrayOfKeyValues" placeholder="enter text"></auto-complete>
    
    component test with array of key/names: {{arrayOfKeyVaues2 | json}}<br/>
    <auto-complete [source]="arrayOfKeyValues2"
      placeholder="enter text"
      value-property-name="key"
      display-property-name="name"></auto-complete>
    
    <h1> Autocomplete Component Test - Remote Source </h1>
    component test with remote source: {{googleGeoCode}}<br/>
    <auto-complete 
      placeholder="Enter Address"
      [source]="googleGeoCode" 
      display-property-name="formatted_address"
      path-to-data="results" min-chars="2" ></auto-complete>
      
    <hr />
    --> 
    
    <h1> Autocomplete Directive Test - Local Source </h1>
    component test with array of strings: {{arrayOfStrings | json}}<br/>
    <input jui-auto-complete 
      [(ngModel)]="model1"
      [source]="arrayOfStrings"
       placeholder="enter text"/>selected: {{model1 | json}}<br/><br/>
    
    component test with array of id/values: {{arrayOfKeyValues | json}}<br/>
    <input 
      jui-auto-complete
      [(ngModel)]="model2"
      [source]="arrayOfKeyValues" 
      placeholder="enter text"/> selected: {{model2 | json}}<br/><br/>
    
    component test with array of key/names: {{arrayOfKeyVaues2 | json}}<br/>
    <input auto-complete [source]="arrayOfKeyValues2"
      [(ngModel)]="model3"
      placeholder="enter text"
      value-property-name="key"
      display-property-name="name"/>selected: {{model3 | json}}<br/><br/>
      
    <h1> Autocomplete Directive Test - Remote Source </h1>
    component test with remote source: {{googleGeoCode}}<br/>
    <input  auto-complete
      [(ngModel)]="model4"
      placeholder="Enter Address(min. 2 chars)"
      [source]="googleGeoCode" 
      display-property-name="formatted_address"
      path-to-data="results"
      min-chars="2" />selected: {{model4 | json}}<br/><br/>
 `,
  
  directives: [AutoCompleteDirective, AutoCompleteComponent],
  styles: [`
    auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `]
})
export class AppComponent {

  public arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  public arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  public arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];
  
  public googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  public model1: any;
  public model2: any;
  public model3: any;
  public model4: any;
}
