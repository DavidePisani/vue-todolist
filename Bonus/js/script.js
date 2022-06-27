// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
//  (se done era uguale a false, impostare true e viceversa)

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: "",
            todos: [
                {
                    text : "Seguire la lezione",
                    done : false
                },
                {
                    text : "Fare l'esercizio",
                    done : false
                },
                {
                    text : "Conseganre l'esercizio",
                    done : false
                },
            ]
        },
        methods: {
            // aggiungo un nuovo oggetto all'arrey
            addTodo() {
                if(this.newTodo.length > 0){
                    this.todos.push(
                        {
                            text : this.newTodo,
                            done : false
                        },                     
                    );

                    this.newTodo = "";
                };
            },
            // rimuovo un oggetto dall'arrey
            removeTodo(index){
                this.todos.splice(index,1)

            },
            
            // funzione per switchare da true e folse
            // per far si che si possa switchare tra scritta sbarrata o meno 
            todoDone(todo){

                if (todo.done === false){
                    todo.done = true
                }else{
                    todo.done = false
                }
            },

        }
    }
);