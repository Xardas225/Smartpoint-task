$('document').ready(function () {

    // Показать пользователя
    $('.dropdown-user').on('click', function () {
        $('.dropdown-menu-user').toggleClass('show');
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



    // Инициализирую таблицу
    let table = $('#table').DataTable(
        {
            data: tableData,
            dom: 'Bfrtip',
            columns: [
                { data: 'name' },
                { data: 'contactType' },
                { data: 'address' },
                { data: 'description' },
                { data: 'verification' },
                {
                    data: function () {
                        return "<button type='button' class='btn btnChangeDataTable btn-md' data-toggle='modal' data-target='#modalDataTable'></button>"
                    }
                }
            ],
            select: true

        });


    // Привязка выбранного события к строке
    $('#table').on('click', '.btnChangeDataTable', 'tr', function (e) {

        console.log(e.target.parentElement)

        // Получить строку из таблицы
        var row = table.row(e.target.parentElement.parentElement).data();
        var name = row.name;
        desc = row.description;
        address = row.address;
        contactType = row.contactType;

        // Функция добавления инпутов в модальное окно с данными из таблицы
        function addedDataModal() {
            return `<div class="mb-3"> 
                        <label for="name" class="form-label"> Укажите название </label>
                        <input name="name" type="text" value="${name}" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Описание</label>
                        <input name="description" type="text" value="${desc}" class="form-control" id="description">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Адрес</label>
                        <input name="address" type="text" value="${address}" class="form-control" id="address">
                    </div>`
        };
        // Функция добавления инпутов в модальное окно с данными из таблицы, если тип Контакта = Телеграм
        function addedDataModalWithTelegram() {
            return `<div class="mb-3"> 
                        <label for="name" class="form-label"> Укажите название </label>
                        <input name="name" type="text" value="${name}" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Описание</label>
                        <input name="description" type="text" value="${desc}" class="form-control" id="description">
                    </div>`
        };

        var dataForModal = addedDataModal();
        var dataForModalWithTelegram = addedDataModalWithTelegram();


        $('#modalDataTable').on('show.bs.modal', function (e) {
            if (contactType === 'Телеграм') {
                $('.modal-body-dataTable').append(dataForModalWithTelegram);
            } else {
                $('.modal-body-dataTable').append(dataForModal);
            }
        });

        $('#modalDataTable').modal('show');

        $('.btn-addDataTable').on('click', changeDataTable);

        function changeDataTable() {
            row.name = $('.modal-body-dataTable #name').val();
            $('#modalDataTable').modal('hide');
        }




        $('#modalDataTable').on('hidden.bs.modal', function (e) {
            $('.modal-body-dataTable').empty();
            dataForModal = '';
            dataForModalWithTelegram = '';
            table.clear().draw();
            table.rows.add(tableData);
            table.columns.adjust().draw();
        });
    });













});

