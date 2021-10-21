$('document').ready(function () {

    // Разблокировать поле генерации АПИ ключа
    $('.card-system__form-api__btn-dis').on('click', function () {
        $('#apiKey').removeAttr('disabled');
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

    $('.card-system__form-api__btn-random').on('click', function () {
        $('#apiKey').val(str_rand(30));
    });


    // Реализация добавления на страницу интервала времени - элемент Расписание
    let buttonsAddTime = document.querySelectorAll('.btn-addTime');

    buttonsAddTime.forEach(buttonAddTime => buttonAddTime.addEventListener('click', addTime));

    function addTime(event) {
        let newTime = event.target.parentElement.querySelector('.addTime');
        newTime.classList.toggle('hide');
    };


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

    // // Формирование объекта экспорта данных - страница Общие
    // const generalForm = document.querySelector('#generalForm');

    // $("#generalForm").validate({
    //     submitHandler: function (form, event) {

    //         event.preventDefault();

    //         let name = event.target.name.value
    //         timezone = event.target.timezone.value
    //         key = event.target.key.value
    //         phones = event.target.phones.value.split(',')
    //         let data = {
    //             "name": name,
    //             "timezone": timezone,
    //             "key": key,
    //             "phones": phones,
    //             "Working Time": {
    //                 "0": [
    //                     {
    //                         "from:": event.target.from[0].value,
    //                         "to": event.target.to[0].value
    //                     }
    //                 ],
    //                 "1": [
    //                     {
    //                         "from:": event.target.from[1].value,
    //                         "to": event.target.to[1].value
    //                     }
    //                 ],
    //                 "2": [
    //                     {
    //                         "from:": event.target.from[2].value,
    //                         "to": event.target.to[2].value
    //                     }
    //                 ],
    //                 "3": [
    //                     {
    //                         "from:": event.target.from[3].value,
    //                         "to": event.target.to[3].value
    //                     }
    //                 ],
    //                 "4": [
    //                     {
    //                         "from:": event.target.from[4].value,
    //                         "to": event.target.to[4].value
    //                     }
    //                 ],
    //                 "5": [
    //                     {
    //                         "from:": event.target.from[5].value,
    //                         "to": event.target.to[5].value
    //                     }
    //                 ],
    //                 "6": [
    //                     {
    //                         "from:": event.target.from[6].value,
    //                         "to": event.target.to[6].value
    //                     }
    //                 ],
    //             }

    //         };
    //         console.log(JSON.stringify(data))
    //     },
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 3
    //         },
    //         timezone: {
    //             required: true
    //         },
    //         key: {
    //             required: true,
    //             minlength: true
    //         },
    //         phones: {
    //             required: true,
    //         },
    //     },
    //     ignore: [],
    //     messages: {
    //         name: {
    //             required: "Введите имя"
    //         },
    //         timezone: {
    //             required: "Выберите часовой пояс"
    //         },
    //         key: {
    //             required: "Сгенерируйте API-ключ",
    //             minlength: "Недостаточно символов для создания API-ключа"
    //         },
    //         phones: {
    //             required: "Введите номер телефона"
    //         }
    //     }
    // });

})




let elementConfig = [
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
            ['Москва', 'Moscow'],
            ['Волгоград  ', 'Volgograd  '],
            ['Екатеринбург', 'Ekaterinburg'],
            ['Пермь', 'Perm'],
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
        'name': 'active',
        'attribute': ['src', './images/unlock.svg']
    },
    {
        'element': 'button',
        'elementClass': ['btn', 'btn-random'],
        'name': 'random',
        'attribute': ['src', './images/unlock.svg']
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
        if (value.trim() !== '') {
            this._element = document.createElement(element)
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
    attribute(attribute) {
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
        div.classList.add('mb-3', `${this._name}`)

        if (this._element && this._label) {
            div.append(this._label)
            div.append(this._element)
        } else if (this._element) {
            div.append(this._element)
        } else {
            return false
        }
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
        for (let i = 0; i < data.length; i++) {
            let elementData = data[i].name

            switch (data[i].element) {
                case 'select':
                    elementData = new SelectBlock();
                    
                    elementData.element = data[i].element;
                    elementData.addedOptions(data[i].options);
                    elementData.type = data[i].type
                    elementData.elementClass = data[i].elementClass
                    elementData.name = data[i].name
                    elementData.label = data[i].label
                    elementData.attribute(data[i].attribute)

                    elementData.appendFormToDocument(DOMElement)
                    break;
                case 'button':
                    elementData = new ButtonBlock();

                    elementData.element = data[i].element;
                    elementData.type = data[i].type
                    elementData.elementClass = data[i].elementClass
                    elementData.name = data[i].name
                    elementData.label = data[i].label
                    elementData.attribute(data[i].attribute)

                    elementData.appendButtonToElement(DOMElement)
                    break;
                default:
                    elementData = new FormBlock();
                    elementData.element = data[i].element;
                    elementData.type = data[i].type
                    elementData.elementClass = data[i].elementClass
                    elementData.name = data[i].name
                    elementData.label = data[i].label
                    elementData.attribute(data[i].attribute)

                    elementData.appendFormToDocument(DOMElement)
            }

        }


    }

}




class SelectBlock extends FormBlock {

    addedOptions(options) {
        options.forEach(el => {
            let option = document.createElement('option')
            option.text = el[0].trim()
            option.value = el[1].trim()
            this._element.appendChild(option)
        })
    }
}

class ButtonBlock extends FormBlock {

    appendButtonToElement(DOMElement) {
        let div = document.createElement('div')
        div.classList.add(`${this._name}`)
        div.append(this._element)
        DOMElement.append(div)
    }

}


let GeneralForm = new FormBlock()
GeneralForm.appendFormGroupToDocument(elementConfig, document.querySelector('.card-system__content'))






