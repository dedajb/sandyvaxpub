document.addEventListener('DOMContentLoaded', function() {
  
  
  document.getElementById("btnTdap").addEventListener("click",Tdap);
});


function Tdap(){  
  
  //create variable for entries
  
  var dose1= document.getElementById("dose1tdap").value; 
  var dose2 = document.getElementById("dose2tdap").value; 
  var dose3 = document.getElementById("dose3tdap").value; 
  var dose4 = document.getElementById("dose4tdap").value;
    
  var dose5 = document.getElementById("dose1dtap").value;
  var dose6 = document.getElementById("dose1dtap").value;
  var dose7= document.getElementById("dose1dtap").value; 
  var dose8 = document.getElementById("dose1dtap").value; 
    
  var grade = Number(document.getElementById("gradeLevel").value);
  var birthday = new Date(document.getElementById("bday").value);
  console.log(dose1)    ;
  
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var startDoses = [];
  startDoses.push(dose1,dose2,dose3,dose4,dose5,dose6,dose7,dose8);
  console.log(startDoses)
  var startDoses = startDoses.filter(onlyUnique);
  console.log(startDoses); 
  
  var dose1 = new Date(dose1); 
  var dose2 = new Date(dose2);
  var dose3 = new Date(dose3);
  var dose4 = new Date(dose4);
  var dose5 = new Date(dose5);
  var dose6 = new Date(dose6); 
  var dose7 = new Date(dose7);
  var dose8 = new Date(dose8);
    
  console.log(dose1);            
  var doses0 = [];
  
  
  if(!isNaN(dose1)){doses0.push(dose1);}  
  if(!isNaN(dose2)){doses0.push(dose2);}
  if(!isNaN(dose3)){doses0.push(dose3);}
  if(!isNaN(dose4)){doses0.push(dose4);}
  if(!isNaN(dose5)){doses0.push(dose5);}
  if(!isNaN(dose6)){doses0.push(dose6);}  
  if(!isNaN(dose7)){doses0.push(dose7);}
  if(!isNaN(dose8)){doses0.push(dose8);}
  
  console.log(doses0);
  var doses0 = doses0.sort(function(a, b){return a - b});
  var doses0 = doses0.filter(onlyUnique);       
  console.log(doses0); 
  
  var doses = [];
  if (doses0[0]>=birthday) {doses.push(doses0[0]);} 
  if (doses0[1]>=birthday) {doses.push(doses0[1]);} 
  if (doses0[2]>=birthday) {doses.push(doses0[2]);} 
  if (doses0[3]>=birthday) {doses.push(doses0[3]);} 
  if (doses0[4]>=birthday) {doses.push(doses0[4]);}
  if (doses0[5]>=birthday) {doses.push(doses0[5]);} 
  if (doses0[6]>=birthday) {doses.push(doses0[6]);} 
  if (doses0[7]>=birthday) {doses.push(doses0[7]);} 
   
  console.log(doses)
  var doses = doses.sort(function(a, b){return a - b})
  var doses = doses.filter(onlyUnique)       
  console.log(doses)  
    console.log("grade")

  console.log(grade)
    console.log(isNaN(grade))

  if (isNaN(birthday)) {
    console.log(birthday) 
    document.getElementById("intervalTdap").innerHTML = "Enter Date of Birth";
    document.getElementById("resultTdap").innerHTML = "";
    alert("Enter Date of Birth");
  }
  
  
    else if (isNaN(grade)){
      document.getElementById("intervalTdap").innerHTML = "Enter Valid Grade Level for Tdap Compliance";
    document.getElementById("resultTdap").innerHTML = "";
    alert("Enter Valid Grade for Tdap Compliance");
      
  }
    
  else if (grade<10){
      console.log(grade)
      document.getElementById("intervalTdap").innerHTML = "<b style='color:green;'>Tdap Status: Not Required</b>";
        document.getElementById("resultTdap").innerHTML = "";
  }
    
    else if (isNaN(doses[0]))
  {
    console.log(doses[0]) 
    document.getElementById("intervalTdap").innerHTML = "<b style='color:red;'>Tdap Status: Non-Compliant</b>"+" - Enter Valid Tdap Dose(s)";  
    document.getElementById("resultTdap").innerHTML = "";
    alert("Enter Valid Tdap Dose(s)");
    
  }
  else
  {
    
    
   
    
    function isGreaterThanDose(x,birthday){
     
      
      var birthday = new Date(document.getElementById("bday").value);       
      var yearB = birthday.getFullYear();
      var monthB = birthday.getMonth();
      var dayB = birthday.getDate();
      var addDays = new Date(yearB + 10, monthB, dayB-4);
      console.log(addDays);
    
    return x >= addDays
      
    }
    
    var fDoses = doses.filter(isGreaterThanDose); 
    var fDoses =  fDoses.filter(onlyUnique);
    var fDoses =  fDoses.sort(function(a, b){return a - b});
    console.log(fDoses); 
    console.log(fDoses[0]);                
    
    var validDoses = [];        
    if(!isNaN(fDoses[0])){validDoses.push(fDoses[0]);} 
    
    var validDoses = validDoses.filter(onlyUnique)
    var validDoses = validDoses.sort(function(a, b){return a - b});               
    
    console.log(validDoses);
    
    if (!isNaN(validDoses[0])) {
      
      document.getElementById("intervalTdap").innerHTML ="";
      document.getElementById("resultTdap").innerHTML =
        "<b style='color:green;'>Tdap Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>";
          
    }
    else
    {
      document.getElementById("resultTdap").innerHTML ="";
document.getElementById("intervalTdap").innerHTML =
        "<b style='color:red;'>Tdap Status: Non-Compliant</b>"+" - Needs additional dose(s)";          
      
    }
    
  }
}
