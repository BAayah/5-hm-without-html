let body = document.body;

let container = document.createElement('div');

let text1 = document.createElement('p');
let text2 = document.createElement('p');
let text3 = document.createElement('p');
let text4 = document.createElement('p');
let text5 = document.createElement('p');
let text6 = document.createElement('p');
let text7 = document.createElement('p');
let text8 = document.createElement('p');
let text9 = document.createElement('p');

let block1 = document.createElement('div');
let block2 = document.createElement('div');
let block3 = document.createElement('div');
let block4 = document.createElement('div');
let block5 = document.createElement('div');
let block6 = document.createElement('div');
let block7 = document.createElement('div');
let block8 = document.createElement('div');
let block9 = document.createElement('div');

let heads1 = document.createElement('div');
let heads2 = document.createElement('div');
let heads3 = document.createElement('div');
let heads4 = document.createElement('div');
let heads5 = document.createElement('div');
let heads6 = document.createElement('div');
let heads7 = document.createElement('div');
let heads8 = document.createElement('div');
let heads9 = document.createElement('div');

let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');
let box4 = document.createElement('div');
let box5 = document.createElement('div');
let box6 = document.createElement('div');
let box7 = document.createElement('div');
let box8 = document.createElement('div');
let box9 = document.createElement('div');

let hot_tub = document.createElement('img');
let gym = document.createElement('img');
let morning = document.createElement('img');
let car = document.createElement('img');
let boat = document.createElement('img');
let bike = document.createElement('img');
let translate = document.createElement('img');
let arrivals = document.createElement('img');
let takeoff = document.createElement('img');

takeoff.src = './images/takeoff.png';
arrivals.src = './images/arrivals.png';
translate.src = './images/translate.png';
bike.src = './images/bike.png';
boat.src = './images/boat.png';
car.src = './images/car.png';
morning.src = './images/morning.png';
gym.src = './images/gym.png';
hot_tub.src = './images/hot_tub.png';

// class
container.className = 'container';

block1.className = 'block blue';
block2.className = 'block blue';
block3.className = 'block blue';
block4.className = 'block orange';
block5.className = 'block orange';
block6.className = 'block orange';
block7.className = 'block red';
block8.className = 'block red';
block9.className = 'block red';

heads1.className = 'heads head-blue';
heads2.className = 'heads head-blue';
heads3.className = 'heads head-blue';
heads4.className = 'heads head-orange';
heads5.className = 'heads head-orange';
heads6.className = 'heads head-orange';
heads7.className = 'heads head-red';
heads8.className = 'heads head-red';
heads9.className = 'heads head-red';


// texts
heads1.innerHTML = "7:25 AM";
heads2.innerHTML = "8:15 PM";
heads3.innerHTML = "Translate";
heads4.innerHTML = "Bike";
heads5.innerHTML = "Boat";
heads6.innerHTML = "Drive";
heads7.innerHTML = "Morning";
heads8.innerHTML = "Afternoon";
heads9.innerHTML = "Night";

text1.innerHTML = "Boston";
text2.innerHTML = "Madrid";
text3.innerHTML = "Spanish";
text4.innerHTML = "13.1 Miles";
text5.innerHTML = "90 Minutes";
text6.innerHTML = "48 Miles";
text7.innerHTML = "Coffee";
text8.innerHTML = "Gym";
text9.innerHTML = "Hot Tub";

// put
document.body.append(container);
container.append(block1, block2, block3, block4, block5, block6, block7, block8, block9)

block1.append(heads1);
block2.append(heads2);
block3.append(heads3);
block4.append(heads4);
block5.append(heads5);
block6.append(heads6);
block7.append(heads7);
block8.append(heads8);
block9.append(heads9);

block1.append(box1);
block2.append(box2);
block3.append(box3);
block4.append(box4);
block5.append(box5);
block6.append(box6);
block7.append(box7);
block8.append(box8);
block9.append(box9);

box1.append(takeoff);
box2.append(arrivals);
box3.append(translate);
box4.append(bike);
box5.append(boat);
box6.append(car);
box7.append(morning);
box8.append(gym);
box9.append(hot_tub);

box1.append(text1);
box2.append(text2);
box3.append(text3);
box4.append(text4);
box5.append(text5);
box6.append(text6);
box7.append(text7);
box8.append(text8);
box9.append(text9);