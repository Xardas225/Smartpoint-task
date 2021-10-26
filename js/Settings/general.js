$('document').ready(function () {

    // Поведение чекбокса - элемент Расписание
    let checkboxsTime = document.querySelectorAll('.timetable input[type=checkbox]');

    checkboxsTime.forEach(checkboxTime => checkboxTime.addEventListener('change', checkTime));

    function checkTime(event) {
        let input = event.target.parentElement.parentElement;

        if (!event.target.checked) {
            input.classList.add('pointer-none');
            event.target.classList.add('pointer-auto');
        } else {
            input.classList.remove('pointer-none');
        };
    };

    // Формирование объекта экспорта данных - страница Общие

    $("#generalForm").validate({
        submitHandler: function (form, event) {
            event.preventDefault();

            let workingTime = (function (formElements, map) {

                

                
                for (let i = 0; i < [...formElements.from].length; i++) {
                    
                    let formValue = [...formElements.from][i].value
                    let toValue = [...formElements.to][i].value
                    let checkbox = [...formElements.checkbox][i]


                    if(!checkbox.checked) {
                        continue
                    }
                    if(fromValue = '') {
                        fromValue = null
                    }
                    if(toValue = '') {
                        toValue = null
                    }
                    map.set(i, [
                        {
                            'from': formValue,
                            'to': toValue,
                        }
                    ])
                }

                let obj = Object.fromEntries(map.entries())

                return obj
            })(document.forms.generalForm.elements, new Map())

            let name = event.target.name.value
            timezone = event.target.timezone.value
            key = event.target.key.value
            phones = event.target.phones.value.split(',')


            let data = {
                "name": name,
                "timezone": timezone,
                "key": key,
                "phones": phones,
                "Working Time": workingTime
            };
            console.log(JSON.stringify(data))
        },
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            timezone: {
                required: true
            },
            key: {
                required: true,
                minlength: true
            },
            phones: {
                required: true,
            },
        },
        ignore: [],
        messages: {
            name: {
                required: "Введите имя"
            },
            timezone: {
                required: "Выберите часовой пояс"
            },
            key: {
                required: "Сгенерируйте API-ключ",
                minlength: "Недостаточно символов для создания API-ключа"
            },
            phones: {
                required: "Введите номер телефона"
            }
        }
    });

})




let generalElements = [
    {
        'element': 'input',
        'elementClass': ['form-control', 'name'],
        'type': 'text',
        'name': 'name',
        'label': 'Название',
    },
    {
        'element': 'select',
        'elementClass': ['form-select', 'timezone'],
        'name': 'timezone',
        'label': 'Часовой пояс',
        'attribute': ['aria-label', 'timezone'],
        'options': [
            ['Москва', '1'],
            ['Волгоград  ', '2'],
            ['Екатеринбург', '3'],
            ['Пермь', '4'],
        ]
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'key'],
        'type': 'text',
        'name': 'key',
        'label': 'Ключ АПИ',
        'attribute': ['disabled', true],
    },
    {
        'element': 'button',
        'elementClass': ['btn', 'btn-active'],
        'type': 'button',
        'name': 'active',
        'image': ['src', './images/unlock.svg'],
        'parentElement': 'input-group__key'
    },
    {
        'element': 'button',
        'elementClass': ['btn', 'btn-random'],
        'type': 'button',
        'name': 'random',
        'image': ['src', './images/magic.svg'],
        'parentElement': 'input-group__key'
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'phones'],
        'type': 'text',
        'name': 'phones',
        'label': 'Телефоны',
        'attribute': ['data-role', 'tagsinput']
    },

]


let timetableElements = [
    {
        'element': 'input',
        'elementClass': ['checkbox'],
        'type': 'checkbox',
        'name': 'checkbox',
        'attribute': ['checked', 'true'],
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'form-control__from'],
        'type': 'time',
        'name': 'from',
        'label': 'с',
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'form-control__to'],
        'type': 'time',
        'name': 'to',
        'label': 'по',
    },

    {
        'element': 'button',
        'elementClass': ['btn', 'btn-addTime'],
        'type': 'button',
        'name': 'addTime',
        'image': ['src', './images/clock.svg'],
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'form-control__from', 'hide'],
        'type': 'time',
        'name': 'fromExtra',
        'label': 'с',
    },
    {
        'element': 'input',
        'elementClass': ['form-control', 'form-control__to', 'hide'],
        'type': 'time',
        'name': 'toExtra',
        'label': 'по',
    },

]


class FormBlock {

    /**
     * _element - variety of form 
     * _elementClass - class variety of form
     * _type - type of element
     * _name - name of element
     * _value - value of element
     * _label - create label 
     * _attribute - add attribute
     * appendFormToDocument - method which the append Form in Document
     * appendFormGroupToDocument - method which the append Form Group in Document
     * returnForm - method which return FormBlock
     */

    /**
     * constructor
     */
    constructor() {
        this._element = document.createElement('input')
        this._type = 'text'
        this._elementClass = []
        this._attribute = []
    }

    /**
     * method set element
     */
    set element(element) {
        if (typeof element == 'string' && element.trim() !== '') {
            this._element = document.createElement(element)
        }

        return false
    }

    /**
     * method get element
     */
    get element() {
        return this._element
    }

    /**
     * method set elementClass
     */
    set elementClass(elementClass) {
        this._elementClass = elementClass
        if (elementClass == '' || elementClass == false || elementClass == null || elementClass == undefined) {
            return false
        }

        this._element.classList.add(...elementClass)
    }

    /**
     * method set name
    */
    set name(name) {
        this._name = name
        if (name == '' || name == false || name == null || name == undefined) {
            return false
        }

        this._element.name = this._name
    }

    /**
     * method set value
     */
    set value(value) {
        this._value = value
        if (value.trim() !== '') {
            this._element.value(this._value)
        }

        return false
    }


    /**
     * method set type
     */
    set type(type) {
        this._type = type
        if (type == '' || type == false || type == null || type == undefined) {
            return false
        }

        this._element.type = this._type
    }

    /**
     * method set label
     */
    set label(labelText) {
        if (labelText == '' || labelText == false || labelText == null || labelText == undefined) {
            return false
        } else if (labelText) {
            this._label = document.createElement('label')
            this._label.innerHTML = labelText
        }
    }

    /**
     * method set element
     */
    set attribute(attribute) {
        if (!this._element.hasAttribute(attribute) && attribute) {
            this._element.setAttribute(...attribute)
        }

        return false
    }

    /**
     * method appendFormToDocument
     */
    appendFormToDocument(DOMElement) {
        let div = document.createElement('div')
        let divGroup = document.createElement('div')

        div.classList.add(`${this._name}`)
        divGroup.classList.add('input-group', `input-group__${this._name}`)


        if (this._element && this._label) {
            div.append(this._label)
            divGroup.append(this._element)
        } else if (this._element) {
            divGroup.append(this._element)
        } else {
            return false
        }
        div.append(divGroup)
        DOMElement.append(div)
    }

    /**
     * method returnForm
     */
    returnForm() {
        let div = document.createElement('div')
        div.classList.add('mb-3')

        if (this._element && this._label) {
            div.append(this._label)
            div.append(this._element)
            return div
        } else if (this._element) {
            div.append(this._element)
            return div
        } else {
            return false
        }
    }

    /**
     * method appendFormGroupToDocument
     */
    appendFormGroupToDocument(data, DOMElement) {

        for (let element of data) {

            let keys = Object.keys(element)
            let values = Object.values(element)
            // Проверяем на select
            if (element.element == 'select') {
                let elementData = new SelectBlock()
                for (let i = 0; i < keys.length; i++) {
                    elementData[keys[i]] = values[i]
                }
                elementData.appendFormToDocument(DOMElement)
            } else if (element.element == 'button') {
                let elementData = new ButtonBlock()
                for (let i = 0; i < keys.length; i++) {
                    elementData[keys[i]] = values[i]
                }
                elementData.appendFormToDocument(document.querySelector(`.${element.parentElement}`))
            } else {
                let elementData = new FormBlock()
                for (let i = 0; i < keys.length; i++) {
                    elementData[keys[i]] = values[i]
                }
                elementData.appendFormToDocument(DOMElement)
            }

        }
    }

}




class SelectBlock extends FormBlock {

    set options(options) {
        options.forEach(el => {
            let option = document.createElement('option')
            option.text = el[0].trim()
            option.value = el[1].trim()
            this._element.appendChild(option)
        })
    }
}

class ButtonBlock extends FormBlock {

    set image(attributeImage) {
        let image = document.createElement('img')
        image.classList.add(`${this._name}-image`)
        image.setAttribute(...attributeImage)

        this._element.append(image)
    }

}

class TimetableBlock extends ButtonBlock {

    prependCheckbox(DOMElement) {
        let div = document.createElement('div')
        div.classList.add(`${this.name}`)

        div.append(this.element)

        DOMElement.prepend(div)
    }


    appendTimetableFormGroupToElement(data, DOMElement) {
        for (let i = 0; i < 7; i++) {
            let div = document.createElement('div')
            div.classList.add('timetable-element')

            for (let element of data) {
                let keys = Object.keys(element)
                let values = Object.values(element)
                if (element.element == 'input' && element.type == 'checkbox') {
                    let elementData = new TimetableBlock()
                    for (let i = 0; i < keys.length; i++) {
                        elementData[keys[i]] = values[i]
                    }
                    elementData.appendFormToDocument(div)
                } else if (element.element == 'button') {
                    let elementData = new ButtonBlock()
                    for (let i = 0; i < keys.length; i++) {
                        elementData[keys[i]] = values[i]
                    }
                    elementData.appendFormToDocument(div)
                } else {
                    let elementData = new FormBlock()
                    for (let i = 0; i < keys.length; i++) {
                        elementData[keys[i]] = values[i]
                    }
                    elementData.appendFormToDocument(div)
                }
                DOMElement.append(div)
            }
        }
    }

}

let GeneralForm = new FormBlock()
GeneralForm.appendFormGroupToDocument(generalElements, document.querySelector('.card-system__content'))

let timetableForm = new TimetableBlock()
timetableForm.appendTimetableFormGroupToElement(timetableElements, document.querySelector('.timetable'))


// Разблокировать поле генерации АПИ ключа
$('.btn-active').on('click', function () {
    $('.key').removeAttr('disabled');
});

// Функция для рандома Апи-ключа
function str_rand(num) {
    var result = '';
    var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for (i = 0; i < num; ++i) {
        position = Math.floor(Math.random() * max_position);
        result = result + words.substring(position, position + 1);
    }
    return result;
}

// Рандом значение АПИ-ключа
$('.btn-random').on('click', function () {
    $('.key').val(str_rand(30));
});


// Реализация добавления на страницу интервала времени - элемент Расписание
let buttonsAddTime = document.querySelectorAll('.btn-addTime');

buttonsAddTime.forEach(buttonAddTime => buttonAddTime.addEventListener('click', addTime));

function addTime(event) {
    let eventElement = event.target.parentElement.parentElement.parentElement
    eventElement.querySelector('.fromExtra').classList.toggle('show')
    eventElement.querySelector('.toExtra').classList.toggle('show')
    eventElement.querySelector('.fromExtra').classList.toggle('hide')
    eventElement.querySelector('.toExtra').classList.toggle('hide')
};






