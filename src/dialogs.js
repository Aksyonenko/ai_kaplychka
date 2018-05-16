
const dialogs = {
	HELLO_PAGE: {
		ua_message: 'Дорогі друзі та близькі! Від імені ... (ім\'я нареченої) і ... (ім\'я нареченого) я рада вітати всіх вас і дякую за те, що ви зібралися тут розділити з нами цей щасливий момент.',
		type: 'MESSAGE',
		audio: './static/sounds/translate_tts.mp3',
		next: 'HELLO_PAGE_2',
	},
	HELLO_PAGE_2: {
		ua_message: 'Вступ до шлюбу це суто особистий вчинок, але для того, щоб черпати силу і продовжуватися довгі роки, їх союз повинен схвалюватися рідними і близькими.',
		type: 'MESSAGE',
		audio: './static/sounds/translate_tts_2.mp3',
		next: 'USERS_PAGE',
	},
	USERS_PAGE: {
		ua_message: 'Оберіть кількість учасників церемоній та введіть їх ім\'я аба нікнейми',
		type: 'SELECT_USERS',
		audio: './static/sounds/translate_tts_3.mp3',
		next: 'HAHA_PAGE',
	},
	HAHA_PAGE: {
		ua_message: '	хахахах ахахахаха ХААААХАХАХААААА',
		type: 'MESSAGE',
		audio: './static/sounds/translate_tts_3.mp3',
	},



	USER_NAME: {
		ua_message: 'і як тебе звати?'
	},
	QUESTION: {
		ua_message: 'Чи обіцяє лайкати фоточки?'
	},
}

export default dialogs;