const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')


const calculateImc = (e) => {
    e.preventDefault()

    if (calculateCm.value === '' || calculateKg.value === '') {

        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Completa la altura y el peso'

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)

    } else {
        //Fórmula IMC
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            imc = Math.round(kg / (cm * cm))

        if (imc < 18.5) {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Tu IMC es ${imc} y por lo tanto estás con bajo peso`
        } else if (imc < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC es ${imc} y por lo tanto estás saludable`
        } else {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Tu IMC es ${imc} y por lo tanto tienes sobrepeso`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(()=>{
            calculateMessage.textContent = ''
        }, 4000)
    }

}

calculateForm.addEventListener('submit', calculateImc)