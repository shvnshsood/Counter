let count = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach( function (btn){

    btn.addEventListener('click' , function(check){

        const styles =  check.currentTarget.classList;
if (styles.contains('decrease'))
{
    count--;
   
   
}
else if(styles.contains('increase'))
{
    count++;
   
}
else 
{

    count = 0 ;
    value.style.color="black";

}

if (count < 0)
{

    value.style.color="red";
}

if (count > 0)
{
    value.style.color="green";


}


value .textContent = count;


    });





});