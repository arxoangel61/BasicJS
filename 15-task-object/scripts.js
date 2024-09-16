'use strict';

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
        {
            title: 'Помыть машину',
            id: 2,
            priority: 2,
        },
    ],

    // функция создания id 
    getAddIdTasks: function() {
        let arrId = [];
        let newId;

        for(let i = 0; i < this.tasks.length; i++) {
            arrId.push(this.tasks[i].id) // пушим все id в отдельный массив arrId
        }
        newId = arrId.slice(-1) // методам slice() вырезаем последний элемент массива arrId
        newId = (Number(newId.join()) + 1) // из строчного элемента приобразуем в числовой и добавляем +1 для увелечения числа

        return newId
    },


    // функция добавления нового элемента в массив tasks
    getAddTasks: function(newTitle, newPriority) {

        this.tasks.push( {
            title: newTitle,
            id: this.getAddIdTasks(),
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


// вывод финального результата
console.log(toDoList.tasks)