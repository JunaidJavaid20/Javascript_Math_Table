function Table(event) {

    {
        event.preventDefault()
    }

    let table = document.getElementById('table-number').value
    table = Number(table)
    let first = document.getElementById('first-number').value
    first = Number(first)
    let second = document.getElementById('second-number').value
    second = Number(second)
    let Table = document.getElementById('table-number').value
    let result = ""


    document.getElementById('table').innerHTML = Table


    for (let i = first; i <= second; i++) {

        result += table + " X " + first++ + " = " + (table * i) + "<br/>"


        document.getElementById('result').innerHTML = result

    }

}