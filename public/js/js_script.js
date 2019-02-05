function MenuItem(name, kcal, glutenFree, lactoseFree) {
	this.name = name;
	this.kcal = kcal;
	if (glutenFree == true) {
		this.glutenFree = true;
	}
	else {
		this.glutenFree = false;
	}
	if (lactoseFree == true) {
		this.lactoseFree = true;
	}
	else {
		this.lactoseFree = false;
	}
	this.burger = function() {
		return this.name + ' ' + this.kcal + 'kCal';
	}
}

var american = new MenuItem('The American Burger', '700', false, false);
var classic = new MenuItem('The Classic Burger', '623', false, false);
var halloumi = new MenuItem('The Halloumi Burger', '591', false, false);
var chicken = new MenuItem('The Chicken Burger', '600', false, true);
var special = new MenuItem('The Special Burger', '675', true, false);

let menu = [];

function addBurger(name, kcal, glutenFree, lactoseFree) {
	menu.push({name, kcal, glutenFree, lactoseFree});
}

addBurger(american.name, american.kcal, american.glutenFree, american.lactoseFree);
addBurger(classic.name, classic.kcal, classic.glutenFree, classic.lactoseFree);
addBurger(halloumi.name, halloumi.kcal, halloumi.glutenFree, halloumi.lactoseFree);
addBurger(chicken.name, chicken.kcal, chicken.glutenFree, chicken.lactoseFree);
addBurger(special.name, special.kcal, special.glutenFree, special.lactoseFree);

var lenghtMenu = menu.length; 

for (var i = 0; i < lenghtMenu; i++) {
	var burgerDiv = document.createElement("DIV");					

	var nameOfBurger = document.createTextNode(burgers[i].name);
	burgerDiv.appendChild(nameOfBurger);

	var checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");
	checkbox.name = "burgerCheckbox";
	checkbox.id = burgers[i].name;
	burgerDiv.appendChild(checkbox);

	var imgOfBurger = document.createElement("IMG");
	imgOfBurger.src = (burgers[i].img);
	imgOfBurger.classList.add("img");
	burgerDiv.appendChild(imgOfBurger);

	var burgerUl = document.createElement("UL");						
	burgerDiv.appendChild(burgerUl);	

	var kcalOfBurger = document.createTextNode(burgers[i].kcal + ' kCal');	
	var kcalLi = document.createElement("LI");						
	kcalLi.appendChild(kcalOfBurger);
	burgerUl.appendChild(kcalLi);								
			
	if (burgers[i].glutenFree == true) {										
		var gluten = document.createTextNode('Gluten free');			
		var glutenLi = document.createElement("LI");
		glutenLi.appendChild(gluten);
		burgerUl.appendChild(glutenLi);
	}

	if (burgers[i].lactoseFree == true) {								
		var lactose = document.createTextNode('Lactose free');			
		var lactoseLi = document.createElement("LI");
		lactoseLi.appendChild(lactose);
		burgerUl.appendChild(lactoseLi);
	}

	document.getElementById("burgers").appendChild(burgerDiv);
}

function allBurgers() {
	return document.getElementsByName("burgerCheckbox");
}

var button = document.getElementById("submitButton");
button.onclick = function () {	
	var p1 = document.createElement("H2");
	var header = document.createTextNode("Order information");
	p1.appendChild(header);
	document.getElementById("orderConfirmation").appendChild(p1);

	var p2 = document.createElement("P");
	var fullname = document.getElementById("fullname").value;
	var textFullName = document.createTextNode("Name: " + fullname);
	p2.appendChild(textFullName);
	document.getElementById("orderConfirmation").appendChild(p2);

	var p3 = document.createElement("P");
	var email = document.getElementById("email").value;
	var textEmail = document.createTextNode("Email: " + email);
	p3.appendChild(textEmail);
	document.getElementById("orderConfirmation").appendChild(p3);

	var p4 = document.createElement("P");
	var street = document.getElementById("street").value;
	var textStreet = document.createTextNode("Street: " + street);
	p4.appendChild(textStreet);
	document.getElementById("orderConfirmation").appendChild(p4);

	var p5 = document.createElement("P");
	var house = document.getElementById("housenr").value;
	var textHouse = document.createTextNode("House nr: " + house);
	p5.appendChild(textHouse);
	document.getElementById("orderConfirmation").appendChild(p5);

	var p6 = document.createElement("P");
	var pay = document.getElementById("payment");
	var payment = pay.options[pay.selectedIndex].value;
	var textPayment = document.createTextNode("Payment: " + payment);
	p6.appendChild(textPayment);
	document.getElementById("orderConfirmation").appendChild(p6);

	var p7 = document.createElement("P");
	var gender = document.querySelector('input[name="gender"]:checked').value;
	var textGender = document.createTextNode("Gender: " + gender);
	p7.appendChild(textGender);
	document.getElementById("orderConfirmation").appendChild(p7);

	var p8 = document.createElement("P");

	p8.appendChild(document.createTextNode("Ordered burgers: "));
	for (burger in allBurgers()) {
		if (allBurgers()[burger].checked == true) {
			p8.appendChild(document.createTextNode(allBurgers()[burger].id + " "));
		}
	}
	document.getElementById("orderConfirmation").appendChild(p8);
}




