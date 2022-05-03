import React from 'react';
import './FieldBuilder.css';
import FieldService from '../../apis/MockService';
import {Table} from "antd";

class FieldBuilder extends React.Component {
    // text = FieldService.getField(0);
    // constructor(props) {
    //     super(props);
    //     this.state = this.text
    // }

    state = FieldService.getField(0);
    submit(){
        console.log(FieldService.getField(0));
    }
    label = this.state.label;
    required = this.state.required;
    default = this.state.choices[0];
    // default = this.state.default;
    choices = this.state.choices;
  
    // createTable(){
    //     console.log(this.choices2);
    //     var sel = document.getElementById("choices2");
    //     var str = "";
    //     for(var i = 0; i<this.choices2.length;i++){
    //         str +='<option>'+this.choices2[i]+'</option>';
    //     }
        
    //     sel.innerHTML = str;
    //     console.log(str);
        
    // }
    

    // for(var i = 0; i<this.choices2.length;i++){
    //     str +='<option>'+this.choices2[i]+'</option>';
    // }

    inputChange(e){
        let val = e.nativeEvent.path[2].childNodes[0].innerText;
        document.getElementById("default").value=val;
        this.setState(()=>{
            this.state.default = val;
        });
        
    }


    remove(val){
        var index = this.choices.indexOf(val);
        console.log(index);
        if(index > -1){
            this.choices.splice(index,1);
        }
        
    }

    deleteChange(e){
        let val = e.nativeEvent.path[2].childNodes[0].innerText;
        this.remove(val);
        let str="";
            this.state.choices.map((item,key)=>{
                str += "<tr><th>"+item + "</th><td><button type=\"button\" onclick=\"{this.inputChange.bind(this)}\">Choose</button></td><td><button type=\"button\" onclick=\"{this.deleteChange.bind(this)}\">Delete</button></td></tr>"
                
            })
        
        document.getElementById("myTableBody").innerHTML = str;
        this.setState(()=>{
            this.state.choices = this.choices;
        });
        console.log(this.choices);
    }
    
    render(){
        
        return (
            <div> 
               
            <form>
            <label>Label</label> 
           <input id="label" defaultValue={this.label}></input><br/>
            <label>Type</label>
            <label>Multi-select</label> 
            <label><input type="checkbox" name="multi-select" value="true" defaultChecked={this.required}/>A Value is required</label><br/>
            <label>Default Value</label> 
           <input id="default" defaultValue={this.default}></input><br/>
           <label>Choices</label> <br/> 
           <table className='myTable'>
               <tbody id='myTableBody'>
                {
                    this.state.choices.map((item,key)=>{
                        return(
                            <tr>
                            <th>{item}</th>
                            <td><button type='button' onClick={this.inputChange.bind(this)}>Choose</button></td>
                            <td><button type='button' onClick={this.deleteChange.bind(this)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
               <br/>
           <label>Order
               <select>
                   <option value="A">A</option> 
                   <option value="B">B</option>
                   <option value="C">C</option>
               </select>
           </label> 
           <br/>
             <button type="button" onClick={this.submit.bind(this.submit)}>Save</button> 
             <button type="button" >concel</button> 
            </form> 
            </div>
       
      
        );
    }
    
  };
  
export default FieldBuilder;