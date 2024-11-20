'use strict'

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;

//page
const page = {
    menu: document.querySelector('.panel__list'),
    header: {
        title: document.querySelector('.header__title'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar')
    },
    content: {
        daysContainer: document.getElementById('days'),
        nextDay: document.querySelector('.habbit__day')
    },
    popup: {
        index: document.getElementById('add__habbit--popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]')
    }
}


/* utils */

function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY) // после получения данных переходим к парсингу

    const habbitsArray = JSON.parse(habbitsString)
    if(Array.isArray(habbitsArray)) { // проверка, на получения массива данных
        habbits = habbitsArray
    }
}

//кнопка добавления и закрытия popup
function togglePopup() {

    if(page.popup.index.classList.contains('cover__hidden')) {
        page.popup.index.classList.remove('cover__hidden')
        
    } else {
        page.popup.index.classList.add('cover__hidden')
    }
    /* мой код
    const cover = document.querySelector('.cover')
    const cover__hidden = document.querySelector('.cover__hidden')

    if(cover) {
        cover.classList.add('cover__hidden')
        cover.classList.remove('cover')
    } else if(cover__hidden) {
        cover__hidden.classList.add('cover')
        cover__hidden.classList.remove('cover__hidden')
    }
    */
}

// сохранение данных
function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits))
}

function resetForm(form, fields) {
    for(const field of fields) {
        form[field].value = '';
    }
}


// используется для сбора информации с полей input
function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for(const field of fields) {
        const fieldValue = formData.get(field)
        form[field].classList.remove('error')
        if(!fieldValue) {
            form['field'].classList.add('error')
        }
        res[field] = fieldValue
    }

    let isValue = true
    for(const field of fields) {
        if(!res[field]) {
            isValue = false
        }
    }

    if(!isValue) {
        return
    }

    return res
}

// render 
function rerenderMenu(activeHabbit) {
    page.menu.innerHTML = ''; // Очистка меню перед ререндерингом

    for(const habbit of habbits) { // используем перебор массива данных
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`)
        if(!existed) {
            //создание
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('panel__item');

            element.addEventListener('click', () => rerender(habbit.id)) // вызываем для того чтобы менять активную иконку

            element.innerHTML = `<img src="img/${habbit.icon}.svg" alt="${habbit.name}" />`;
            if(activeHabbit.id === habbit.id) {
                element.classList.add('panel__item--active')
            }
            page.menu.appendChild(element);

            continue; // добавляем чтобы перейти к следующему элементу цикла, если не проходит проверку
        }
        if(activeHabbit.id === habbit.id) {
            existed.classList.add('panel__item--active')
        } else {
            existed.classList.remove('panel__item--active')
        }
    }
}


function rerenderHead(activeHabbit) {
    page.header.title.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;

    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

// добавление контента
function rerenderContent(activeHabbit) {
    page.content.daysContainer.innerHTML = '';
    for(const index in activeHabbit.days) {
        const element = document.createElement('div')
        element.classList.add('habbit')
        element.innerHTML = ` <div class="habbit__day">День ${Number(index) + 1}</div>
                        <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
                        <button class="habbit__delete" onclick="deleteDay(${index})">
                            <img class="habbit__delete--img" src="img/delete.svg" alt="корзина удаления ${Number(index) + 1} дня">
                        </button>`
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`
}


function rerender(activeHabbitId) {
    globalActiveHabbitId = activeHabbitId
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
    if(!activeHabbit) {
        return
    }
    document.location.replace(document.location.pathname + '#' + activeHabbitId)
    rerenderMenu(activeHabbit)
    rerenderHead(activeHabbit)
    rerenderContent(activeHabbit)
}


// work with days
function addDays(event) {
    event.preventDefault(); 
    const data = validateAndGetFormData(event.target, ['comment'])
    if(!data) {
        return
    }


    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.concat([{ comment: data.comment }])
            }
        }
        return habbit
    });

    resetForm(event.target, ['comment'])

    rerender(globalActiveHabbitId);
    saveData()
}

function deleteDay(index) {
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            habbit.days.splice(index, 1);
            return {
                ...habbit,
                days: habbit.days
            }
        }
        return habbit
    })
    rerender(globalActiveHabbitId);
    saveData()
}

// working with habbits
function setIcon(context, icon) {
    page.popup.iconField.value = icon
    const activeIcon = document.querySelector('.icon.icon__active')
    activeIcon.classList.remove('icon__active')
    context.classList.add('icon__active')
}

// добавление привычки через popup
function addHabbit(event) {
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['name', 'icon', 'target']);
    if(!data) {
        return
    }

    const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0)
    let finalMaxId = maxId + 1
    habbits.push({
        id: finalMaxId,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: []
    })

    console.log(habbits)

    resetForm(event.target, ['name', 'target'])
    togglePopup();
    saveData()
    rerender()
}


function deleteHabbit() {
    if (!globalActiveHabbitId) return; // Проверяем, что выбран раздел

    // Удаляем привычку по ID
    habbits = habbits.filter(habbit => habbit.id !== globalActiveHabbitId);
    
    // Если после удаления привычек больше нет, сбрасываем интерфейс
    if (habbits.length === 0) {
        page.header.title.innerText = "-";
        page.content.daysContainer.innerHTML = '';
        page.header.progressPercent.innerText = '0%';
        page.header.progressCoverBar.setAttribute('style', 'width: 0%');
    } else {
        // Обновляем интерфейс с первой доступной привычкой
        rerender(habbits[0].id);
    }

    saveData();  // Сохраняем изменения в localStorage
}

// init
( () => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''))
    const urlHabbit = habbits.find(habbit => habbit.id == hashId);
    if(urlHabbit) {
        rerender(urlHabbit.id)
    } else {
        rerender(habbits[0].id)
    }
})();



