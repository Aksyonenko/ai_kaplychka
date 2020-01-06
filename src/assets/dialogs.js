
const dialogs = {
	WELCOME: {
		ua_message: 'Вітаю вас, шановні, починаємо церемонію!',
		type: 'MESSAGE_BUTTON',
		label: 'Далі',
		audio: './static/sounds/welcome.mp3',
		next: 'SELECT_USERS'
	},
	SELECT_USERS: {
		ua_message: 'Виберіть кількість учасників і введіть свої імена',
		type: 'SELECT_USERS',
		label: 'Далі',
		audio: './static/sounds/select_users.mp3',
		next: 'TRADITIONAL_TEXT1',
	},
	TRADITIONAL_TEXT1: {
		ua_message: 'Я рада вітати вас #users.',
		change_pattern: '#users',
		type: 'MESSAGE_BUTTON',
		label: 'Що там далі',
		next: 'TRADITIONAL_TEXT2'
	},
	TRADITIONAL_TEXT2: {
		ua_message: '#user, будь ласка, підтвердіть що ви не робот.',
		change_pattern: '#user',
		type: 'NOT_ROBOT',
		label: 'Я не робот',
		next: 'TRADITIONAL_TEXT3'
	},
	TRADITIONAL_TEXT3: {
		ua_message: 'Вступ до шлюбу це суто особистий вчинок, але для того, щоб черпати силу і продовжуватися довгі роки, їх союз повинен схвалюватися рідними, близькими.',
		type: 'MESSAGE_DELAY',
		delay: 10000,
		audio: './static/sounds/TRADITIONAL_TEXT3.mp3',
		next: 'TRADITIONAL_TEXT4',
	},
	TRADITIONAL_TEXT4: {
		ua_message: 'Отже, #users, я звертаюся до вас від імені big-data: Шлюб це серйозний вчинок.',
		change_pattern: '#users',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		next: 'TRADITIONAL_TEXT5',
	},
	TRADITIONAL_TEXT5: {
		ua_message: 'Чи готові ви легко і не роздумуючи дати один одному клятву любові і вірності?',
		type: 'MESSAGE_BUTTON',
		label: 'Так',
		audio: './static/sounds/TRADITIONAL_TEXT5.mp3',
		next: 'TRADITIONAL_TEXT6',
	},
	TRADITIONAL_TEXT6: {
		ua_message: 'А тепер, прошу вас підкріпити своє рішення клятвою.',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		audio: './static/sounds/TRADITIONAL_TEXT6.mp3',
		next: 'TRADITIONAL_TEXT7',
	},
	TRADITIONAL_TEXT7: {
		ua_message: 'Беру тебе юзер в законні партнери, і обіцяю любити й оберігати тебе, допомагати і вірити тобі  я кину виклик будь-яких перешкод, з якими нам судилося зіткнутися.',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		audio: './static/sounds/TRADITIONAL_TEXT7.mp3',
		next: 'TRADITIONAL_TEXT8',
	},
	TRADITIONAL_TEXT8: {
		ua_message: 'Іменем всього, що ми створили разом, я пропоную тобі свою любов і вірність.',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		audio: './static/sounds/TRADITIONAL_TEXT8.mp3',
		next: 'TRADITIONAL_TEXT9',
	},
	TRADITIONAL_TEXT9: {
		ua_message: 'Обмінявшись клятвами ви оголосили про свій твердий намір жити разом у любові та злагоді впродовж усіх днів, подарованих вам долею.',
		type: 'MESSAGE_BUTTON',
		label: 'Клянемось',
		audio: './static/sounds/TRADITIONAL_TEXT9.mp3',
		next: 'TRADITIONAL_TEXT10',
	},
	TRADITIONAL_TEXT10: {
		ua_message: 'Тепер ви можете на знак вірності обмінятися лайками - цифровим символом, простим і священним. Нехай вони завжди нагадують вам, що ваша любов нескінченна.',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		audio: './static/sounds/TRADITIONAL_TEXT10.mp3',
		next: 'TRADITIONAL_TEXT11',
	},
	TRADITIONAL_TEXT11: {
		ua_message: 'На знак об\'єднання прошу скріпити Ваш союз поцілунком.',
		type: 'MESSAGE_DELAY',
		delay: 6000,
		audio: './static/sounds/TRADITIONAL_TEXT11.mp3',
		next: 'TAKE_PHOTO'
	},
	TAKE_PHOTO: {
		type: 'TAKE_PHOTO',
		next: 'GREETINGS',
		label: 'Зробіть фоточку'
	},
	GREETINGS: {
		ua_message: 'Ураа! Вітаю! Гірко-Гірко! Ахахахаа ха! Вітаю, #users',
		type: 'MESSAGE_BUTTON',
		change_pattern: '#users',
		label: 'Далі',
		next: 'THE_END'
	},
	THE_END: {
		ua_message: 'Наступні будь-ласка',
		type: 'MESSAGE_BUTTON',
		label: 'Next please',
		audio: './static/sounds/THE_END.mp3',
	},

}


// const additional_comments


export default dialogs;