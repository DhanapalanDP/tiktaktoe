
const elements = document.getElementsByClassName('element')
const X = document.querySelector('.X')
const Y = document.querySelector('.Y')
const restart = document.querySelector('button')



let count = 0;
let arrayX = [];
let arrayO = [];
let draw = true;
let nomore = false

for (let i = 0; i < elements.length; i++) {
    
    elements[i].addEventListener('click', function addClick(){
        restart.addEventListener('click', function(){
            setInterval(() => {
                window.location.reload() 
        }, 200);
        
        })
        if(count == 0 || count%2 == 0)
        {
            if(elements[i].innerHTML ==""){
            elements[i].innerHTML="X"
            if (elements[i].innerHTML=="X") {
                    elements[i].classList.add('done')
                    if(elements[i].classList.contains('done')){
                        elements[i].removeEventListener('click', addClick)
}            
            }
            count += 1
            }
            arrayX += elements[i].id
           
            
            
            if(count>=4){
                if(((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) &&(arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3))||
                ((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) &&(arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7))||
                ((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) &&(arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9))||
                ((arrayX[0] == 4 ||arrayX[0] == 5 || arrayX[0] == 6) &&(arrayX[1] == 4 ||arrayX[1] == 5 || arrayX[1] == 6) && (arrayX[2] == 4 ||arrayX[2] == 5 || arrayX[2] == 6))||
                ((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) &&(arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9))||
                ((arrayX[0] == 2 ||arrayX[0] == 8 || arrayX[0] == 5) &&(arrayX[1] == 2 ||arrayX[1] == 8 || arrayX[1] == 5) && (arrayX[2] == 2 ||arrayX[2] == 8 || arrayX[2] == 5))||
                ((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9) && (arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9))||
                ((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7) && (arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7))||
                ((arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3)&&((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) &&(arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3)||((arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3))||((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3))))||
                ((arrayX[3] == 1 ||arrayX[3] == 4 || arrayX[3] == 7)&&((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) &&(arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7)||((arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7))|| ((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7))))||
                ((arrayX[3] == 1 ||arrayX[3] == 5 || arrayX[3] == 9)&&((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) &&(arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9)||((arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9))||((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9))))||
                ((arrayX[3] == 4 ||arrayX[3] == 5 || arrayX[3] == 6)&&((arrayX[0] == 4 ||arrayX[0] == 5 || arrayX[0] == 6) &&(arrayX[1] == 4 ||arrayX[1] == 5 || arrayX[1] == 6)||((arrayX[1] == 4 ||arrayX[1] == 5 || arrayX[1] == 6) && (arrayX[2] == 4 ||arrayX[2] == 5 || arrayX[2] == 6))||((arrayX[0] == 4 ||arrayX[0] == 5 || arrayX[0] == 6) && (arrayX[2] == 4 ||arrayX[2] == 5 || arrayX[2] == 6))))||
                ((arrayX[3] == 7 ||arrayX[3] == 8 || arrayX[3] == 9)&&((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) &&(arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9)||((arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9))|| ((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9))))||
                ((arrayX[3] == 2 ||arrayX[3] == 5 || arrayX[3] == 8)&&((arrayX[0] == 2 ||arrayX[0] == 5 || arrayX[0] == 8) &&(arrayX[1] == 2 ||arrayX[1] == 5 || arrayX[1] == 8)||((arrayX[1] == 2 ||arrayX[1] == 5 || arrayX[1] == 8) && (arrayX[2] == 2 ||arrayX[2] == 5 || arrayX[2] == 8))||((arrayX[0] == 2 ||arrayX[0] == 8 || arrayX[0] == 5) && (arrayX[2] == 2 ||arrayX[2] == 8 || arrayX[2] == 5))))|| 
                ((arrayX[3] == 3 ||arrayX[3] == 6 || arrayX[3] == 9)&&((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9)||((arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9) && (arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9))||((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9))))||
                ((arrayX[3] == 3 ||arrayX[3] == 5 || arrayX[3] == 7)&&((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7)||((arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7) && (arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7))||((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7))))||
                ((arrayX[4] == 1 ||arrayX[4] == 2 || arrayX[4] == 3)&&((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) &&(arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3)||((arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3))||((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3))||((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) &&(arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3)||((arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3) && (arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3))||((arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3)))))||
                ((arrayX[4] == 1 ||arrayX[4] == 4 || arrayX[4] == 7)&&((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) &&(arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7)||((arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7))|| ((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7))||((arrayX[0] == 1 ||arrayX[0] == 4 || arrayX[0] == 7) &&(arrayX[3] == 1 ||arrayX[3] == 4 || arrayX[3] == 7)||((arrayX[1] == 1 ||arrayX[1] == 4 || arrayX[1] == 7) && (arrayX[3] == 1 ||arrayX[3] == 4 || arrayX[3] == 7))||((arrayX[3] == 1 ||arrayX[3] == 4 || arrayX[3] == 7) && (arrayX[2] == 1 ||arrayX[2] == 4 || arrayX[2] == 7)))))||
                ((arrayX[4] == 1 ||arrayX[4] == 5 || arrayX[4] == 9)&&((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) &&(arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9)||((arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9))||((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9))||((arrayX[0] == 1 ||arrayX[0] == 5 || arrayX[0] == 9) &&(arrayX[3] == 1 ||arrayX[3] == 5 || arrayX[3] == 9)||((arrayX[1] == 1 ||arrayX[1] == 5 || arrayX[1] == 9) && (arrayX[3] == 1 ||arrayX[3] == 5 || arrayX[3] == 9))||((arrayX[3] == 1 ||arrayX[3] == 5 || arrayX[3] == 9) && (arrayX[2] == 1 ||arrayX[2] == 5 || arrayX[2] == 9)))))||
                ((arrayX[4] == 4 ||arrayX[4] == 5 || arrayX[4] == 6)&&((arrayX[0] == 4 ||arrayX[0] == 5 || arrayX[0] == 6) &&(arrayX[1] == 4 ||arrayX[1] == 5 || arrayX[1] == 6)||((arrayX[1] == 4 ||arrayX[1] == 5 || arrayX[1] == 6) && (arrayX[2] == 4 ||arrayX[2] == 5 || arrayX[2] == 6))||((arrayX[0] == 4 ||arrayX[0] == 5 || arrayX[0] == 6) && (arrayX[2] == 4 ||arrayX[2] == 5 || arrayX[2] == 6))||((arrayX[0] == 1 ||arrayX[0] == 2 || arrayX[0] == 3) &&(arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3)||((arrayX[1] == 1 ||arrayX[1] == 2 || arrayX[1] == 3) && (arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3))||((arrayX[3] == 1 ||arrayX[3] == 2 || arrayX[3] == 3) && (arrayX[2] == 1 ||arrayX[2] == 2 || arrayX[2] == 3)))))||
                ((arrayX[4] == 7 ||arrayX[4] == 8 || arrayX[4] == 9)&&((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) &&(arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9)||((arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9))|| ((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9))||((arrayX[0] == 7 ||arrayX[0] == 8 || arrayX[0] == 9) &&(arrayX[3] == 7 ||arrayX[3] == 8 || arrayX[3] == 9)||((arrayX[1] == 7 ||arrayX[1] == 8 || arrayX[1] == 9) && (arrayX[3] == 7 ||arrayX[3] == 8 || arrayX[3] == 9))||((arrayX[3] == 7 ||arrayX[3] == 8 || arrayX[3] == 9) && (arrayX[2] == 7 ||arrayX[2] == 8 || arrayX[2] == 9)))))||
                ((arrayX[4] == 2 ||arrayX[4] == 5 || arrayX[4] == 8)&&((arrayX[0] == 2 ||arrayX[0] == 5 || arrayX[0] == 8) &&(arrayX[1] == 2 ||arrayX[1] == 5 || arrayX[1] == 8)||((arrayX[1] == 2 ||arrayX[1] == 5 || arrayX[1] == 8) && (arrayX[2] == 2 ||arrayX[2] == 5 || arrayX[2] == 8))||((arrayX[0] == 2 ||arrayX[0] == 8 || arrayX[0] == 5) && (arrayX[2] == 2 ||arrayX[2] == 8 || arrayX[2] == 5))||((arrayX[0] == 2 ||arrayX[0] == 8 || arrayX[0] == 5) &&(arrayX[3] == 2 ||arrayX[3] == 8 || arrayX[3] == 5)||((arrayX[1] == 2 ||arrayX[1] == 8 || arrayX[1] == 5) && (arrayX[3] == 2 ||arrayX[3] == 8 || arrayX[3] == 5))||((arrayX[3] == 2 ||arrayX[3] == 8 || arrayX[3] == 5) && (arrayX[2] == 2 ||arrayX[2] == 8 || arrayX[2] == 5)))))|| 
                ((arrayX[4] == 3 ||arrayX[4] == 6 || arrayX[4] == 9)&&((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9)||((arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9) && (arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9))||((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9))||((arrayX[0] == 3 ||arrayX[0] == 6 || arrayX[0] == 9) &&(arrayX[3] == 3 ||arrayX[3] == 6 || arrayX[3] == 9)||((arrayX[1] == 3 ||arrayX[1] == 6 || arrayX[1] == 9) && (arrayX[3] == 3 ||arrayX[3] == 6 || arrayX[3] == 9))||((arrayX[3] == 3 ||arrayX[3] == 6 || arrayX[3] == 9) && (arrayX[2] == 3 ||arrayX[2] == 6 || arrayX[2] == 9)))))||
                ((arrayX[4] == 3 ||arrayX[4] == 5 || arrayX[4] == 7)&&((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7)||((arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7) && (arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7))||((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7))||((arrayX[0] == 3 ||arrayX[0] == 5 || arrayX[0] == 7) &&(arrayX[3] == 3 ||arrayX[3] == 5 || arrayX[3] == 7)||((arrayX[1] == 3 ||arrayX[1] == 5 || arrayX[1] == 7) && (arrayX[3] == 3 ||arrayX[3] == 5 || arrayX[3] == 7))||((arrayX[3] == 3 ||arrayX[3] == 5 || arrayX[3] == 7) && (arrayX[2] == 3 ||arrayX[2] == 5 || arrayX[2] == 7)))))){
                    setTimeout(() => {
                        swal("X won the match")
                        setTimeout(() => {
                            window.location.reload() 
                    }, 2000);
                    }, 500);
            
                    // Check browser support
                    
                    draw = false;
                    
                }
                else if(count==9){
                    if(draw){
                        setTimeout(() => {
                            swal("draw match")
                            setTimeout(() => {
                                window.location.reload() 
                        }, 2000);
                        }, 500);
                    }
                }
            }  
        }else if(count != 0 || count%2 != 0){
            if( elements[i].innerHTML ==""){
                elements[i].innerHTML="O"
                if(elements[i].innerHTML=="O") {
                    elements[i].classList.add('done')
                    if(elements[i].classList.contains('done')){
                        elements[i].removeEventListener('click', addClick)

}                }
                count += 1
                }
                arrayO += elements[i].id
                if(count>=4){
                    if(((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) &&(arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3))||
                    ((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) &&(arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7))||
                    ((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) &&(arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9))||
                    ((arrayO[0] == 4 ||arrayO[0] == 5 || arrayO[0] == 6) &&(arrayO[1] == 4 ||arrayO[1] == 5 || arrayO[1] == 6) && (arrayO[2] == 4 ||arrayO[2] == 5 || arrayO[2] == 6))||
                    ((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) &&(arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9))||
                    ((arrayO[0] == 2 ||arrayO[0] == 8 || arrayO[0] == 5) &&(arrayO[1] == 2 ||arrayO[1] == 8 || arrayO[1] == 5) && (arrayO[2] == 2 ||arrayO[2] == 8 || arrayO[2] == 5))||
                    ((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9) && (arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9))||
                    ((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7) && (arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7))||
                    ((arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3)&&((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) &&(arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3)||((arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3))||((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3))))||
                    ((arrayO[3] == 1 ||arrayO[3] == 4 || arrayO[3] == 7)&&((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) &&(arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7)||((arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7))|| ((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7))))||
                    ((arrayO[3] == 1 ||arrayO[3] == 5 || arrayO[3] == 9)&&((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) &&(arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9)||((arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9))||((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9))))||
                    ((arrayO[3] == 4 ||arrayO[3] == 5 || arrayO[3] == 6)&&((arrayO[0] == 4 ||arrayO[0] == 5 || arrayO[0] == 6) &&(arrayO[1] == 4 ||arrayO[1] == 5 || arrayO[1] == 6)||((arrayO[1] == 4 ||arrayO[1] == 5 || arrayO[1] == 6) && (arrayO[2] == 4 ||arrayO[2] == 5 || arrayO[2] == 6))||((arrayO[0] == 4 ||arrayO[0] == 5 || arrayO[0] == 6) && (arrayO[2] == 4 ||arrayO[2] == 5 || arrayO[2] == 6))))||
                    ((arrayO[3] == 7 ||arrayO[3] == 8 || arrayO[3] == 9)&&((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) &&(arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9)||((arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9))|| ((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9))))||
                    ((arrayO[3] == 2 ||arrayO[3] == 5 || arrayO[3] == 8)&&((arrayO[0] == 2 ||arrayO[0] == 5 || arrayO[0] == 8) &&(arrayO[1] == 2 ||arrayO[1] == 5 || arrayO[1] == 8)||((arrayO[1] == 2 ||arrayO[1] == 5 || arrayO[1] == 8) && (arrayO[2] == 2 ||arrayO[2] == 5 || arrayO[2] == 8))||((arrayO[0] == 2 ||arrayO[0] == 8 || arrayO[0] == 5) && (arrayO[2] == 2 ||arrayO[2] == 8 || arrayO[2] == 5))))|| 
                    ((arrayO[3] == 3 ||arrayO[3] == 6 || arrayO[3] == 9)&&((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9)||((arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9) && (arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9))||((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9))))||
                    ((arrayO[3] == 3 ||arrayO[3] == 5 || arrayO[3] == 7)&&((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7)||((arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7) && (arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7))||((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7))))||
                    ((arrayO[4] == 1 ||arrayO[4] == 2 || arrayO[4] == 3)&&((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) &&(arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3)||((arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3))||((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3))||((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) &&(arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3)||((arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3) && (arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3))||((arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3)))))||
                    ((arrayO[4] == 1 ||arrayO[4] == 4 || arrayO[4] == 7)&&((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) &&(arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7)||((arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7))|| ((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7))||((arrayO[0] == 1 ||arrayO[0] == 4 || arrayO[0] == 7) &&(arrayO[3] == 1 ||arrayO[3] == 4 || arrayO[3] == 7)||((arrayO[1] == 1 ||arrayO[1] == 4 || arrayO[1] == 7) && (arrayO[3] == 1 ||arrayO[3] == 4 || arrayO[3] == 7))||((arrayO[3] == 1 ||arrayO[3] == 4 || arrayO[3] == 7) && (arrayO[2] == 1 ||arrayO[2] == 4 || arrayO[2] == 7)))))||
                    ((arrayO[4] == 1 ||arrayO[4] == 5 || arrayO[4] == 9)&&((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) &&(arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9)||((arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9))||((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9))||((arrayO[0] == 1 ||arrayO[0] == 5 || arrayO[0] == 9) &&(arrayO[3] == 1 ||arrayO[3] == 5 || arrayO[3] == 9)||((arrayO[1] == 1 ||arrayO[1] == 5 || arrayO[1] == 9) && (arrayO[3] == 1 ||arrayO[3] == 5 || arrayO[3] == 9))||((arrayO[3] == 1 ||arrayO[3] == 5 || arrayO[3] == 9) && (arrayO[2] == 1 ||arrayO[2] == 5 || arrayO[2] == 9)))))||
                    ((arrayO[4] == 4 ||arrayO[4] == 5 || arrayO[4] == 6)&&((arrayO[0] == 4 ||arrayO[0] == 5 || arrayO[0] == 6) &&(arrayO[1] == 4 ||arrayO[1] == 5 || arrayO[1] == 6)||((arrayO[1] == 4 ||arrayO[1] == 5 || arrayO[1] == 6) && (arrayO[2] == 4 ||arrayO[2] == 5 || arrayO[2] == 6))||((arrayO[0] == 4 ||arrayO[0] == 5 || arrayO[0] == 6) && (arrayO[2] == 4 ||arrayO[2] == 5 || arrayO[2] == 6))||((arrayO[0] == 1 ||arrayO[0] == 2 || arrayO[0] == 3) &&(arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3)||((arrayO[1] == 1 ||arrayO[1] == 2 || arrayO[1] == 3) && (arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3))||((arrayO[3] == 1 ||arrayO[3] == 2 || arrayO[3] == 3) && (arrayO[2] == 1 ||arrayO[2] == 2 || arrayO[2] == 3)))))||
                    ((arrayO[4] == 7 ||arrayO[4] == 8 || arrayO[4] == 9)&&((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) &&(arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9)||((arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9))|| ((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9))||((arrayO[0] == 7 ||arrayO[0] == 8 || arrayO[0] == 9) &&(arrayO[3] == 7 ||arrayO[3] == 8 || arrayO[3] == 9)||((arrayO[1] == 7 ||arrayO[1] == 8 || arrayO[1] == 9) && (arrayO[3] == 7 ||arrayO[3] == 8 || arrayO[3] == 9))||((arrayO[3] == 7 ||arrayO[3] == 8 || arrayO[3] == 9) && (arrayO[2] == 7 ||arrayO[2] == 8 || arrayO[2] == 9)))))||
                    ((arrayO[4] == 2 ||arrayO[4] == 5 || arrayO[4] == 8)&&((arrayO[0] == 2 ||arrayO[0] == 5 || arrayO[0] == 8) &&(arrayO[1] == 2 ||arrayO[1] == 5 || arrayO[1] == 8)||((arrayO[1] == 2 ||arrayO[1] == 5 || arrayO[1] == 8) && (arrayO[2] == 2 ||arrayO[2] == 5 || arrayO[2] == 8))||((arrayO[0] == 2 ||arrayO[0] == 8 || arrayO[0] == 5) && (arrayO[2] == 2 ||arrayO[2] == 8 || arrayO[2] == 5))||((arrayO[0] == 2 ||arrayO[0] == 8 || arrayO[0] == 5) &&(arrayO[3] == 2 ||arrayO[3] == 8 || arrayO[3] == 5)||((arrayO[1] == 2 ||arrayO[1] == 8 || arrayO[1] == 5) && (arrayO[3] == 2 ||arrayO[3] == 8 || arrayO[3] == 5))||((arrayO[3] == 2 ||arrayO[3] == 8 || arrayO[3] == 5) && (arrayO[2] == 2 ||arrayO[2] == 8 || arrayO[2] == 5)))))|| 
                    ((arrayO[4] == 3 ||arrayO[4] == 6 || arrayO[4] == 9)&&((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9)||((arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9) && (arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9))||((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9))||((arrayO[0] == 3 ||arrayO[0] == 6 || arrayO[0] == 9) &&(arrayO[3] == 3 ||arrayO[3] == 6 || arrayO[3] == 9)||((arrayO[1] == 3 ||arrayO[1] == 6 || arrayO[1] == 9) && (arrayO[3] == 3 ||arrayO[3] == 6 || arrayO[3] == 9))||((arrayO[3] == 3 ||arrayO[3] == 6 || arrayO[3] == 9) && (arrayO[2] == 3 ||arrayO[2] == 6 || arrayO[2] == 9)))))||
                    ((arrayO[4] == 3 ||arrayO[4] == 5 || arrayO[4] == 7)&&((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7)||((arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7) && (arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7))||((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7))||((arrayO[0] == 3 ||arrayO[0] == 5 || arrayO[0] == 7) &&(arrayO[3] == 3 ||arrayO[3] == 5 || arrayO[3] == 7)||((arrayO[1] == 3 ||arrayO[1] == 5 || arrayO[1] == 7) && (arrayO[3] == 3 ||arrayO[3] == 5 || arrayO[3] == 7))||((arrayO[3] == 3 ||arrayO[3] == 5 || arrayO[3] == 7) && (arrayO[2] == 3 ||arrayO[2] == 5 || arrayO[2] == 7)))))){
                        setTimeout(() => {
                            swal("O won the match")
                            setInterval(() => {
                                window.location.reload() 
                        }, 2000);
                        
                        }, 500);
                        draw = false
                    }
                    
                }
                
        }
    
    })
    
}