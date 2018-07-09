$(function () {
  //hide the convert div
  function hide(){
    $('#convert').hide();
  }//

  hide();
  convertVisibility();

  // handle convert visibility
  function convertVisibility(){
   $('select').change(function() {
    if($('#pounds-kg, #pounds-g, #pounds-o, #kg-pounds').is(':selected')) {
        $('#convert').show();
      }
      else hide();
    })
    handleConvert();
  }//


  function handleConvert(){
    var $option = $('#pounds-kg');

    $('select').change(function() {
      $('#input').val(''); //empty input box
      $('#result').text(' '); // set output to empty

      if( $('#pounds-kg').is(':selected') ){
        convertPoundsToKg();
      } else if( $('#pounds-g').is(':selected') ){
        convertPoundsToG();
      } else {
        convertPoundsToOunces();
      }

    })
  } //handleConvert


  function convertPoundsToKg() {

    $('#input').on('change, input', function(){

      var $inputValue = $(this).val();
      var $result = $inputValue / 2.2046;
      var $fixedNum = $result.toFixed(2);
      $('#result').text($fixedNum + ' Kg');

    })

  }//convertPoundsToKg

  function convertPoundsToG() {

    $('#input').on('change, input', function(){

      var $inputValue = $(this).val();
      var $result = $inputValue * 453.59237;
      var $fixedNum = $result.toFixed(2);
      $('#result').text($fixedNum + ' g');

    })

  } //convertPoundsToG

  function convertPoundsToOunces() {
    $('#input').on('change, input', function(){

      var $inputValue = $(this).val();
      var $result = $inputValue * 16;
      var $fixedNum = $result.toFixed(2);
      $('#result').text($fixedNum + ' oz');

    })
  } //convertPoundsToOunces

}) //global function
