function QuizDarkMode() {
    //dark mode elements
    const dark = document.getElementById('darkmode');
    const lightGray = document.getElementById('light-gray');
    const darkGray = document.getElementById('dark-gray');
    const solidBlack = document.getElementById('solid-black');
    const buttons = document.getElementById('button');
    const heading = document.getElementById('main-heading');
    const question = document.getElementById('question');
    const restartButton = document.getElementById('play-again');
   
    const mode= 2;

   if(mode ===2) {
    solidBlack.style.backgroundColor= '#000000';
    darkGray.style.backgroundColor= '#181818';
    lightGray.style.backgroundColor= '#303030';
    buttons.style.backgroundColor= '#dadada';
    heading.style.color= '#FFFFFF';
    question.style.color= '#FFFFFF';
    dark.textContent= 'Lightmode';
    restartButton.style.color= '#000000';
      
   }
}

export default QuizDarkMode;