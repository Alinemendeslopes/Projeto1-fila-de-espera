alert('Bem vindo ao consultório! Esta é a fila de espera:')
let queue = ['1ºLuis', '2ºAntônia', '3ºjosé' ]
alert('1ºLuis, 2ºAntônia, 3ºjosé, esta é a fila de espera')
alert('Um novo paciente entrou na fila, o nome dele é Mátias então ele será o ultimo')
queue.push('4ºMátias')
alert(`${queue}`)
queue.shift('1ºLuis')
alert('O primeiro paciente da fila de espera foi consultado!')
alert(`${queue}`)
