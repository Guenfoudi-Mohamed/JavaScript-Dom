                                            // exercice Convert US Dollars to Moroccan Dirhams 
    //html
// <input type="text" class="dollar" placeholder="United States Dollar" min="0" style="width:250px;margin-top:30px;" maxlength="5" >
// <input type="text" class="mad" placeholder="Moroccan Dirham" min="0" style="width:250px;" maxlength="5" >
// <div class="demo"><div>
    
const dollar = document.querySelector('body input.dollar');
    const mad = document.querySelector('body input.mad');
    const demo = document.querySelector('body div.demo');
    demo.style.cssText = `color:red;font-size:18px;width:21px;width:100px;background:yellow; margin:10px;text-align:center;`;
    
    dollar.addEventListener('keyup',function(){
        let money = Number(dollar.value);
        if(money <= 0 || isNaN(money)){mad.value = '';dollar.value = '';demo.textContent = '';}
        else if(!(isNaN(money)) && money.constructor == Number){
            money = (money*9.66);
            let result = String(money);
            money = '';
            let conteur = 0;
            for(let i = 0;i<result.length;i++){
                if(result[i] != '.' && conteur== 0){
                    money += result[i];
                    continue;
                }
                else if(result[i] == '.'){
                    money += result[i];
                    conteur++;
                    continue;
                }
                if(conteur == 3){
                    break;
                }
                money+=result[i];
                conteur++;   
            }
            mad.value = Number(money);
            demo.textContent = mad.value+' MAD';
        }
    });
    mad.addEventListener('keyup',function(){
        let money = Number(mad.value);
        if(money <= 0 || isNaN(money)){mad.value = '';dollar.value = '';demo.textContent = '';}
        else if(!(isNaN(money)) && money.constructor == Number){
            money = (money/9.66);
            let result = String(money);
            money = '';
            let conteur = 0;
            for(let i = 0;i<result.length;i++){
                if(result[i] != '.' && conteur== 0){
                    money += result[i];
                    continue;
                }
                else if(result[i] == '.'){
                    money += result[i];
                    conteur++;
                    continue;
                }
                if(conteur == 3){
                    break;
                }
                money+=result[i];
                conteur++;   
            }
            dollar.value = Number(money);
            demo.textContent = dollar.value+' $';
        } 
    });
    window.addEventListener('load',function(){
        demo.textContent = '';
        dollar.value = '';
        mad.value = '';
    });
/****************************************************/  //Exercice__3 addEventListner('eventName',functionName||functionAnonimous) & removeEventListner('eventName remove',functionName)

<div class="myDiv" style="background-color: coral;color: #000;padding: 40px;">
  <h3 class="title">JavaScript removeEventListener</h3>
  <p>This div element has an onmousemove event handler that displays a random number every time you move your mouse inside this orange field.</p>
  <p>Click the button to remove the div's event handler.</p>
  <button class="btn_Star">Start function</button>
  <button class="btn_Pause">Pause function</button>
</div>
<p class="demo" style="background: yellow;font-size: 18px;width: 21px;height:21px;"></p>
 
const myDiv = document.querySelector('body div.myDiv');
const btns = document.querySelectorAll('body div.myDiv button');   
const demo = document.querySelector('body div.myDiv + p.demo');   
const btnStar = btns[0];
const btnPause = btns[1];
for(let i = 0;i<btns.length;i++){
    btns[i].style.setProperty(`cursor`,`pointer`);  //style for buttons
};
function mouseMove(){
    demo.textContent = Math.round(Math.random() * 100);
};
window.addEventListener('load',function(){
    myDiv.removeEventListener('mousemove',mouseMove);
});
myDiv.addEventListener('mousemove',mouseMove);
btnPause.addEventListener('click',function(){
    myDiv.removeEventListener('mousemove',mouseMove);
    myDiv.onmouseout = demo.textContent = '';
});
btnStar.addEventListener('click',function(){
    myDiv.addEventListener('mousemove',mouseMove);
});
myDiv.addEventListener('mouseout',function(){        //addEventListener() ila brina ga3 les methods tkhdmo en meme temps maxi bha onclick(),... 
    demo.textContent = '';
});

//up_date

const myDiv = document.querySelector('body div.myDiv');
const btns = myDiv.querySelectorAll('div.myDiv button');   
const demo = document.querySelector('body div.myDiv + p.demo');   
const btnStar = btns[0];
const btnPause = btns[1];
let result = '';
for(let i = 0;i<btns.length;i++){
    btns[i].style.setProperty(`cursor`,`pointer`);  //style for buttons
};
window.addEventListener('load',function(){
    myDiv.removeEventListener('mousemove',mouseMove);
});
function mouseMove(){
    result  = (Math.round(Math.random() * 100));
    demo.textContent = result;
};
myDiv.addEventListener('mousemove',mouseMove);
btnStar.addEventListener('click', function(){
    myDiv.addEventListener('mousemove',mouseMove);
}); 
btnPause.addEventListener('click', function(){
    myDiv.removeEventListener('mousemove',mouseMove);
    myDiv.addEventListener('mousemove',function(){                //hna lold methodh drnalha delete, wdrna method wkhlina value constant 
        demo.textContent = result;
    });
});
myDiv.addEventListener('mouseout', function(){                  //addEventListener() ila brina ga3 les methods tkhdmo en meme temps maxi bha onclick(),...
    demo.textContent = '';
}); 

/*******************/   
