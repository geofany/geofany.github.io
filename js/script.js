function openTab(mid) {
	var i;

	var x = document.getElementsByClassName("tabnya");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}

	document.getElementById(mid).style.display = "block";  

}

function openTabs(bot) {
	var i;

	var x = document.getElementsByClassName("tabnyaa");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}

	document.getElementById(bot).style.display = "block";  

}

function openSearch() {
	document.getElementById("search").style.display = "block";
}

function closeSearch() {
	document.getElementById("search").style.display = "none";
}

function openMenu() {
	document.getElementById("menu").style.display = "block";
}

function closeMenu() {
	document.getElementById("menu").style.display = "none";
}

function openStruktur() {
	document.getElementById("struktur").style.display = "block";
}

function closeStruktur() {
	document.getElementById("struktur").style.display = "none";
}

function openRektor() {
	document.getElementById("rektor").style.display = "block";
}

function closeRektor() {
	document.getElementById("rektor").style.display = "none";
}

function openWrektor1() {
	document.getElementById("wrektor1").style.display = "block";
}

function closeWrektor1() {
	document.getElementById("wrektor1").style.display = "none";
}

function openWrektor2() {
	document.getElementById("wrektor2").style.display = "block";
}

function closeWrektor2() {
	document.getElementById("wrektor2").style.display = "none";
}

function openWrektor3() {
	document.getElementById("wrektor3").style.display = "block";
}

function closeWrektor3() {
	document.getElementById("wrektor3").style.display = "none";
}

function simpan() {
    alert("Data Berhasil Disimpan!");
}