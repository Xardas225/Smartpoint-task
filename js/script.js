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
    $('#select2Platform').select2({
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
            '<span><img src="' + platform.img + '" style="max-width: 25px; max-height: 25px;" class="img-flag" /> ' + platform.name + '</span>'
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

    let formAddSite = document.querySelector('#form-addSite');
    let buttonAddSite = document.querySelector('.btn-addSite');
    let exportDataSite = [];

    (function addSites() {


        buttonAddSite.addEventListener('click', (e) => {
            e.preventDefault();

            const fields = formAddSite.querySelectorAll('input, select');
            const siteData = {};
            fields.forEach(field => {
                const { name, value } = field;
                siteData[name] = value;
            });

            var newOption = new Option(siteData.title, siteData.id, siteData.link, siteData.hidden = str_rand(7), false, false);
            $('.form-select-sites').append(newOption).trigger('change');

            openModalAddSite.hide();
            formAddSite.reset();
            exportDataSite.push(siteData)

            console.log(JSON.stringify(exportDataSite));

        });

    })()


    const formSiteSave = document.querySelector('#form-site-save');

    formSiteSave.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(JSON.stringify(exportDataSite))
    });



    // Данные для таблицы "Служебные контакты"
    let tableData = [
        {
            'name': 'Иван Иванов',
            'contactType': 'Телеграм',
            'address': 'Настроено',
            'description': 'Основной модуль',
            'verification': '',
            'editing': '<button class="table__button"></button>'
        },

        {
            'name': 'Иван Иванов',
            'contactType': 'E-mail',
            'address': 'ii@google.com',
            'description': 'Основной модуль',
            'verification': '',
            'editing': '<button class="table__button"></button>'
        },

        {
            'name': 'Игорь Семенов',
            'contactType': 'Телеграм',
            'address': 'Настроено',
            'description': 'Подсистема мониторинга',
            'verification': '',
            'editing': '<button class="table__button"></button>'
        },

        {
            'name': 'Николай Тополев',
            'contactType': 'Телеграм',
            'address': 'Не подтверждён',
            'description': 'Мимо проходил',
            'verification': '29-6824',
            'editing': '<button class="table__button"></button>'
        }
    ];

    let table = $('#table').DataTable({
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


    });


    // Привязка выбранного события к строке
    $('#table tbody').on('click', 'tr', function () {
        console.log("Привязка выбранного события к строке");
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    var modalDataTable = new bootstrap.Modal(document.querySelector('#modalDataTable'))


    // Привязка события клика к кнопке
    $(".table__button").click(function (e) {
        e.preventDefault();
        

        console.log("Привязка события клика к кнопке");
        var name = table.row('.selected').data().name;
        var desc = table.row('.selected').data().description;

        modalDataTable.show();
        
        let bodyModalDataTable = document.querySelector('.modal-body-dataTable');
        // e.target.parentElement.parentElement.classList.add('selected');

        (function AddinputDataTable() {
            let labelInputName = document.createElement('label')
            let inputName = document.createElement('input');
            let labelInputDesc = document.createElement('label')
            let inputDesc = document.createElement('input');

            if(bodyModalDataTable.hasAttributes)

            labelInputName.textContent = 'Укажите название';
            inputName.value = name;
            labelInputDesc.textContent = 'Описание'
            inputDesc.value = desc;

            bodyModalDataTable.appendChild(labelInputName);
            bodyModalDataTable.appendChild(inputName);
            bodyModalDataTable.appendChild(labelInputDesc);
            bodyModalDataTable.appendChild(inputDesc);

            inputName.classList.add("form-control", "mb-3", "name");
            inputDesc.classList.add("form-control", "mb-3", "desc");

            
        })();

        $('.btn-addDataTable').click(function(e) {
            e.preventDefault();
           
            modalDataTable.hide();
            
            
        })


    });



});