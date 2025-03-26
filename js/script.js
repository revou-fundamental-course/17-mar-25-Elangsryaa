//Ini Javascript External
function showSection(sectionId){
    document.getElementById('persegi').style.display = 'none';
    document.getElementById('persegi-panjang').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
}

window.onload = function() {
    showSection('persegi');
};