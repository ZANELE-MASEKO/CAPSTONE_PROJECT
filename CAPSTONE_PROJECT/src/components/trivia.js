async function fecthdata() {

     const respone =await fetch(`questions= https://opentdb.com/api.php?amount=10&type=multiple`)

    try{

        const data=await respone.json()

    }
    catch(error) {
        console.log(error)
    }
}

export default fecthdata