document.addEventListener('DOMContentLoaded', function() {
  
  
  document.getElementById("btn4").addEventListener("click",MCV4);
});
function MCV4(){
  
  
  //create variable for entries
  
  var dose1 = document.getElementById("dose1MCV4").value; 
  var dose2 = document.getElementById("dose2MCV4").value; 
  var dose3 = document.getElementById("dose3MCV4").value; 
  var dose4 = document.getElementById("dose4MCV4").value;
  
  var grade = Number(document.getElementById("gradeLevel").value);
   console.log(grade)    ; 
  var birthday = new Date(document.getElementById("bday").value);
  console.log(dose1)    ;
  
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
    
  var startDoses = [];
  startDoses.push(dose1,dose2,dose3,dose4);
  console.log(startDoses)
  var startDoses = startDoses.filter(onlyUnique);
  console.log(startDoses); 
  
  var dose1 = new Date(dose1); 
  var dose2 = new Date(dose2);
  var dose3 = new Date(dose3);
  var dose4 = new Date(dose4);
  
  console.log(dose1);            
  var doses0 = [];
  
  
  if(!isNaN(dose1)){doses0.push(dose1);}  
  if(!isNaN(dose2)){doses0.push(dose2);}
  if(!isNaN(dose3)){doses0.push(dose3);}
  if(!isNaN(dose4)){doses0.push(dose4);}
  
  
  console.log(doses0);
  var doses0 = doses0.sort(function(a, b){return a - b});
  var doses0 = doses0.filter(onlyUnique);       
  console.log(doses0); 
  
  
  var doses = [];
  if (doses0[0]>=birthday) {doses.push(doses0[0]);} 
  if (doses0[1]>=birthday) {doses.push(doses0[1]);} 
  if (doses0[2]>=birthday) {doses.push(doses0[2]);} 
  if (doses0[3]>=birthday) {doses.push(doses0[3]);} 
  
  var doses = doses.sort(function(a, b){return a - b})
  var doses = doses.filter(onlyUnique)       
  console.log(doses)   
  
  
  if (isNaN(birthday)) {
    console.log(birthday) 
    document.getElementById("intervalMCV4").innerHTML = "Enter Date of Birth";
    document.getElementById("resultMCV4").innerHTML = "";
    alert("Enter Date of Birth");
  }
  
  if (isNaN(doses[0]))
  {
    console.log(doses[0]) 
    document.getElementById("intervalMCV4").innerHTML = "Enter Valid Doses";
    document.getElementById("resultMCV4").innerHTML = "";
    alert("Enter Valid Doses");
    
  }
  

    if(grade>6 && grade<12){
      console.log(birthday)  
      function isGreaterThanBday(x) {
        var birthday = new Date(document.getElementById("bday").value);       
        var yearB = birthday.getFullYear();
        var monthB = birthday.getMonth();
        var dayB = birthday.getDate();
        var birthday1 = new Date(yearB + 11, monthB, dayB-4);    
        console.log(birthday1);
        return x >= birthday1;
      }
      
      
      var fDoses = doses.filter(isGreaterThanBday)
      var fDoses = fDoses.filter(onlyUnique)
      var fDoses = fDoses.sort(function(a, b){return a - b}); 
      console.log(fDoses);
      console.log(fDoses[0]);
      
      var validDoses = [];        
      if(!isNaN(fDoses[0])){validDoses.push(fDoses[0]);
                            
     document.getElementById("resultMCV4").innerHTML =
     "<b style='color:green;'>MCV4 Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>";
                            
    document.getElementById("intervalMCV4").innerHTML ="";                        
                           }
      else
      {
        
        
        
        document.getElementById("intervalMCV4").innerHTML =
          "<b>Non-Compliant Student: Needs additional dose(s)";        
        
        document.getElementById("resultMCV4").innerHTML =
          "<b style='color:red;'>MCV4 Status: Non-Compliant</b>";
      }
      
      
      
    }
    
    else if(grade==12&&doses.length>1){
      
      console.log(birthday)  
      function isGreaterThanBday(x) {
        var birthday = new Date(document.getElementById("bday").value);       
        var yearB = birthday.getFullYear();
        var monthB = birthday.getMonth();
        var dayB = birthday.getDate();
        var birthday1 = new Date(yearB + 11, monthB, dayB-4);    
        console.log(birthday1);
        return x >= birthday1;
      }
      
      
      var fDoses = doses.filter(isGreaterThanBday)
      var fDoses = fDoses.filter(onlyUnique)
      var fDoses = fDoses.sort(function(a, b){return a - b}); 
      console.log(fDoses);
      console.log(fDoses[0]);
      
      function isGreaterThanDose1(x,birthday,date3){
        var date3 = new Date(fDoses[0]);  
        var year3 = date3.getFullYear();
        var month3 = date3.getMonth();
        var day3 = date3.getDate();
        var addDays3 = new Date(year3 , month3, day3+56-4);
        
        
        var birthday = new Date(document.getElementById("bday").value);       
        var yearB = birthday.getFullYear();
        var monthB = birthday.getMonth();
        var dayB = birthday.getDate();
        var addDays4 = new Date(yearB + 16, monthB, dayB-4);
        console.log(addDays4);
        console.log(addDays3);
        
        if(addDays4<addDays3){return x >=addDays3;} else {return x >= addDays4}
        
      }
      
      var fDoses1 = fDoses.filter(isGreaterThanDose1); 
      var fDoses1 =  fDoses1.filter(onlyUnique);
      var fDoses1 =  fDoses1.sort(function(a, b){return a - b});
      console.log(fDoses1); 
      console.log(fDoses1[0]); 
      
      var validDoses = [];        
      if(!isNaN(fDoses[0])){validDoses.push(fDoses[0])};
      if(!isNaN(fDoses1[0])){validDoses.push(fDoses1[0])};                     
                                                   
      if (!isNaN(validDoses[1])) {
                                                                              
        document.getElementById("intervalMCV4").innerHTML =
      "<li><b>Valid Dose 1 to Valid Dose 2: </b>"+Math.ceil((validDoses[1]-validDoses[0])/ (1000 * 3600 * 24))+" days</li>";  
                                                     
                                                     
        document.getElementById("resultMCV4").innerHTML =
         "<b style='color:green;'>MCV4 Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>"+
         "<li><i>Valid Dose 2: "+validDoses[1].toDateString();
                                                   }
                                                   if (!isNaN(validDoses[0]))
                                                   {
                                                       
            document.getElementById("intervalMCV4").innerHTML =
          "<b>Non-Compliant Student: Needs additional dose(s)";   
                                                   }
                                                     
        }
        
        else if(grade==12){
            
            
             function isGreaterThanBday(x) {
        var birthday = new Date(document.getElementById("bday").value);       
        var yearB = birthday.getFullYear();
        var monthB = birthday.getMonth();
        var dayB = birthday.getDate();
        var birthday1 = new Date(yearB + 16, monthB, dayB-4);    
        console.log(birthday1);
        return x >= birthday1;
      }
      
      
      var fDoses = doses.filter(isGreaterThanBday)
      var fDoses = fDoses.filter(onlyUnique)
      var fDoses = fDoses.sort(function(a, b){return a - b}); 
      console.log(fDoses);
      console.log(fDoses[0]);
            
             var validDoses = [];        
      if(!isNaN(fDoses[0])){validDoses.push(fDoses[0])};
                
            
            if (!isNaN(validDoses[0])) {
                                                     
        document.getElementById("resultMCV4").innerHTML =
        "<b style='color:green;'>MCV4 Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>";
                                                   }
                                                   else
                                                   {
        document.getElementById("intervalMCV4").innerHTML =
     "<b>Non-Compliant Student: Needs additional dose(s)";        
                                                
                                                   }
                                                       
                                                    
                                                  }
        }



