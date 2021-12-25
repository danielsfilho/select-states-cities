const cities = {

    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],

}

const formRegister = document.querySelector("#formRegister")

const selectStates = document.querySelector("#selectStates")

const selectCities = document.querySelector("#selectCities")

const divCities = document.querySelector("#div-cities")


selectStates.onchange = function(e) {
    const states = e.target.value

    let citiesList


    if (states === 'sp') {
        citiesList = cities.sp
    }

    if (states === 'rj') {
        citiesList = cities.rj
    }

    let htmlCities = `<option value=''>---Select a city---</option>`

    for(let city of citiesList) {
        htmlCities += `<option value='${city}'>${city}</option>`
    }
    
    selectCities.innerHTML = htmlCities
    divCities.classList.add("visibleCities")
}



formRegister.onsubmit = function(e) {
    e.preventDefault()

    let thereError = false
    let selectState = document.forms['formRegister']['selectCities']
    let selectCity = document.forms['formRegister']['selectStates']

    if(!selectState.value) {
       
        thereError = true
        selectState.classList.add('inputError')
        let span = selectState.nextSibling.nextSibling
        span.innerText = "Select a state."

    }else {
        
        selectState.classList.remove('inputError')
        let span = selectState.nextSibling.nextSibling
        span.innerText = ''
    }
        
    if(!selectCity.value) {
        thereError = true
        selectCity.classList.add('inputError')        
        let span = selectCity.nextSibling.nextSibling
        span.innerText = "Select a city."

    }else {

        selectCity.classList.remove('inputError')
        let span = selectCity.nextSibling.nextSibling
        span.innerText = ''

    }

    if(!thereError) {
        formRegister.submit()
    }
        
}
