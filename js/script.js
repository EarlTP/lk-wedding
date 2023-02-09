jQuery(document).ready(() => {
    const language = navigator.language || navigator.userLanguage;
   alert(language);

    const itTranslation = {
        "title": "Matrimonio Luca & Karen | 11 marzo 2023",
        "msg1": "Siamo lieti di invitarvi al<br>nostro matrimonio"
    };
    const esTranslation = {
        "title": "Boda Luca & Karen | 11 marzo 2023",
        "msg1": "Tenemos el placer de invitarles a<br>ser testigos de nuestra union"
    };

    const translator = new Translator();
    translator.add('it-IT', itTranslation).add('es-ES', esTranslation).translatePageTo(language);

    const sakura = new Sakura('body', {
        colors: [{
                gradientColorStart: 'rgba(98, 76, 171, 0.9)',
                gradientColorEnd: 'rgba(218, 197, 221, 0.9)',
                gradientColorDegree: 120
            },
            {
                gradientColorStart: 'rgba(219, 144, 219, 0.9)',
                gradientColorEnd: 'rgba(231, 160, 229, 0.9)',
                gradientColorDegree: 120
            },
            {
                gradientColorStart: 'rgba(98, 76, 171, 0.9)',
                gradientColorEnd: 'rgba(218, 197, 221, 0.9)',
                gradientColorDegree: 120
            },
        ],
    });

    const eventConfig = {
        name: "Luca & Karen",
        startDate: "2023-03-11",
        icsFile: "https://earltp.github.io/lk-wedding/data/Luca&Karen.ics",
        options: ['Apple', 'Google']
    };

    jQuery('#saveBtn').click((event) => {
        window.atcb_action(eventConfig, event.currentTarget)
    });
});