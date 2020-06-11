for (i = 0; i <= 10; i++); {   // remove const because i is already declared
    
 	if (i == 5) {
 	console.log ('this hit five');
 	} else {
 	console.log('i = ' + i );
 	}
    }
     
     
for (const i = 0, i <=10; i++) {
   if (i == 5 ) {
    console.log ('this hit five');
   } else {
    console.log('i = ' + i );
}
}