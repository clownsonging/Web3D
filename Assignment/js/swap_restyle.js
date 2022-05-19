// JavaScript Document
var counter = 0;

function swap(selected) {
	document.getElementById('home').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('monster').style.display = 'none';
	document.getElementById('costa').style.display = 'none';
	document.getElementById('fanta').style.display = 'none';
	
	
	document.getElementById(selected).style.display = 'block';
}
