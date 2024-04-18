//creat a function to caculate average to a group of numbers (at least 10 numbers)
document.getElementById('moh').innerHTML;

function about(num1 ,num2 ,num3 ,num4 ,num5 ,num6 ,num7 ,num8 ,num9 ,num10){
   
return (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) /10

}

about(10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100)

document.getElementById('moh').innerHTML= (about(10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100)) ;


//write a function that taskes the base and height of a triangle and return its area  

function calc(base,height) {
    return(base*height)/2;

}
calc(5 , 8)
document.getElementById('demo').innerHTML = calc(5 , 8) ;


//create a function that takes the age in years and returns the age in days and print it on concole 

function my_age(age) {
    return age*365 ;

}

my_age(24)

console.log (my_age (24));



//create a function takes two numbers and return thier sum


function numbers(num1,num2) {
    return(num1+num2);

}
numbers(40 , 60)

document.getElementById('nono').innerHTML = numbers(40 , 60) ;




// create a function that takes an array containing only numbers and return the first element with html and js 
var names = ['mohamed','ahmed','alaa','ali','abdal','hassan','waled','karim','youssef','joo','barakat'] ;

function my_frindes (names){

    return names;
   
}
document.getElementById('colo').innerHTML = names[0] ;


//create a function show your name in HTML document

function my_name(name1,name2,name3,name4) {

    return (name1+name2+name3+name4) ;

}
my_name('Mohamed','Abdelaal','Mohamed','Ahmed');

document.getElementById('cool').innerHTML = (my_name('Mohamed','Abdelaal','Mohamed','Ahmed')) ;








// create a function given four numbers, return true if numbers is more than 350. otherwise return false. the sum of both


function sum(numb1,numb2,numb3,numb4){
    
    return(numb1+numb2+numb3+numb4);

    
}

sum(100,50,100,100)

var total = (100,100,100,100) ;

if(total.valueOf < 350 ){
    document.getElementById('number').innerHTML = 'true';

}else if(total.valueOf  > 350){
    document.getElementById('number').innerHTML = 'false';

}







































































