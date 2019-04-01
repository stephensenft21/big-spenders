// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    return business.orders.find(i => i > 9000)
})
console.log(bigSpenders)








const displayBigSpenders = () => {
    let outputEl = document.querySelector("#output")    
    outputEl.innerHTML = "<h1>Big Spenders</h1>"
    bigSpenders.forEach(business => {
        outputEl.innerHTML += `
<h2>${business.companyName}</h2>
<section>${business.addressFullStreet}</section>
<section>${business.addressCity} ${business.addressStateCode}, ${business.addressZipCode} </section>`
        outputEl.innerHTML += "<hr>"

    })

}

displayBigSpenders()






















/*"playing with different ways to output information"
business.orders.array.forEach(element => {
    if(element >= 9000){
        return true
}});*/