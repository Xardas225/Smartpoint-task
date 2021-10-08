$('document').ready(function () {

    // Показать пользователя
    $('.dropdown-user').on('click', function () {
        $('.dropdown-menu-user').toggleClass('show');
    });

    // Разблокировать 
    $('.card-system__form-api__btn-dis').on('click', function () {
        $('#apiKey').removeAttr('disabled');
    });


    $('.form-select-sites').select2();




});









// Реализация добавления на страницу интервала времени
let buttonsAddTime = document.querySelectorAll('.btn-addTime');

for (let buttonAddTime of buttonsAddTime) {
    buttonAddTime.addEventListener('click', addTime);
};

function addTime(event) {
    let newTime = event.target.parentElement.querySelector('.addTime');
    newTime.classList.toggle('hide');
};


// Поведение чекбокса
let checkboxsTime = document.querySelectorAll('.checkbox-time');

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




// Окно добавления сайта
let openModalAddSite = new bootstrap.Modal(document.querySelector('#addSite'));
let buttonModalAddSite = document.querySelector('.btn-addSite-modal');

buttonModalAddSite.addEventListener('click', (e) => {
    openModalAddSite.show()
});

function format(state) {
    if (!state.id) return state.text; // optgroup
    return "<img class='flag' src='images/" + state.id.toLowerCase() + ".png'/>" + state.text;
}


$('.select2Platform').select2();


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
        console.log(siteData);
        var newOption = new Option(siteData.title, siteData.platform, siteData.link, false, false);
        $('.form-select-sites').append(newOption).trigger('change');

        openModalAddSite.hide()
        formAddSite.reset();


    });



})()






const generalForm = document.querySelector('#generalForm');

generalForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.name.value
    timezone = this.timezone.value
    key = this.key.value
    phones = this.phones.value.split(',')

    let data = {
        "name": name,
        "timezone": timezone,
        "key": key,
        "phones": phones,
        "Working Time": {
            "0": [
                {
                    "from:": this.from[0].value,
                    "to": this.from[0].value
                }
            ],
            "1": [
                {
                    "from:": this.from[1].value,
                    "to": this.from[1].value
                }
            ],
            "2": [
                {
                    "from:": this.from[2].value,
                    "to": this.from[2].value
                }
            ],
            "3": [
                {
                    "from:": this.from[3].value,
                    "to": this.from[3].value
                }
            ],
        }

    };

    console.log(JSON.stringify(data))
});





// $("#generalForm").validate({
//     submitHandler: function (e) {
//         $.ajax({
//             url: '/index.php',
//             method: 'post',
//             dataType: 'html',
//             // data: { text: 'Текст' },
//             success: function createExport() {



//             }
//         });
//     },
//     ignore: [],
//     rules: {
//         name: {
//             required: true,
//             minlength: 4
//         },
//         timezone: {
//             required: true
//         },
//         key: {
//             required: true,
//             minlength: 30
//         },
//         phones: {
//             required: true,
//             minlength: 11
//         }
//     }
// });



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


// $('#table tbody').on('click', 'td', function() {
//     var colIndex = table.cell(this).index().column;
//     var rowIndex = table.cell(this).index().row;
//     table.cell(rowIndex, colIndex).data("new")
//   });



const formSiteSave = document.querySelector('#form-site-save');

formSiteSave.addEventListener('submit', (e) => {
    e.preventDefault();


    const fields = formSiteSave.querySelectorAll('input, select');
    const siteSaveData = {};

    fields.forEach(field => {
        const { name, value } = field;

        siteData[name] = value;
    });



    console.log(siteSaveData);


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