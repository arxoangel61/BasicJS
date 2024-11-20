'use strict';

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
    ],

    // функция создания id 
    newId() {
        let arr = []; // формируем временный пустой массив
        for(let i = 0; i < this.tasks.length; i++) { 
        arr.push(this.tasks[i].id)} // используем перебор элементов чтобы сохранить имеющиеся данный по id 
        arr = arr.pop() // через метод pop() сохраняем в массив последний id 
    
        return function() { // создаем функцию замыкания
            return ++arr
        }
    },


    // функция добавления нового элемента в массив tasks
    getAddTasks: function(newTitle, newPriority) {

        this.tasks.push( {
            title: newTitle,
            id: this.newId()(), // вызываем функцию newid() с замыканием используем ()()
            priority: newPriority,
        })

    },


    //удаление по id элементов массива tasks
    getDelIdTasks: function(delId) {
        let positiveTasks = [];

        for(let i = 0; i < this.tasks.length; i++) {
            // console.log(this.tasks[i].id) 
            if(delId != this.tasks[i].id) { // совершаем перебор элементов, все элементы массива не равные по запросу id будут перенесены в positiveTasks
                positiveTasks.push(this.tasks[i])
            } 
        }
        return this.tasks = positiveTasks // пересохраняем информацию по основному таску в this.tasks присваивая positiveTasks
    },

    // обновление задачи tasks
    getUpgradeTasks: function(tasksId, newTitleTasks, newPriorityTasks) {

        let positiveTasks = [];
        
        for(let i = 0; i < this.tasks.length; i++) {
            if(tasksId != this.tasks[i].id) {
                positiveTasks.push(this.tasks[i]) // формируем новый позитивный tasks, исключая запрошенный на изменение элемент
            }
        }

        positiveTasks.push({ // создаем новый элемент добавляя в него параметры для обновления
            title: newTitleTasks,
            id: tasksId,
            priority: newPriorityTasks
        })
        
        return this.tasks = positiveTasks // пушим в актуальный tasks наши обновление
    },
    

    // cортировка элементов tasks по priority
    getSortPriorityTasks: function(text) {
        if(text == "increase") { // сортировка от меньшего к большему 
            this.tasks.sort((a, b) => a.priority - b.priority);
            return this.tasks 
        } else if(text == "reduce") { // сортировка от большего к меньшему 
            this.tasks.sort((a, b) => b.priority - a.priority);
            return this.tasks 
        } else {
            return 'error'
        }
        
    }

}
/*
// добавляем новый элемент в tasks
toDoList.getAddTasks('Погулять с собакой', 4)
toDoList.getAddTasks('Позвонить Жене', 1)

//удаляем элемент в tasks
toDoList.getDelIdTasks(2)
toDoList.getDelIdTasks(1)

// добавляем новый элемент в tasks
toDoList.getAddTasks('Позвонить Маме', 2)

// производим изменение имеющегося элемента в tasks
toDoList.getUpgradeTasks(4, 'Почитать книгу', 3)

//сортируем элементы в tasks от меньшего к большему
toDoList.getSortPriorityTasks('increase')
*/

// вывод финального результата
// console.log(toDoList.tasks)


const newTask = {
    tasks: [{
        id: 1,
        name: 'text',
        description: 'описание',
        order: 0,
    },],

    add() { // функция соединения свойств 2х обьектов с newTask и полученные с toDoList
        for(let i=0; i < this.tasks.length; i++) {
            
            const mergedObj = Object.assign({}, this.tasks[0], this.tasks[this.tasks.length - 1]); 
           
            return this.tasks.push(mergedObj)
        }  
    },

    newTaskList() { // функция используется для перебора количества ключей и плавного соедения ключей полученных с toDoList в newTask
        let arr = []
        for(let i=0; i<this.tasks.length; i++) {
            //console.log(Object.keys(this.tasks[i]).length)
            if(Object.keys(this.tasks[i]).length == 6) {
                arr.push(this.tasks[i])
            }
        } 
        return this.tasks = arr
    },
    
}

newTask.newId = toDoList.newId // присваиваем функцию авто создание нового id для полученных элементов
const addFunc = toDoList.getAddTasks // создаем функцию для создания новых тасков

const UpgradeNewTasks = toDoList.getUpgradeTasks.bind(newTask) // создаем функцию обновление данных по таскам по id, title и приоритету



// добавляем новые ключи в newTask
addFunc.call(newTask, 'Гулять с женой', 3) // используем call() для добавления нового элимента с ключами из toDolist
newTask.add() // запускаем функцию для соединение ключей с 2х обьектов newTask и toDoList

addFunc.apply(newTask, ['Позвонить Маме', 2]) // работает аналогично с call()
newTask.add()
// добавления нового элемента в newTask.tasks c последующим обновлением данных с использованием функции UpgradeNewTasks()

addFunc.call(newTask, 'Прочитать книгу', 5) // добавляем новый элемент в newTask 

UpgradeNewTasks(4, 'Покормить Кота', 1) // обновляем информацию по новому элементу. 
// Обновление нужно делать до вызова функции add() для того чтобы соедение ключей прошло плавно.

newTask.add() // запускаем функцию для соедения ключей 2х обьектов в одно 
// console.log(newTask.tasks)

const delIdnewTask = toDoList.getDelIdTasks.bind(newTask) //через bind используем функцию для удаления по id элементов добавленных в newTask.tasks

delIdnewTask(2) // удаляем элемент по id с newTask.tasks

newTask.newTaskList() // запускаем функцию для получение с 2еных ключей элементов обьекта tasks


const sortNewTask = toDoList.getSortPriorityTasks.bind(newTask) // через bind используем функцию для сортировки элементов обьекта по приоритету

sortNewTask('increase') // запускаем функцию с командой сортировки от меньшего к большему

console.log(newTask.tasks)


