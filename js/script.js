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
    $('#checkboxMonday').on('click', function() {
        if($(this).prop('checked')) {
            $('.input-group--monday').css('pointer-events', 'auto');
        } else {
            $('.input-group--monday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
        }
    });

    $('.btn-addTimeMonday').on('click', function() {
        if($(this).hasClass('btn-addTime')){
            $('.addTimeMonday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeMonday').css('display', 'none');
            $(this).addClass('btn-addTime');
        }; 
    });

    // Расписание Вторник
    $('#checkboxTuesday').on('click', function() {
        if($(this).prop('checked')) {
            $('.input-group--tuesday').css('pointer-events', 'auto');
        } else {
            $('.input-group--tuesday').css('pointer-events', 'none');
            $(this).css('pointer-events', 'auto');
        }
    });

    $('.btn-addTimeTuesday').on('click', function() {
        if($(this).hasClass('btn-addTime')){
            $('.addTimeTuesday').css('display', 'block');
            $(this).removeClass('btn-addTime');
        } else {
            $('.addTimeTuesday').css('display', 'none');
            $(this).addClass('btn-addTime');
        }; 
    });
    

   

});


let form  = document.querySelector('#form')

form.onsubmit = () => {
    e.preventDefault();

    let response = fetch('', {
        method: 'POST',
        body: new FormData(formElem)
      });
  
      let result = response.json();
  
      alert(result.message);
};


let formAddSite = document.querySelector('#form-addSite');


formAddSite.addEventListener('submit', function(e) {
    e.preventDefault();


    const sitePlatform = formAddSite.querySelector('[name="sitePlatform"]'),
          siteLink = formAddSite.querySelector('[name="siteLink"]'),
          siteName = formAddSite.querySelector('[name="siteName"]')


    let siteData = {
        platform: sitePlatform.value,
        link: siteLink.value,
        name: siteName.value,
    };

    console.log(siteData)


});