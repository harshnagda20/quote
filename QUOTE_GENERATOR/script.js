let btn=document.getElementById("quote_btn")
btn.addEventListener("click",()=>{
    let data= async ()=>{
        let api= await fetch("https://dummyjson.com/quotes/random")
        let quoteObj = await api.json()
        let quote=quoteObj.quote
        let quoteAuthor=quoteObj.author
        let quoteTextArea=document.getElementById("quote_text")
        let quoteAuthorArea=document.getElementById("quate_author")
        quoteTextArea.innerHTML=`"${quote}"`
        quoteAuthorArea.innerHTML=`-${quoteAuthor}`
    }
    data()
})
