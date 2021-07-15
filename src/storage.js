function getSelectValue(){

    let select = document.getElementById('cityList');
   console.log(select.options[select.selectedIndex].text)
   let log = select.options[select.selectedIndex].text;
   localStorage.setItem('meteo',log)
//   alert(localStorage.getItem('meteo',log)) 

 
   
}