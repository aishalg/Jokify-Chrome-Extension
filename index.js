const getQuotes = async() => {
    try{
            const res = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await res.json();
            const myQuote = document.querySelector("#myQuote");
            myQuote.innerHTML= data.value;
    } catch(error) {}
};

window.addEventListener("load" , () =>{
    getQuotes();
})

