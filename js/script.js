$('document').ready(function () {

    // Показать пользователя
    $('.dropdown-user').on('click', function () {
        $('.dropdown-menu-user').toggleClass('show');
    });

    // Разблокировать 
    $('.card-system__form-api__btn-dis').on('click', function () {
        $('#apiKey').removeAttr('disabled');
    });

    // Метод добавления данных в select2
    // var data = $.map(siteData, function (obj) {
    //     obj.text = obj.text || obj.title;

    //     return obj;
    // });

    $('.form-select-sites').select2(


    );


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

// Добавление нового сайта в select2
(function addSites() {

    let formAddSite = document.querySelector('#form-addSite')
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
        var newOption = new Option(siteData.title, siteData.id, siteData.link, false, false);
        $('.form-select-sites').append(newOption).trigger('change');

        openModalAddSite.hide()


    });



})()




// formAddSite.addEventListener('submit', (e) => {
//     e.preventDefault();



//     // const sitePlatform = formAddSite.querySelector('[name="sitePlatform"]'),
//     //       siteLink = formAddSite.querySelector('[name="siteLink"]'),
//     //       siteName = formAddSite.querySelector('[name="siteName"]')


//     // let siteData = {
//     //     platform: sitePlatform.value,
//     //     link: siteLink.value,
//     //     name: siteName.value,
//     // };

//     const fields = formAddSite.querySelectorAll('input, select');
//     const siteData = {};

//     fields.forEach(field => {
//         const { name, value } = field;

//         siteData[name] = value;
//     });



//     console.log(siteData);


// });








const generalForm = document.querySelector('#generalForm');

generalForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const formData = new FormData(generalForm);
    const generalData = Object.fromEntries(formData.entries());

    console.log(generalData);
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