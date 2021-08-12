function getSelectValue(){
    
    let select = document.getElementById('cityList')
  console.log(document.getElementById("DisplayCity"));

let image= document.getElementsByTagName('img');
for(let i=0;i<image.length;i++){
    console.log(image[i]);
   
   
}
console.log(image);
    let info = document.getElementById('weatherContent')
    // .getElementsByClassName('row')

  
    let CurrTime = document.getElementById("time")
    let timeCurrent = CurrTime.data
   
    console.log(CurrTime);
    console.log(timeCurrent );
    // const container = document.querySelector('#weatherContent');
    // console.log(container);
   
   
    console.log(info);
    console.log(select.options[select.selectedIndex].text)

    console.log(document.createElement("option"))
   
   let log = select.options[select.selectedIndex].text;
   localStorage.setItem('meteo',log)
   localStorage.setItem('info',info)
   localStorage.setItem('time',CurrTime)
   localStorage.setItem('img',image)

//   alert(localStorage.getItem('meteo',log)) 

 
   
}

function getImg(){


}