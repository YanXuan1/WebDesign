//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var myTable = document.getElementById("myTable");
var rownumber = myTable.rows;
document.getElementById("myTable").rows[0].children[8].hidden = true;
document.getElementById("myTable").rows[0].children[9].hidden = true;
for(var i = 0; i<rownumber.length ; i++){
  if(rownumber[i].className === "dropDownTextArea"){
    rownumber[i].hidden = true;
  }
  if(i != 0 && i%2 == 1){
    var tdk1 = document.createElement("td");
    tdk1.innerHTML = '';
    document.getElementById("myTable").rows[i].appendChild(tdk1);
    var tdk2 = document.createElement("td");
    tdk2.innerHTML = '';
    document.getElementById("myTable").rows[i].appendChild(tdk2);
    document.getElementById("myTable").rows[i].children[8].hidden = true;
    document.getElementById("myTable").rows[i].children[9].hidden = true;
  }
}

var button = document.getElementById("button");
button.disabled = true;
button.style.background = "gray";
button.style.border = "2px solid gray";


function expand(object){
  var index = object.parentElement.parentElement.rowIndex;
  if(document.getElementById("myTable").rows[index+1].hidden == false){
    document.getElementById("myTable").rows[index+1].hidden = true;
  }else{
    document.getElementById("myTable").rows[index+1].hidden = false;
  }
}

var count = 0;
function ifchosen(object){ 
  var index = object.parentElement.parentElement.rowIndex;  
  if(document.getElementById("myTable").rows[index].children[0].childNodes[0].checked == true){
    count = count + 1;
    document.getElementById("myTable").rows[index].bgColor = "yellow";
    button.disabled = false;
    button.style.background = "orange";
    button.style.border = "2px solid orange";

    document.getElementById("myTable").rows[0].children[8].hidden = false;
    document.getElementById("myTable").rows[0].children[9].hidden = false;

    document.getElementById("myTable").rows[index].children[8].innerHTML = '<button id=\"delete\" onclick=\"deleteWhole(this)\">Delete</button>';
    document.getElementById("myTable").rows[index].children[9].innerHTML = '<button id=\"edit\" onclick=\"editContent(this)\">Edit</button>';
    for(var i = 1; i<rownumber.length ; i++){
      if(i != 0 && i%2 == 1){
        document.getElementById("myTable").rows[i].children[8].hidden = false;
        document.getElementById("myTable").rows[i].children[9].hidden = false;
      }
    }
    
  }else{
    count -= 1;
    document.getElementById("myTable").rows[index].bgColor = "white";
    document.getElementById("myTable").rows[index].children[8].innerHTML = '';
    document.getElementById("myTable").rows[index].children[9].innerHTML = '';
    if(count == 0){     
      button.disabled = true;
      button.style.background = "gray";
      button.style.border = "2px solid gray";
      document.getElementById("myTable").rows[0].children[8].hidden = true;
      document.getElementById("myTable").rows[0].children[9].hidden = true;
      
      for(var i = 1; i<rownumber.length ; i++){
        if(i != 0 && i%2 == 1){
          document.getElementById("myTable").rows[i].children[8].hidden = true;
          document.getElementById("myTable").rows[i].children[9].hidden = true;
        }
      }
    }  
  }
}

function addElement(){
  if(rownumber.length > 15){
    alert("Added too many students!");
  }else{
    var id = 1;
    if(document.getElementById("myTable").rows[rownumber.length - 2] != null){
      var temp = document.getElementById("myTable").rows[rownumber.length  - 2].children[1].innerHTML;
      console.log(temp);
      id = parseInt(temp.charAt(temp.length-1)) + 1;
    }
    var number = Math.floor(Math.random()*100000);
    var trfirst = document.createElement("tr");
    trfirst.innerHTML = '\n\t\t\t<td><input type="checkbox" onclick="ifchosen(this)"><br><br><img src="down.png" width="25px" onclick="expand(this)"></td>\n\t\t\t<td>Student ' + id + '</td>\n\t\t\t<td>Teacher ' + id + '</td>\n\t\t\t<td>Approved</td>\n\t\t\t<td>Fall</td>\n\t\t\t<td>TA</td>\n\t\t\t<td>' + number + '</td>\n\t\t\t<td>100%</td>\n\t\t\t\x3C!-- <td><button id="delete" onclick="deleteWhole(this)">Delete</button></td> -->\n\t\t\t\x3C!-- <td></td> -->\n\t\t<td hidden=""></td><td hidden=""></td>';
    var trsecond = document.createElement("tr");
    trsecond.innerHTML = '<td colspan="8">\n\t\t\tAdvisor:<br><br>\n\t\t\tAward Details<br>\n\t\t\tSummer 1-2014(TA)<br>\n\t\t\tBudget Number: <br>\n\t\t\tTuition Number: <br>\n\t\t\tComments:<br><br><br>\n\t\t\tAward Status:<br><br><br>\n\t\t</td>';
    
    myTable.appendChild(trfirst);
    myTable.appendChild(trsecond);
    trsecond.hidden = true;
    alert("Added successfully (*^_^*)!");
  }
}


function deleteWhole(object){
  var index = object.parentElement.parentElement.rowIndex; 
  count = count - 1;
  document.getElementById("myTable").deleteRow(index+1);
  document.getElementById("myTable").deleteRow(index);
  if(count == 0){
    document.getElementById("myTable").rows[0].children[8].hidden = true;
    document.getElementById("myTable").rows[0].children[9].hidden = true;
    for(var i = 1; i<rownumber.length ; i++){
      if(i != 0 && i%2 == 1){
        document.getElementById("myTable").rows[i].children[8].hidden = true;
        document.getElementById("myTable").rows[i].children[9].hidden = true;
      }
    }
    button.disabled = true;
    button.style.background = "gray";
    button.style.border = "2px solid gray";
  }
  alert("Deleted successfully!");
}

function editContent(object){
  alert("Edit the details");
}