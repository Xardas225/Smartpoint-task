$('document').ready(function() {
    $('.dropdown-user').on('click', function() {
        $('.dropdown-menu-user').toggleClass('show');
    });
    
    $('.card-system__form-api__btn-dis').on('click', function() {
        $('#apiKey').removeAttr('disabled');
    });

    $('.card-system__form-api__btn-random').on('click', function() {
        let random = Math.random().toString(36);
        $('#apiKey').val(random);
    });
});





