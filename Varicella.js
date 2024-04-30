document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById("btn3").addEventListener("click",varicella);
});

function varicella(){
  
  
  //create variable for entries
  
  var dose1= document.getElementById("dose1V").value; 
  var dose2 = document.getElementById("dose2V").value; 
  var dose3 = document.getElementById("dose3V").value; 
  var dose4 = document.getElementById("dose4V").value;
  
    var dose5 = document.getElementById("dose1MMRV").value;
var dose6 = document.getElementById("dose2MMRV").value;
 var dose7= document.getElementById("dose3MMRV").value; 
  var dose8 = document.getElementById("dose4MMRV").value; 
  
    
  var grade = document.getElementById("gradeLevel").value;
    
  var birthday = new Date(document.getElementById("bday").value);
  console.log(dose1)    ;
    var yearB = birthday.getFullYear();
      var monthB = birthday.getMonth();
      var dayB = birthday.getDate();
      var addDays4 = new Date(yearB + 13, monthB, dayB-4);
  
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var startDoses = [];
  startDoses.push(dose1,dose2,dose3,dose4,dose5,dose6,dose7,dose8);
  console.log(startDoses)
  
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
  if(!isNaN(dose5)&dose5>=addDays4){doses0.push(dose5);}
  if(!isNaN(dose6)&dose6>=addDays4){doses0.push(dose6);}  
  if(!isNaN(dose7)&dose7>=addDays4){doses0.push(dose7);}
  if(!isNaN(dose8)&dose8>=addDays4){doses0.push(dose8);}
  
    
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
  
  
  if (isNaN(birthday)) {
    console.log(birthday) 
    document.getElementById("intervalVaricella").innerHTML = "Enter Date of Birth";
    document.getElementById("resultVaricella").innerHTML = "";
    alert("Enter Date of Birth");
  }
  
  else if (isNaN(doses[0]))
  {
    console.log(doses[0]) 
    document.getElementById("intervalVaricella").innerHTML = "Enter Valid Doses";
    document.getElementById("resultVaricella").innerHTML = "";
    alert("Enter Valid Doses");
    
  }
  
  else
  {
    
    
    
    
    
    function isGreaterThanDose1(x,date1){
      var date1 = new Date(doses[0]);
      var addDays1 = new Date(date1.setDate(date1.getDate()+28-4));
      console.log(addDays1);
      return x >= addDays1;
    }
    var fDoses1 = doses.filter(isGreaterThanDose1); 
    var fDoses1 = fDoses1.filter(onlyUnique); 
    var fDoses1 = fDoses1.sort(function(a, b){return a - b}); 
    
    console.log(fDoses1)
    console.log(fDoses1[0])
                  
    
    var validDoses = [];        
    if(!isNaN(doses[0])){validDoses.push(doses[0]);} 
    if(!isNaN(fDoses1[0])){validDoses.push(fDoses1[0]);}   
    var validDoses = validDoses.filter(onlyUnique)
    var validDoses = validDoses.sort(function(a, b){return a - b});            
    
    console.log(validDoses);
    
    if (!isNaN(validDoses[1])) {
      
      
      document.getElementById("intervalVaricella").innerHTML =
        "<li><b>Valid Dose 1 to Valid Dose 2: </b>"+Math.ceil((validDoses[1]-validDoses[0])/ (1000 * 3600 * 24))+" days</li>";  
      
      
      document.getElementById("resultVaricella").innerHTML =
        "<b style='color:green;'>Varicella Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>"+
          "<li><i>Valid Dose 2: "+validDoses[1].toDateString()+"</li>";
    }
    else
    {
      
   if(isNaN(validDoses[0])){validDoses[0]="No Dose";} else {validDoses[0]=validDoses[0].toDateString()} 
      if(isNaN(validDoses[1])){validDoses[1]="No Dose";} else {validDoses[1]=validDoses[1].toDateString()} 
      
      
      document.getElementById("intervalVaricella").innerHTML =
        "<b>Non-Compliant Student: Needs additional dose(s)";        
      
      document.getElementById("resultVaricella").innerHTML =
        "<b style='color:red;'>Varicella Status: Non-Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0]+"</li>"+
          "<li><i>Valid Dose 2: "+validDoses[1];
        
    }
    
  }
    
}