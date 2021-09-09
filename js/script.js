$('document').ready(function () {

    // Показать пользователя
    $('.dropdown-user').on('click', function () {
        $('.dropdown-menu-user').toggleClass('show');
    });

    // Разблокировать 
    $('.card-system__form-api__btn-dis').on('click', function () {
        $('#apiKey').removeAttr('disabled');
    });

    // Рандом АПИ ключа
    $('.card-system__form-api__btn-random').on('click', function () {
        let random = Math.random().toString(36);
        $('#apiKey').val(random);
    });

    // Расписание Понедельник
    $('#checkboxMonday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--monday').css('pointer-events', 'auto');
        } else {
            $('.input-group--monday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
        }
    });

    $('.btn-addTimeMonday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeMonday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeMonday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });

    // Расписание Вторник
    $('#checkboxTuesday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--tuesday').css('pointer-events', 'auto');
        } else {
            $('.input-group--tuesday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
        }
    });

    $('.btn-addTimeTuesday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeTuesday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeTuesday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });




});






// Закидываю данные с попапа "Добавить сайт" в объект
const formAddSite = document.querySelector('#form-addSite');

formAddSite.addEventListener('submit', (e) => {
    e.preventDefault();


    // const sitePlatform = formAddSite.querySelector('[name="sitePlatform"]'),
    //       siteLink = formAddSite.querySelector('[name="siteLink"]'),
    //       siteName = formAddSite.querySelector('[name="siteName"]')


    // let siteData = {
    //     platform: sitePlatform.value,
    //     link: siteLink.value,
    //     name: siteName.value,
    // };

    const fields = formAddSite.querySelectorAll('input, select');
    const siteData = {};

    fields.forEach(field => {
        const { name, value } = field;

        siteData[name] = value;
    });

    console.log(siteData);


});



const generalForm = document.querySelector('#generalForm');

generalForm.addEventListener('submit', (e) => {
    e.preventDefault();


    // const generalFields = generalForm.querySelectorAll('input, select, checkbox');
    // const generalData = {};


    // generalFields.forEach(generalField => {
    //     const{name, value} = generalField;

    //     generalData[name] = value;
    // });


    const formData = new FormData(generalForm);
    const generalData = Object.fromEntries(formData.entries());

    console.log(generalData);
});



let tableData = [
    {
        'name': 'Иван Иванов',
        'contactType': 'Телеграм',
        'address': 'Настроено',
        'description': 'Основной модуль',
        'verification': '',
        'editing': ''
    },

    {
        'name': 'Иван Иванов',
        'contactType': 'E-mail',
        'address': 'ii@google.com',
        'description': 'Основной модуль',
        'verification': '',
        'editing': ''
    },

    {
        'name': 'Игорь Семенов',
        'contactType': 'Телеграм',
        'address': 'Настроено',
        'description': 'Подсистема мониторинга',
        'verification': '',
        'editing': ''
    },

    {
        'name': 'Николай Тополев',
        'contactType': 'Телеграм',
        'address': 'Не подтверждён',
        'description': 'Мимо проходил',
        'verification': '29-6824',
        'editing': ''
    }
];

$('#table').DataTable({
    data: tableData,
    columns: [
        { data: 'name' },
        { data: 'contactType' },
        { data: 'address' },
        { data: 'description' },
        { data: 'verification' },
        { data: 'editing' }
    ]

});