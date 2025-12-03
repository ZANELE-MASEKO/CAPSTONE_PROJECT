async function fetchUser() {

     const UserName= document.getElementById('username').value.toLowerCase();

    const errorDisplay =document.getElementById('userError');

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
        welcome.textContent= `Welcome ${UserName}`;
        welcome.style.display='block'

    }
    catch(error){
        console.log('Name Error',error.message);
        errorDisplay.textContent=error.message;
        errorDisplay.style.display= 'block';
        hideMessage(errorDisplay);
    }
}

export default fetchUser