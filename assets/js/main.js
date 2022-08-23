// Button One Start
document.getElementById('selected-btn1').addEventListener('click',function(){
    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        // disabled btn
        const btnDesabaled= document.getElementById('selected-btn1');
        btnDesabaled.setAttribute('disabled',true);
        btnDesabaled.style.backgroundColor='gray';

        //playerName select
        const name = document.getElementById('selected-name1');
        const elemet= name.innerText;
        //add 
        const selectedPlayer= document.getElementById('selected-player');
        const createElement= document.createElement('li');
        createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);

    }else{
    alert('Sorry!!You have crossed limit.');
    }

});
// Button One End

// Button Two Start
document.getElementById('selected-btn2').addEventListener('click',function(){
    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length <5){
         // disabled btn
        const btnDesabaled= document.getElementById('selected-btn2');
        btnDesabaled.setAttribute('disabled',true);
        btnDesabaled.style.backgroundColor='gray';
        //player Name select
        const name = document.getElementById('selected-name2');
        const elemet= name.innerText;

        // add 
        const selectedPlayer= document.getElementById('selected-player');
        const createElement= document.createElement('li');
        createElement.innerText=elemet;

        selectedPlayer.appendChild(createElement);

    }else{
    alert('Sorry!!You have crossed limit.');
    }

});
// Button Two End

// Button Three Start
document.getElementById('selected-btn3').addEventListener('click',function(){

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
         // disabled btn
        const btnDesabaled= document.getElementById('selected-btn3');
        btnDesabaled.setAttribute('disabled',true);
        btnDesabaled.style.backgroundColor='gray';
        //player name select
        const name = document.getElementById('selected-name3');
        const elemet= name.innerText;

        //add 
        const selectedPlayer= document.getElementById('selected-player');
        const createElement= document.createElement('li');
        createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);

    }else{
    alert('Sorry!!You have crossed limit.');
    }

});
// Button Three End

// Button Four Start
document.getElementById('selected-btn4').addEventListener('click',function(){
    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        // disabled btn
        const btnDesabaled= document.getElementById('selected-btn4');
        btnDesabaled.setAttribute('disabled',true);
        btnDesabaled.style.backgroundColor='gray';
        //player name select
        const name = document.getElementById('selected-name4');
        const elemet= name.innerText;
        //add  
        const selectedPlayer= document.getElementById('selected-player');
        const createElement= document.createElement('li');
        createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
 
    }else{
    alert('Sorry!!You have crossed limit.');
    }
});
// Button Four End
