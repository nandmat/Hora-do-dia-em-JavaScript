function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if(hora >= 0 && hora < 12){
    // Bom dia!!
    img.src = 'manha-edit.png'
    document.body.style.background = '#FA9699'
}else if(hora >= 12 && hora < 18) {
    // Boa tarde!!
    img.src = 'tarde-edit.png'
    document.body.style.background = '#FDC25A'
} else {
    // Boa noite!!
    img.src = 'noite-edit.png'
    document.body.style.background = '#283848'
}
}