function DarkMode() {
    //dark mode elements
    const dark = document.getElementById('darkmode');
    const lightGray = document.getElementById('light-gray');
    const darkGray = document.getElementById('dark-gray');
    const solidBlack = document.getElementById('solid-black');
    const buttons = document.getElementById('button');
    const text = document.getElementById('content');
    const text2 = document.getElementById('enter-name');
    const userInput =document.getElementById('username');
    const  userError= document.getElementById('userError');
    const welcome= document.getElementById('welcomeMessage');
    const activation= 2;

   if(activation ===2) {
    solidBlack.style.backgroundColor= '#000000';
    darkGray.style.backgroundColor= '#181818';
    lightGray.style.backgroundColor= '#303030';
    userInput.style.backgroundColor= '#797979';
    userInput.style.color= '#FFFFFF';
    buttons.style.backgroundColor= '#dadada';
    text.style.color= '#FFFFFF';
    text2.style.color= '#FFFFFF';
    userError.style.color= '#FF0000';
    welcome.style.color= '#FFFFFF';
    dark.textContent= 'Lightmode';
      
   }
}

export default DarkMode;