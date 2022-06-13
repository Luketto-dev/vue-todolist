//Descrizione:
//Rifare l’esercizio della to do list.
//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

//MILESTONE 1
//Stampare all’interno di una lista, un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

//MILESTONE 2
//Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.

//MILESTONE 3
//Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto
//e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const toDoList = [
    {
        text : "fare la spesa",
        done: true
    },
    {
        text : "andare in palestra",
        done: false
    },
    {
        text : "completare esercizio toDoList",
        done: false
    },
    {
        text : "cercare lavoro",
        done: true
    },
    {
        text : "aiutare papà in giardino",
        done: false
    },
    {
        text : "aiutare mamma nelle faccende domestiche",
        done: true
    },
]


const toDoListApp = new Vue({
    el: "#note",
    data:{
        list : toDoList,
        toDoText : ""
    },
    methods:{
        deleteToDo : function(indice){
            this.list.splice(indice,1)
        },
        addToDo : function(){
            let newTask = {
                text : this.toDoText,
                done: false,
            }

            this.list.push(newTask)

        }
    }
})