'use strict';

$( document ).ready( function() {

$( '.nag' )
.css( { background : 'red' } )    

for(var i=0; i<10; i++){
$('.nag') 
.hide( 'slow' )
.show( 500 )
.hide( 500 )
}
//Drugie ćwiczenie    
var allID = $("*");
console.log(allID);
    
} );