function calc(input) {
return eval(input)

}

function replaceChars(a, screen, isGood) {
  let buttonhit = a.target.innerHTML
  console.log("this is" + a.target)

  if (buttonhit === 'C' && isGood) {
    buttonhit = null
    screen = ''
  }
  else if (buttonhit === 'x' && isGood) {
    const mult = '*'
    screen+= mult
  }
  else if (buttonhit === '÷' && isGood) {
    const div = '/'
    screen += div
  }
  else if (buttonhit === '=' && isGood) {
    return screen;
  }
  else if (isGood) {
    screen += buttonhit
  }
  return screen;
}

function testForGoodB(a, badB, buttoncont, html){
  return a.target !== badB && a.target !== buttoncont && a.target !== html
}

$(document).ready(function() {
  console.log("ready!");
  var html = document.getElementsByTagName('html')[0]
  var buttoncont = $('#buttons-container')
  var button = $('.buttons')
  var badB = $('.buttons')[0]
  var clear = $('#clear')
  button.click(function(e){
    var isGood = testForGoodB(e, badB, buttoncont, html)
    var screen = $('#screen').html()
    var cleanInput = replaceChars(e, screen, isGood)
    var result = cleanInput
    $("#screen").html(result)
    if(e.target.innerHTML === '=') {
    result = calc(cleanInput)
    $("#screen").html(result)
  }
  })


});
