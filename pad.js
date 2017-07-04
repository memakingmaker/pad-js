$(document).ready( function(){
  displayGrid( 16 );
  
  $('#container').on('mouseenter', '.block', function(){
    $(this).css("background-color","black");
  });

  $('#clear').on('click', function(){
    gridSize = prompt("Enter number of blocks");
    $("#container").empty();
    displayGrid( gridSize );
  });
} );


function displayGrid( blocks ){
  for( var i = 1; i <= blocks*blocks; i++ ){
    var $block = $("<div class='block'></div>");
    var size = $("#container").width()/blocks
    $block.css({"width" : size, "height" : size });
    $block.appendTo($("#container"));
  }
}


