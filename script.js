content = [ [	{	
				 	tag: "БЛОГИ",
					title: "6 лайфхаков, как привить любовь к чтению",
					time: "Читать: 1 мин",
					image: "image/1.png",
				}, {
				 	tag: "БЛОГИ",
					title: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)",
					time: "Читать: 4 мин",
					image: "image/2.png",
				}, {
				 	tag: "БЛОГИ",
					title: "Пройти художку и музыкалку. И не пожалеть",
					time: "Читать: 2 мин",
					image: "image/3.jpg",
				}, {
				 	tag: "БЛОГИ",
					title: "Эпонимы в классе: как связаны теорема Пифагора и русский язык",
					time: "Читать: 5 мин",
					image: "image/4.png",
				}], [ {
				 	tag: "БЛОГИ",
					title: "Как подростки учатся в детдомах и почему им важна помощь",
					time: "Читать: 2 мин",
					image: "image/5.png",
				}, {
				 	tag: "БЛОГИ",
					title: "5 памятников животным, которые научат детей состраданию",
					time: "Читать: 5 мин",
					image: "image/6.jpg",
				}, {
				 	tag: "БЛОГИ",
					title: "Как отстоять на апелляции первичные баллы ЕГЭ",
					time: "Читать: 4 мин",
					image: "image/7.png",
				}, {	
				 	tag: "БЛОГИ",
					title: "Интерес к музыке или буллинг: почему дети хотят учиться дома",
					time: "Читать: 1 мин",
					image: "image/8.jpg",
				}], [{
				 	tag: "БЛОГИ",
					title: "Какие вопросы стоит задать, чтобы выбрать школу",
					time: "Читать: 2 мин",
					image: "image/9.jpg",
				}, {
				 	tag: "БЛОГИ",
					title: "Дисморфофобия, булимия и нервная анорексия: как подростки живут с РПП",
					time: "Читать: 5 мин",
					image: "image/10.jpg",
				}, {
				 	tag: "БЛОГИ",
					title: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)",
					time: "Читать: 4 мин",
					image: "image/2.png",
				} ,{	
				 	tag: "БЛОГИ",
					title: "6 лайфхаков, как привить любовь к чтению",
					time: "Читать: 1 мин",
					image: "image/1.png",
				}] 
			];

var parent = document.getElementById('frontpage');
			
var j = 0;

function more() {	
	if (j<=content.length) {						
		for (let i = 0; i < 4; i++) {
			var div = document.createElement('div');
			div.innerHTML = 
				`<div class="card">
					<a href="">
						<div class="card-image">
							<img src="${content[j][i].image}">
						</div>
						<div>
							<div class="card-tag">${content[j][i].tag}</div>
							<div class="card-title">${content[j][i].title}</div>
							<div class="card-time">
								<i class="far fa-clock"></i>
								<span>${content[j][i].time}</span>
							</div>
						</div>
					</a>
				</div> `;
			parent.appendChild(div);
		}	
	}					
    return j++;
};

document.getElementById('openMenu').onclick = function() {

	if (document.getElementById('iconMenu').style.display == 'block') {		
    	document.getElementById('iconMenu').style.display = 'none';
    	document.getElementById('openMenuI').style.display = 'block';
    	document.getElementById('openMenuImg').style.display = 'none';
	} else {
		document.getElementById('iconMenu').style.display = 'block'
		document.getElementById('openMenuI').style.display = 'none';
		document.getElementById('openMenuImg').style.display = 'block';
	}
};

function showWindow() {
	document.getElementById('window').style.display = 'block';

};

function closeWindow() {
	document.getElementById('window').style.display = 'none';
};

function checkEmail() {

	var reg = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
	var email = document.getElementById( "email" ).value;

	if ( reg.test( email )) {
		showWindow();
	} else if ( email.length < 1 ) {
		alert( "Введите email" );
	} else {
		alert( "Неверный формат" );
	};
};

