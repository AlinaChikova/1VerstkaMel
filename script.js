var content = [ {	
				 	tag: "БЛОГИ",
					title: "6 лайфхаков, как привить любовь к чтению",
					time: "Читать: 1 мин",
					image: "image/1.png",
					data: "9 Jan 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)",
					time: "Читать: 4 мин",
					image: "image/2.png",
					data: "21 May 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Пройти художку и музыкалку. И не пожалеть",
					time: "Читать: 2 мин",
					image: "image/3.jpg",
					data: "27 Feb 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Эпонимы в классе: как связаны теорема Пифагора и русский язык",
					time: "Читать: 5 мин",
					image: "image/4.png",
					data: "13 May 2019",
				},  {
				 	tag: "БЛОГИ",
					title: "Как подростки учатся в детдомах и почему им важна помощь",
					time: "Читать: 2 мин",
					image: "image/5.png",
					data: "6 May 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "5 памятников животным, которые научат детей состраданию",
					time: "Читать: 5 мин",
					image: "image/6.jpg",
					data: "21 Feb 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Как отстоять на апелляции первичные баллы ЕГЭ",
					time: "Читать: 4 мин",
					image: "image/7.png",
					data: "14 Jan 2019",
				}, {	
				 	tag: "БЛОГИ",
					title: "Интерес к музыке или буллинг: почему дети хотят учиться дома",
					time: "Читать: 1 мин",
					image: "image/8.jpg",
					data: "21 Apr 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Какие вопросы стоит задать, чтобы выбрать школу",
					time: "Читать: 2 мин",
					image: "image/9.jpg",
					data: "23 May 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Дисморфофобия, булимия и нервная анорексия: как подростки живут с РПП",
					time: "Читать: 5 мин",
					image: "image/10.jpg",
					data: "20 May 2019",
				}, {
				 	tag: "БЛОГИ",
					title: "Готовиться к олимпиаде надо с четвёртого класса: поступление в вуз (и не только)",
					time: "Читать: 4 мин",
					image: "image/2.png",
					data: "29 Mar 2019",
				} ,{	
				 	tag: "БЛОГИ",
					title: "6 лайфхаков, как привить любовь к чтению",
					time: "Читать: 1 мин",
					image: "image/1.png",
					data: "21 Apr 2019",
				}
			];

var parent = document.getElementById('frontpage');
			
var j = 0;

function more() {	
	if (j<content.length) {						
		for (let i = 0; i < 4; i++) {
			var div = document.createElement('div');
			div.className = "card";
			div.innerHTML = 
				`<a href="">
					<div class="card-image">
						<img src="${content[j].image}">
					</div>
					<div>
						<div class="card-tag">${content[j].tag}</div>
						<div class="card-title">${content[j].title}</div>
						<div class="card-time">
							<i class="far fa-clock"></i>
							<span>${content[j].time}</span>
						</div>
						<p class="card-date">${content[j].data}</p>
					</div>
				</a>`;
			parent.appendChild(div);
			j++;
		}	
	}					
    return j;
};

function openMobMenu() {
	document.getElementById('iconMenu').style.display = 'block'
	document.getElementById('openMenuI').style.display = 'none';
	document.getElementById('closeMenuImg').style.display = 'block';
	document.getElementById("body").style.overflow = "hidden";
};

function closeMobMenu() {
	document.getElementById('iconMenu').style.display = 'none';
    document.getElementById('openMenuI').style.display = 'block';
    document.getElementById('closeMenuImg').style.display = 'none';
    document.getElementById("body").style.overflow = "auto";
};


function showWindow() {
	document.getElementById('window').style.display = 'block';

};

function closeWindow() {
	document.getElementById('window').style.display = 'none';
};

function checkEmail() {

	var reg = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
	var email = document.getElementById("email").value;

	if (reg.test(email)) {
		showWindow();
	} else if (email.length < 1) {
		alert("Введите email");
	} else {
		alert("Неверный формат");
	};
};

function compare(a, b) {
  if (Date.parse(a.data) > Date.parse(b.data)) return 1;
  else return -1;
};

function deleteCard(j) {
	for (i=0; i<j; i++) {
		parent.removeChild(parent.children[0]);
	};	
};

function sort() {
	for (var i = 0; i<content.length; i++) {
		content.sort(compare);
	};	

	var n = j/4;
	deleteCard(j);
	j = 0;

	while (n>0) {
		more();
		n--;
	};

	return content;
};


// function filter() {
// 	var start = document.getElementById("start").value;
// 	var end = document.getElementById("end").value;
// 	var f = 0;
// 	var filterContent = [];

// 	for (i = 0; i<content.length; i++) {
// 		if (Date.parse(start) < Date.parse(content[i].data) || Date.parse(content[i].data) > Date.parse(end)) {
// 			filterContent[f] = content[i];
// 			f++;		
// 		};
// 	};

// 	for (i = 0; i<filterContent.length; i++) {
// 		alert(filterContent[i].data);
// 	}

// 	deleteCard(j);
// 	j = 0;
// 	// moreFilter();
// };


// function moreFilter() {	
// 						alert("5555");
// 		for (var i = 0; i < 5; i++) {
// 			alert("4444");
// 			var div = document.createElement('div');
// 			div.className = "card";
// 			div.innerHTML = 
// 				`<a href="">
// 					<div class="card-image">
// 						<img src="${filterContent[i].image}">
// 					</div>
// 					<div>
// 						<div class="card-tag">${filterContent[i].tag}</div>
// 						<div class="card-title">${filterContent[i].title}</div>
// 						<div class="card-time">
// 							<i class="far fa-clock"></i>
// 							<span>${filterContent[i].time}</span>
// 						</div>
// 						<p class="card-date">${filterContent[i].data}</p>
// 					</div>
// 				</a>`;
// 			parent.appendChild(div);
		
// 	}					
  
// };




