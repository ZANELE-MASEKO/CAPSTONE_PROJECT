async function fetchUser() {

     const UserName= document.getElementById('username').value.toLowerCase();

    const errorDisplay =document.getElementById('userError');
    const userComplete= document.getElementById('done');

    const message_duration= 5000;

    const hideMessage =(element) => {
        setTimeout(() => {
            element.style.display= 'none';
            element.textContent= '';
        }, message_duration)
    }

    try{
       
        if (UserName == '') {
            throw new Error('Enter your name:')
        }
        const welcome= document.getElementById('welcomeMessage');
        welcome.textContent= `Welcome ${UserName}. Are ready to test your knowledge!`;
        welcome.style.display='block'
        welcome.style.fontSize='24px'
        userComplete.style.display='none';

    }
    catch(error){
        console.log('Name Error',error.message);
        errorDisplay.textContent=error.message;
        errorDisplay.style.display= 'block';
        hideMessage(errorDisplay);
    }
}

export default fetchUser