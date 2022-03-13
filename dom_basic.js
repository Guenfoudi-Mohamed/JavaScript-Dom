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
