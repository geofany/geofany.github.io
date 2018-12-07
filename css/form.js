function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function input() {
	var fakultas         = document.forms['biodataDosen']['fakultas'].value;
	var prodi            = document.forms['biodataDosen']['prodi'].value;
	var gelardpn         = document.forms['biodataDosen']['gelardpn'].value;
	var nama             = document.forms['biodataDosen']['nama'].value;
	var gelarblkng       = document.forms['biodataDosen']['gelarblkng'].value;
	var gelar            = document.forms['biodataDosen']['gelar'].value;
	var perguruan        = document.forms['biodataDosen']['perguruan'].value;
	var nip              = document.forms['biodataDosen']['nip'].value;
	var ktp              = document.forms['biodataDosen']['ktp'].value;
	var hp               = document.forms['biodataDosen']['hp'].value;
	var mail             = document.forms['biodataDosen']['mail'].value;
	var propinsi         = document.forms['biodataDosen']['propinsi'].value;
	var kota             = document.forms['biodataDosen']['kota'].value;
	var tgllahir         = document.forms['biodataDosen']['tgllahir'].value;
	var gender           = document.forms['biodataDosen']['gender'].value;
	var status           = document.forms['biodataDosen']['status'].value;
	var ikatan           = document.forms['biodataDosen']['ikatan'].value;
	var golongan         = document.forms['biodataDosen']['golongan'].value;
	var jabatan          = document.forms['biodataDosen']['jabatan'].value;
	var pendidikan       = document.forms['biodataDosen']['pendidikan'].value;
	var kerja            = document.forms['biodataDosen']['kerja'].value;
	var ilmu             = document.forms['biodataDosen']['ilmu'].value;
	var kepakaran1       = document.forms['biodataDosen']['kepakaran1'].value;
	var kepakaran2       = document.forms['biodataDosen']['kepakaran2'].value;
	var akta             = document.forms['biodataDosen']['akta'].value;
	var ijin             = document.forms['biodataDosen']['ijin'].value;
	var kode             = document.forms['biodataDosen']['kode'].value;
	var nidn             = document.forms['biodataDosen']['nidn'].value;
	var sertifikat       = document.forms['biodataDosen']['sertifikat'].value;



	var tabel            = document.getElementById('output');
	var row              = tabel.insertRow(1);
	var cell1            = row.insertCell(0);
	var cell2            = row.insertCell(1);
	var cell3            = row.insertCell(2);
	var cell4            = row.insertCell(3);
	var cell5            = row.insertCell(4);
	var cell6            = row.insertCell(5);
	var cell7            = row.insertCell(6);
	var cell8            = row.insertCell(7);
	var cell9            = row.insertCell(8);
	var cell10           = row.insertCell(9);
	var cell11           = row.insertCell(10);
	var cell12           = row.insertCell(11);
	var cell13           = row.insertCell(12);
	var cell14           = row.insertCell(13);
	var cell15           = row.insertCell(14);
	var cell16           = row.insertCell(15);
	var cell17           = row.insertCell(16);
	var cell18           = row.insertCell(17);
	var cell19           = row.insertCell(18);
	var cell20           = row.insertCell(19);
	var cell21           = row.insertCell(20);
	var cell22           = row.insertCell(21);
	var cell23           = row.insertCell(22);
	var cell24           = row.insertCell(23);
	var cell25           = row.insertCell(24);
	var cell26           = row.insertCell(25);
	var cell27           = row.insertCell(26);
	var cell28           = row.insertCell(27);
	var cell29           = row.insertCell(28);


	cell1.innerHTML = fakultas;
	cell2.innerHTML = prodi;
	cell3.innerHTML = gelardpn;
	cell4.innerHTML = nama;
	cell5.innerHTML = gelarblkng;
	cell6.innerHTML = gelar;
	cell7.innerHTML = perguruan;
	cell8.innerHTML = nip;
	cell9.innerHTML = ktp;
	cell10.innerHTML = hp;
	cell11.innerHTML = mail;
	cell12.innerHTML = propinsi;
	cell13.innerHTML = kota;
	cell14.innerHTML = tgllahir;
	cell15.innerHTML = gender;
	cell16.innerHTML = status;
	cell17.innerHTML = ikatan;
	cell18.innerHTML = golongan;
	cell19.innerHTML = jabatan;
	cell20.innerHTML = pendidikan;
	cell21.innerHTML = kerja;
	cell22.innerHTML = ilmu;
	cell23.innerHTML = kepakaran1;
	cell24.innerHTML = kepakaran2;
	cell25.innerHTML = akta;
	cell26.innerHTML = ijin;
	cell27.innerHTML = kode;
	cell28.innerHTML = nidn;
	cell29.innerHTML = sertifikat;

  document.forms['biodataDosen'].reset();

	alert("Data Berhasil Disimpan!");
}

function logout() {
    location.href = "login.html";
}
