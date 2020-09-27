let input=document.getElementById('userinput');
let button=document.getElementById('btn');
let parentList=document.getElementById('list-container');
//adds task to the list
const check="fa-check";
const uncheck="fa-circle-o";
let list=[];
let id=0;

button.addEventListener('click',task);
function task(todo,done,trash,id){
  var todo=input.value;
  if(trash){return;}
  //check completed r not
   const Done=done?check:uncheck;
  //task variable for todo
   let task=`<li><i class="fa ${Done}"job="completed"></i>
   ${todo}<i class="fa fa-trash"job="delete"></i>`;
   position="beforeend";
 
  //position variable for position
  //add the elements to container
  parentList.insertAdjacentHTML(position,task);
   //store object to store the tasks
  list.push({
    name:todo,
    done:false,
    trash:true,
    id:id
  })
  id++;
}
//task contains del,check,task
function completed(element){
element.classList.toggle(check);
element.classList.toggle(uncheck);
list[element.id].done=list[element.id].done?false:true;
//need to sleect the dynamic elements 
//use toggle method for adding and removing   
}
function removeTodo(element)
{
  element.parentNode.parentNode.removeChild(element.parentNode);
  list[element.id].trash=true;
}
//target elements
parentList.addEventListener("click",function(event){
   const element =event.target;
   const elementJob=element.attributes.job.value;
   if(elementJob=="completed")
   {
     completed(element);
   }
   else if(elementJob=="delete")
   removeTodo(element);
});
//create function alarm 
function notifyMe()
{
   //it should take the time as input
   let userTime=document.getElementById('time');
   let setTime=document.getElementById('settime');
   setTime.addEventListener('click',function(){
     console.log("its working");
    console.log(userTime.value);
   })
   
}

//when the time is come it audio should be played
//compare the input time and current time 















//update () to make the buttons work

