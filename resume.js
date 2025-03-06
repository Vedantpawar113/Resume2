 function addElement (){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workfield");
    newNode.setAttribute("placeholder", "Enter Here")
    newNode.setAttribute("rows", 3);
    newNode.classList.add("mt-3")
    let wed = document.querySelector("#we");
    let weAddbtn = document.querySelector("#workAddbutton");

    wed.insertBefore(newNode, weAddbtn);

 }

 function aqAdd (){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.setAttribute("placeholder", "Enter Here")
    newNode.setAttribute("rows", 3);
    newNode.classList.add("mt-3")
    let aqd = document.querySelector("#aq");
    let weAddbtn = document.querySelector("#aqAddbutton");

    aqd.insertBefore(newNode, weAddbtn);

 }



 function generateCV(){
   //console.log("hello cv");
 
   let  namefield = document.querySelector("#namefield").value;
   let  nameT1 = document.querySelector("#nameT1").innerHTML=namefield;
   let  nameT2 = document.querySelector("#nameT2").innerHTML=namefield;
   
   let  numberfield = document.querySelector("#numberfield").value;
   let contactT = document.querySelector("#contactT").innerHTML=numberfield;

   let  addressfield = document.querySelector("#addressfield").value;
   let addressT = document.querySelector("#addressT").innerHTML=addressfield;

  
   let  schoolfield = document.querySelector("#schoolfield").value;
   let schoolT = document.querySelector("#schoolT").innerHTML=schoolfield; 
   
   let  Universityfield = document.querySelector("#Universityfield").value;
   let universityT = document.querySelector("#universityT").innerHTML=Universityfield;


    
   let  coursefield = document.querySelector("#coursefield").value;
   let courseT = document.querySelector("#courseT").innerHTML=coursefield;

   let  objectivefield = document.querySelector("#objectivefield").value;
   let objecttiveT = document.querySelector("#objectiveT").innerHTML=coursefield;

   
   let  workfield = document.querySelector(".workfield").value;
   let weT  = document.querySelector("#weT").innerHTML=workfield;


   let wes = document.querySelectorAll(".workfield");

    let str = "";

   for( let e of wes ){
      str +=  `<li> ${e.value} </li>`;

   }

   document.querySelector("#weT").innerHTML= str;


   let auqs = document.querySelectorAll(".eqfield");

      let str1 = "";

   for( let e of auqs ){
      str1 +=  `<li> ${e.value} </li>`;

   }

   document.querySelector("#auT").innerHTML= str1;


   let imgfile = document.querySelector("#imgefield").files[0];

  let  reader = new FileReader();

  reader.readAsDataURL(imgfile);
  console.log(reader.result);


  reader.onloadend = function () {
    document.querySelector("#imgtemplate").src = reader.result;
  }


   document.querySelector("#cv-form").style.display= 'none';
   document.querySelector("#cv-template").style.display= 'block';
}

function printCV () {
Window.print();
   
}