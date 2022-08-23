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