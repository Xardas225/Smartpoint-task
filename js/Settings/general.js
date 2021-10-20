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

    // Формирование объекта экспорта данных - страница Общие
    const generalForm = document.querySelector('#generalForm');

    $("#generalForm").validate({
        submitHandler: function (form, event) {

            event.preventDefault();

            let name = event.target.name.value
            timezone = event.target.timezone.value
            key = event.target.key.value
            phones = event.target.phones.value.split(',')
            let data = {
                "name": name,
                "timezone": timezone,
                "key": key,
                "phones": phones,
                "Working Time": {
                    "0": [
                        {
                            "from:": event.target.from[0].value,
                            "to": event.target.to[0].value
                        }
                    ],
                    "1": [
                        {
                            "from:": event.target.from[1].value,
                            "to": event.target.to[1].value
                        }
                    ],
                    "2": [
                        {
                            "from:": event.target.from[2].value,
                            "to": event.target.to[2].value
                        }
                    ],
                    "3": [
                        {
                            "from:": event.target.from[3].value,
                            "to": event.target.to[3].value
                        }
                    ],
                    "4": [
                        {
                            "from:": event.target.from[4].value,
                            "to": event.target.to[4].value
                        }
                    ],
                    "5": [
                        {
                            "from:": event.target.from[5].value,
                            "to": event.target.to[5].value
                        }
                    ],
                    "6": [
                        {
                            "from:": event.target.from[6].value,
                            "to": event.target.to[6].value
                        }
                    ],
                }

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


let cardSystem = document.querySelector('.card-system__content')
let cloneElement = document.querySelector('.card-system__content > .mb-3').cloneNode(true)


class Form {

    constructor(type = text, name, labelName, value = '') {
        this._type = type
        this._name = name
        this._value = value
        this._labelName = labelName
    }

    setType(elem) {
        this._type = elem
    }

    setName(elem) {
        this._name = elem
    }

    setValue(elem) {
        this._value = elem
    }

    setLabelName(elem) {
        this._labelName = elem
    }

}

class Input extends Form {

    addedHtml(clone) {
        clone.style.display = 'block'
        clone.querySelector('input').name = this._name
        clone.querySelector('input').type = this._type
        clone.querySelector('input').value = this._value

        clone.querySelector('label').innerHTML = this._labelName

        return clone
    }

    disabled(clone) {
        clone.querySelector('input').disabled = true
    }
}

let inputName = new Input('text','name','Название').addedHtml(cloneElement)
cardSystem.append(inputName)
