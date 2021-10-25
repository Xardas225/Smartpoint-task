$('document').ready(function () {

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


    // Иконки для Select2
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

    // Экспорт данных со страницы "Опросы"
    formSiteSave.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(JSON.stringify(exportDataSite))
    });

})