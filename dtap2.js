function DTaP2(){
  
  
  //create variable for entries
  
  var dose1= document.getElementById("dose1DTaP").value; 
  var dose2 = document.getElementById("dose2DTaP").value; 
  var dose3 = document.getElementById("dose3DTaP").value; 
  var dose4 = document.getElementById("dose4DTaP").value;
  var dose5 = document.getElementById("dose5DTaP").value;
    
var dose6 = document.getElementById("dose1DT").value;
 var dose7= document.getElementById("dose2DT").value; 
  var dose8 = document.getElementById("dose3DT").value; 
  var dose9 = document.getElementById("dose4DT").value;
    
  var dose10 = document.getElementById("dose1TD").value;
  var dose11 = document.getElementById("dose2TD").value;
var dose12 = document.getElementById("dose3TD").value; 
    var dose13 = document.getElementById("dose4TD").value; 
    
     var dose14 = document.getElementById("dose1Tdap").value;
  var dose15 = document.getElementById("dose2Tdap").value;
var dose16 = document.getElementById("dose3Tdap").value; 
    var dose17 = document.getElementById("dose4Tdap").value;
    
  var grade = document.getElementById("gradeLevel").value;
    
  var birthday = new Date(document.getElementById("bday").value);
  console.log(dose1)    ;
  
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var startDoses = [];
  startDoses.push(dose1,dose2,dose3,dose4,dose5,dose6,dose7,dose8,dose9,dose10,dose11,dose12,dose13,dose14,dose15,dose16,dose17);
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
  var dose9 = new Date(dose9);
  var dose10 = new Date(dose10);
  var dose11 = new Date(dose11); 
  var dose12 = new Date(dose12);
  var dose13 = new Date(dose13);
  var dose14 = new Date(dose14);
  var dose15 = new Date(dose15);
  var dose16 = new Date(dose16);
  var dose17 = new Date(dose17);
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
  if(!isNaN(dose9)){doses0.push(dose9);}
  if(!isNaN(dose10)){doses0.push(dose10);}
  if(!isNaN(dose11)){doses0.push(dose11);}  
  if(!isNaN(dose12)){doses0.push(dose12);}
  if(!isNaN(dose13)){doses0.push(dose13);}
  if(!isNaN(dose14)){doses0.push(dose14);}
  if(!isNaN(dose15)){doses0.push(dose15);}
  if(!isNaN(dose16)){doses0.push(dose16);}  
  if(!isNaN(dose17)){doses0.push(dose17);}
    
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
  if (doses0[8]>=birthday) {doses.push(doses0[8]);} 
  if (doses0[9]>=birthday) {doses.push(doses0[9]);}
  if (doses0[10]>=birthday) {doses.push(doses0[10]);} 
  if (doses0[11]>=birthday) {doses.push(doses0[11]);} 
  if (doses0[12]>=birthday) {doses.push(doses0[12]);} 
  if (doses0[13]>=birthday) {doses.push(doses0[13]);} 
  if (doses0[14]>=birthday) {doses.push(doses0[14]);}
 if (doses0[15]>=birthday) {doses.push(doses0[15]);} 
  if (doses0[16]>=birthday) {doses.push(doses0[16]);} 
  console.log(doses)
  var doses = doses.sort(function(a, b){return a - b})
  var doses = doses.filter(onlyUnique)       
  console.log(doses)   
  
  
  if (isNaN(birthday)) {
    console.log(birthday) 
    document.getElementById("intervalDtap").innerHTML = "Enter Date of Birth";
    document.getElementById("resultDtap").innerHTML = "";
    alert("Enter Date of Birth");
  }
  
  else if (isNaN(doses[0]))
  {
    console.log(doses[0]) 
    document.getElementById("intervalDtap").innerHTML = "Enter Valid Doses";
    document.getElementById("resultDtap").innerHTML = "";
    alert("Enter Valid Doses");
    
  }
  
  else
  {
    
    
    console.log(birthday)  
    function isGreaterThanBday(x) {
      var birthday = new Date(document.getElementById("bday").value);
      var birthday1 = new Date(birthday.setDate(birthday.getDate()+42-4));    
      console.log(birthday1);
      return x >= birthday1;
    }
    
    
    var fDoses = doses.filter(isGreaterThanBday)
    var fDoses = fDoses.filter(onlyUnique)
    var fDoses = fDoses.sort(function(a, b){return a - b}); 
    console.log(fDoses);
    console.log(fDoses[0]);
    
    
    
    function isGreaterThanDose1(x,date1){
      var date1 = new Date(fDoses[0]);
      var addDays1 = new Date(date1.setDate(date1.getDate()+28-4));
      console.log(addDays1);
      return x >= addDays1;
    }
    var fDoses1 = fDoses.filter(isGreaterThanDose1); 
    var fDoses1 = fDoses1.filter(onlyUnique); 
    var fDoses1 = fDoses1.sort(function(a, b){return a - b}); 
    
    console.log(fDoses1)
    console.log(fDoses1[0])
    
    function isGreaterThanDose2(x,date2){
      var date2 = new Date(fDoses1[0]);
      var addDays2 = new Date(date2.setDate(date2.getDate()+28-4));
      console.log(addDays2);
      return x >= addDays2;       
      
    }
    
    var fDoses2 = fDoses1.filter(isGreaterThanDose2); 
    var fDoses2 =  fDoses2.filter(onlyUnique);
    var fDoses2 =  fDoses2.sort(function(a, b){return a - b});
    console.log(fDoses2); 
    console.log(fDoses2[0]);
    
    
    function isGreaterThanDose3(x,birthday,date3){
      var date3 = new Date(fDoses2[0]);  
      var year3 = date3.getFullYear();
      var month3 = date3.getMonth();
      var day3 = date3.getDate();
      var addDays3 = new Date(year3 , month3+6, day3-4);
      
      var birthday = new Date(document.getElementById("bday").value);       
      var yearB = birthday.getFullYear();
      var monthB = birthday.getMonth();
      var dayB = birthday.getDate();
      var addDays4 = new Date(yearB + 7, monthB, dayB-4);
      console.log(addDays4);
      console.log(addDays3);
      
      if(addDays4<addDays3){return x >=addDays3;} else {return x >= addDays4}
      
    }
    
    var fDoses3 = fDoses2.filter(isGreaterThanDose3); 
    var fDoses3 =  fDoses3.filter(onlyUnique);
    var fDoses3 =  fDoses3.sort(function(a, b){return a - b});
    console.log(fDoses3); 
    console.log(fDoses3[0]);                
    
    var validDoses = [];        
    if(!isNaN(fDoses[0])){validDoses.push(fDoses[0]);} 
    if(!isNaN(fDoses1[0])){validDoses.push(fDoses1[0]);}   
    if(!isNaN(fDoses2[0])){validDoses.push(fDoses2[0]);} 
    if(!isNaN(fDoses3[0])){validDoses.push(fDoses3[0]);}
    var validDoses = validDoses.filter(onlyUnique)
    var validDoses = validDoses.sort(function(a, b){return a - b});            
    
    console.log(validDoses);
    
    if (!isNaN(validDoses[3])) {
      
      
      document.getElementById("intervalDtap").innerHTML =
        "<li><b>Valid Dose 1 to Valid Dose 2: </b>"+Math.ceil((validDoses[1]-validDoses[0])/ (1000 * 3600 * 24))+" days</li>"+"<li><b>Valid Dose 2 to Valid Dose 3: </b>"+Math.ceil((validDoses[2]-validDoses[1])/ (1000 * 3600 * 24))+" days</li>"+"<li><b>Valid Dose 3 to Valid Dose 4: </b>"+Math.ceil((validDoses[3]-validDoses[2])/ (1000 * 3600 * 24)/30)+" Months</li>";  
      
      
      document.getElementById("resultDtap").innerHTML =
        "<b style='color:green;'>DTaP Status: Compliant</b>"+"<li><i>Valid Dose 1: "+validDoses[0].toDateString()+"</li>"+
          "<li><i>Valid Dose 2: "+validDoses[1].toDateString()+"</li>"+
            "<li><i>Valid Dose 3: "+validDoses[2].toDateString()+"</li>"+
              "<li><i>Valid Dose 4: "+validDoses[3].toDateString()+"</li>";
    }
    else
    {
      
     DTaP3();
    }
    
  }
    
}