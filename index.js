const data = [

    {   id : "1"  ,
        player1 : "Ali" , 
        player2 : "Mohamed", 
        score1 : 1 ,
        score2 : 2 , 
        time : "13 min" ,
        date : "26/06 07:12"
    }, 
    {   id : "2" ,
        player1 : "Jack" , 
        player2 : "Mohamed", 
        score1 : 3 , 
        score2 : 2 , 
        time : "12 min" ,
        date : "26/06 05:12"
    }, 
    {   id : "3" ,
        player1 : "Vahid" , 
        player2 : "Amouta", 
        score1 : 0 ,  
        score2 : 5 ,
        time : "5 min" ,
        date : "26/06 12:12"
    }, 

]


// methods 


const showData = (data) => {

    // data in real world example is a json data received from the api via http get request 

    const table = document.querySelector('table')
    
    data.map(
        (elm, index) => {
            const tr = document.createElement("tr")
            table.appendChild(tr)
            tr.appendChild(document.createElement('td')).innerHTML = elm.player1 
            tr.appendChild(document.createElement('td')).innerHTML = elm.player2 
            tr.appendChild(document.createElement('td')).innerHTML = elm.score1 
            tr.appendChild(document.createElement('td')).innerHTML = elm.score2
            tr.appendChild(document.createElement('td')).innerHTML = elm.time
            tr.appendChild(document.createElement('td')).innerHTML = elm.date
        }
    )
}

showData(data)















// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


