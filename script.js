function converter(tipo) {   
 let num = parseFloat(document.getElementById('num').value);    
 let resultado = document.getElementById('resultado');  

if (isNaN(num)) {        
resultado.innerText = "Por favor, digite o valor que quer converter! ❌";       
 resultado.style.color = "red"; 
return; 
   }   

let texto = "";  

 if (tipo === "c-f") {        
    let f = (num * 1.8) + 32;       
    texto = `${num}°C equivalem a ${f.toFixed(2)}°F`;
    }
 else if (tipo === "c-k") {
    let k = num + 273.15
    texto = `${num}°C equivalem a ${k.toFixed(2)}K`;
 }
 else if (tipo === "c-f-k") {        
    let f = (num * 1.8) + 32;        
    let k = num + 273.15;       
    texto = `${num}°C equivalem a ${f.toFixed(2)}°F e ${k.toFixed(2)}K`;
    } 
 else if (tipo === "f-c") {
   let c = (num-32)*5/9
   texto = `${num}°F equivalem a ${c.toFixed(2)}°C`
 }
 else if (tipo === "f-k") {
   let k = (num-32)*5/9+273.15
   texto = `${num}°F equivalem a ${k.toFixed(2)}k`
 }  
 else if (tipo === "f-c-k") {
  let c = (num-32)*5/9
  let k = (num-32)*5/9+273.15
  texto = `${num}°F equivalem a ${c.toFixed(2)}°C e ${k.toFixed(2)}K`
 }
 else if (tipo === "k-c") {
   let c = num-273.15
   texto = `${num} K equivalem a ${c.toFixed(2)}°C`
 }
 else if (tipo === "k-f") {
   let f = (num-273.15)*9/5+32
   texto = `${num} K equivalem a ${f.toFixed(2)}°F`
 }
 else   {
   let c = num-273.15
   let f = (num-273.15)*9/5+32
   texto = `${num}K equivalem a ${c.toFixed(2)}°C e ${f.toFixed(2)}F`
 }

 resultado.innerText = texto;   
resultado.style.color = "blue";
}

 function limpar(){
  document.getElementById('num').value = "";  
  let resultado = document.getElementById('resultado');  
  resultado.innerText = "";
  resultado.style.color = "";
}   