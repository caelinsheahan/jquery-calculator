$( document ).ready(function() {
    console.log( "ready!" );
var html = document.getElementsByTagName('html')[0]
var buttoncont = $('#buttons-container')
var b = $('.buttons')
var badB = $('.buttons')[0]
var clear = $('#clear')
b.click(calc)

  function calc(a) {
    let buttonhit = a.target.innerHTML
    console.log("this is" + a.target)

    if (buttonhit === 'C' && a.target !== badB &&
    a.target !== buttoncont && a.target !== html) {
    buttonhit = null
    $('#screen').html('')
}
    else if (buttonhit === 'x' && a.target !== badB &&
    a.target !== buttoncont && a.target !== html) {
      const mult = '*'
      $('#screen').append(mult)
}

    else if (buttonhit === '÷' && a.target !== badB &&
    a.target !== buttoncont && a.target !== html) {
      const div = '/'
      $('#screen').append(div)
}
    else if (buttonhit === '=' && a.target !== badB &&
    a.target !== buttoncont && a.target !== html) {
      let input = $('#screen').html()
      let output = eval(input)
      console.log(output)
      $('#screen').html(output)
}

    else if(a.target !== badB && a.target !== buttoncont && a.target !== html) {
      $('#screen').append(buttonhit)
}
}
});
