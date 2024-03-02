const btn=document.querySelectorAll(".row")

let num=""
btn.forEach(function(button){
        button.addEventListener("click",(e)=>{
                if(e.target.innerHTML=="="){
                      
                        num=eval(num)
                        document.querySelector(".inpt").value=num

                }
               else if(e.target.innerHTML=="AC"){
                      
                        num=''
                        document.querySelector(".inpt").value=num

                }
                else if(e.target.innerHTML=="X"){
                      
                        num=''
                        document.querySelector(".inpt").value=num

                }
                
                
              
                else{

              
                     
                        num=num+ e.target.innerHTML
                        document.querySelector(".inpt").value=num
                }
                
        })
})