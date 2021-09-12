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
    // $('.card-system__form-api__btn-random').on('click', function () {
    //     let random = Math.random().toString(36);
    //     $('#apiKey').val(random);
    // });

    // Расписание Понедельник
    $('#checkboxMonday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--monday').css('pointer-events', 'auto');
            $('.input-group--monday').css('opacity', '1');
        } else {
            $('.input-group--monday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--monday').css('opacity', '0.5');
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
            $('.input-group--tuesday').css('opacity', '1');
        } else {
            $('.input-group--tuesday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--tuesday').css('opacity', '0.5');
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

    // Расписание Среда
    $('#checkboxWednesday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--wednesday').css('pointer-events', 'auto');
            $('.input-group--wednesday').css('opacity', '1');
        } else {
            $('.input-group--wednesday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--wednesday').css('opacity', '0.5');
        }
    });

    $('.btn-addTimeWednesday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeWednesday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeWednesday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });

    // Расписание Четверг
    $('#checkboxThursday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--thursday').css('pointer-events', 'auto');
            $('.input-group--thursday').css('opacity', '1');
        } else {
            $('.input-group--thursday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--thursday').css('opacity', '0.5');
        }
    });

    $('.btn-addTimeThursday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeThursday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeThursday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });

    // Расписание Пятница
    $('#checkboxFriday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--friday').css('pointer-events', 'auto');
            $('.input-group--friday').css('opacity', '1');
        } else {
            $('.input-group--friday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--friday').css('opacity', '0.5');
        }
    });

    $('.btn-addTimeFriday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeFriday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeFriday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });

    // Расписание Суббота
    $('#checkboxSaturday').on('click', function () {
        if ($(this).prop('checked')) {
            $('.input-group--saturday').css('pointer-events', 'auto');
            $('.input-group--saturday').css('opacity', '1');
        } else {
            $('.input-group--saturday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--saturday').css('opacity', '0.5');
        }
    });

    $('.btn-addTimeSaturday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeSaturday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeSaturday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });

    // Расписание Воскресенье
    $('#checkboxSunday').on('change', function () {
        if ($(this).prop('checked')) {
            $('.input-group--sunday').css('pointer-events', 'auto');
            $('.input-group--sunday').css('opacity', '1');
        } else {
            $('.input-group--sunday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
            $('.input-group--sunday').css('opacity', '0.5');
        }
    });

    $('.btn-addTimeSunday').on('click', function () {
        if ($(this).hasClass('btn-addTime')) {
            $('.addTimeSunday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeSunday').css('display', 'none');
            $(this).addClass('btn-addTime');
        };
    });


    var data = $.map(siteData, function (obj) {
        obj.text = obj.text || obj.title;

        return obj;
    });

    $('.form-select-sites').select2(
        {
            data: data
        }
    );

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

siteData = [
    {
        'id': 1,
        'title': 'Сайт1',
        'link': 'https',
        'selected': true,
    },
];




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