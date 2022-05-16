function generarTabla() {
    const numbers = calcularResultados()
    const numberControl = document.getElementById('numberControl').value
    console.log(numbers)

    let table = document.createElement('table')
    table.classList.add('table')
    table.classList.add('m-auto')
    let thead = document.createElement('thead')

    for(i = 0; i<10; i++) {
        let row = document.createElement('tr')
        let column1 = document.createElement('td')
        let column2 = document.createElement('td')
        let column3 = document.createElement('td')
        column1.innerHTML = numberControl + ' x ' + (i + 1)
        column2.innerHTML = " = "   
        column3.innerHTML = numbers[i]
        row.appendChild(column1)
        row.appendChild(column2)
        row.appendChild(column3)
        thead.appendChild(row)
    }
    
    table.appendChild(thead)
    
    document.getElementById('table').appendChild(table)
}

function calcularResultados() {
    let res = []
    const number = Number(document.getElementById('numberControl').value)

    for(i = 0; i<10; i++) {
        res[i] = number * (i + 1)
    }
    
    return res
}