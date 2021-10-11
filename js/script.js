$('document').ready(function () {

    // Показать пользователя
    $('.dropdown-user').on('click', function () {
        $('.dropdown-menu-user').toggleClass('show');
    });




    // СТРАНИЦА ОБЩИЕ

    // Разблокировать поле генерации АПИ ключа
    $('.card-system__form-api__btn-dis').on('click', function () {
        $('#apiKey').removeAttr('disabled');
    });

    // Функция для рандома Апи-ключа
    function str_rand() {
        var result = '';
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
        for (i = 0; i < 30; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        return result;
    }

    $('.card-system__form-api__btn-random').on('click', function () {
        $('#apiKey').val(str_rand());
    });


    // Реализация добавления на страницу интервала времени - элемент Расписание
    let buttonsAddTime = document.querySelectorAll('.btn-addTime');

    for (let buttonAddTime of buttonsAddTime) {
        buttonAddTime.addEventListener('click', addTime);
    };

    function addTime(event) {
        let newTime = event.target.parentElement.querySelector('.addTime');
        newTime.classList.toggle('hide');
    };


    // Поведение чекбокса - элемент Расписание
    let checkboxsTime = document.querySelectorAll('.timetable input[type=checkbox]');

    for (let checkboxTime of checkboxsTime) {
        checkboxTime.addEventListener('change', checkTime);
    };

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
                            "to": event.target.from[0].value
                        }
                    ],
                    "1": [
                        {
                            "from:": event.target.from[1].value,
                            "to": event.target.from[1].value
                        }
                    ],
                    "2": [
                        {
                            "from:": event.target.from[2].value,
                            "to": event.target.from[2].value
                        }
                    ],
                    "3": [
                        {
                            "from:": event.target.from[3].value,
                            "to": event.target.from[3].value
                        }
                    ],
                    "4": [
                        {
                            "from:": event.target.from[4].value,
                            "to": event.target.from[4].value
                        }
                    ],
                    "5": [
                        {
                            "from:": event.target.from[5].value,
                            "to": event.target.from[5].value
                        }
                    ],
                    "6": [
                        {
                            "from:": event.target.from[6].value,
                            "to": event.target.from[6].value
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
                digits: true
            },
            from: {
                required: true
            },
            to: {
                required: true
            }
        },
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
            },
            from: {
                required: false
            },
            to: {
                required: false
            }
        }
    });







    let DataPlatforms = [
        {
            id: 0,
            name: "Google",
            img: ".././images/google.png"
        },
        {
            id: 1,
            name: "Yandex",
            img: ".././images/yandex.png"
        },
        {
            id: 2,
            name: "Flamp",
            img: ".././images/flamp.png"
        }
    ]


    // Страница Опросы - инпут     
    $('.form-select-sites').select2({
        templateResult: formatStateInput,
        templateSelection: formatStateInput,
        minimumResultsForSearch: Infinity,
    });

    function formatStateInput(platform) {
        if (!platform.id) {
            return platform.text;
        }
        let id = platform.id
        let platforms = DataPlatforms[id]
        var $state = $(
            '<span><img src="' + platforms.img + '" style="max-width: 20px; max-height: 20px;" class="img-flag" /> ' + platform.text + '</span>'
        );
        return $state;
    };

    // Модальное окно с добавлением сайта
    $('.select2Platform').select2({
        data: DataPlatforms,
        templateResult: formatStateModal,
        templateSelection: formatStateModal,
        minimumResultsForSearch: Infinity
    });

    function formatStateModal(platform) {
        if (!platform.id) {
            return platform.name;
        }
        var $state = $(
            '<span><img src="' + platform.img + '" style="max-width: 20px; max-height: 20px;" class="img-flag" /> ' + platform.name + '</span>'
        );
        return $state;
    };

    // Окно добавления сайта
    let openModalAddSite = new bootstrap.Modal(document.querySelector('#addSite'));
    let buttonModalAddSite = document.querySelector('.btn-addSite-modal');

    buttonModalAddSite.addEventListener('click', (e) => {
        openModalAddSite.show()
    });


    // Добавление нового сайта в select2
    (function addSites() {

        let formAddSite = document.querySelector('#form-addSite');
        let buttonAddSite = document.querySelector('.btn-addSite');

        buttonAddSite.addEventListener('click', (e) => {
            e.preventDefault();

            const fields = formAddSite.querySelectorAll('input, select');
            const siteData = {};
            fields.forEach(field => {
                const { name, value } = field;
                siteData[name] = value;
            });

            var newOption = new Option(siteData.title, siteData.id, siteData.link, false, false);
            $('.form-select-sites').append(newOption).trigger('change');

            openModalAddSite.hide();
            formAddSite.reset();

            console.log(siteData);

        });

    })()


    const formSiteSave = document.querySelector('#form-site-save');

    formSiteSave.addEventListener('submit', (e) => {
        e.preventDefault();


        const fields = formSiteSave.querySelectorAll('input, select');
        const siteSaveData = {};
        
        fields.forEach(field => {
            debugger;
            const { name, value } = field;

            siteSaveData[name] = value;
        });
        console.log(siteSaveData);
    });



    // Данные для таблицы "Служебные контакты"
    let tableData = [
        {
            'name': 'Иван Иванов',
            'contactType': 'Телеграм',
            'address': 'Настроено',
            'description': 'Основной модуль',
            'verification': '',
            'editing': '<button></button>'
        },

        {
            'name': 'Иван Иванов',
            'contactType': 'E-mail',
            'address': 'ii@google.com',
            'description': 'Основной модуль',
            'verification': '',
            'editing': '<button></button>'
        },

        {
            'name': 'Игорь Семенов',
            'contactType': 'Телеграм',
            'address': 'Настроено',
            'description': 'Подсистема мониторинга',
            'verification': '',
            'editing': '<button></button>'
        },

        {
            'name': 'Николай Тополев',
            'contactType': 'Телеграм',
            'address': 'Не подтверждён',
            'description': 'Мимо проходил',
            'verification': '29-6824',
            'editing': '<button></button>'
        }
    ];

    $('#table').DataTable({
        data: tableData,
        dom: 'Bfrtip',
        columns: [
            { data: 'name' },
            { data: 'contactType' },
            { data: 'address' },
            { data: 'description' },
            { data: 'verification' },
            { data: 'editing' }
        ],
        select: true,
        buttons: [
            'create'
        ]


    });



   


});