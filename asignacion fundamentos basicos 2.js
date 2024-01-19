console.log('1. Tamaño Grande:');
function big(arr){
    for( var i=0; i<arr.length; i++ ){
        if( arr[i]>0 )
        arr[i]="big";
    }
    return arr;
}

console.log( big( [-1,3,5,-5] ) );
console.log('-----------------');

console.log('2. Imprime el menor, devuelve el mayor:');
function printret( arr ){
    var min=0;
    var max=0;
    for( var i=0;i<arr.length;i++ ){
        if( arr[i]>arr[max] ){
            max = i;
        }

        if( arr[i]<arr[min] ){
            min = i
        }
    }
    console.log( arr[min] );
    return arr[max];
}

console.log( printret( [1,3,5,8] ) );
console.log('-----------------');

console.log('3. imprime uno y devuelve otro:');
function printone( arr ){
    console.log( arr[arr.length-2] );
    for( var i=0;i<arr.length;i++ ){
        if( arr[i]%2===1 )
        return arr[i];
    }
}

console.log( printone( [2,10,-1,2,4,99,52,-5] ) );
console.log('-----------------');


console.log('4. Doble vision:');
function double( arr ){
    new_array=[];
    for ( var i=0;i<arr.length;i++ ){
        new_array.push( arr[i]*2 );
    }
    return new_array;
}

console.log( double( [2,10,2,4] ) );
console.log('-----------------');


console.log('5. Contar Positivos:');
function positives( arr ){
    var positivs=0;
    for ( var i=0 ; i<=arr.length ; i++ ){
        if ( i % 2 === 0 ){
            positivs+=1;
        }
    }
    arr[arr.length-1]= positivs;  
    return arr;
}

console.log( positives( [-1,1,1,1] ) );
console.log('-----------------');

console.log('6. Pares e Impares:');
function odds_evens( arr ){
    var even_numb = 0;
    var odd_numb =  0;

    for ( var i=0 ; i<arr.length ; i++ ){
        
        if ( ( arr[i]%2==0 ) && ( arr[i+1]%2==0 ) && ( arr[i]%2 != 1 ) ) {
            even_numb++;
        }
        if ( even_numb === 2 ){
            even_numb = 0
            console.log("¡Es para bien!")
        }
        if( ( arr[i]%2===1 ) && ( arr[i+1]%2===1 ) && ( arr[i]%2 != 0 ) ) {
            odd_numb+=1;
        }
        if ( odd_numb === 2 ){
            odd_numb = 0
            console.log('¡Qué Imparcial!');
        }

    }
}

console.log( odds_evens( [2,3,1,1,4,3,2,24,98,7,17,47] ) );
console.log('-----------------');


console.log('7. Incrementar los Segundos:');
function incrementar_segundos( arr ){
    for ( var i=0 ; i<arr.length ; i++ ){
        if ( i % 2 === 0 ){
            arr[i] = arr[i]+1;
        }
        console.log( arr[i] );
    }
    return arr;
}

console.log( incrementar_segundos( [1,1,3,1,5,1,7,1,9,1] ) );
console.log('-----------------');

console.log('8. Longitudes previas:');
function longitudes_previas( arr ){
    var longitudes=[];
    for ( var x = 0; x < arr.length ; x++ ){
        longitudes.push( arr[x].length );
    }
    
    for ( var i=arr.length-1 ; i>=0 ; i-- ){
    if( i==arr.length-1 ){
        arr[i] = longitudes[longitudes.length-2]
    }
    if ( i-1>=0 ){
        arr[i] = longitudes[i-1]
    }
    }

    return arr;
}
console.log( longitudes_previas( ["programar", "dojo", "genial","hello","world"] ) );
console.log('-----------------');

console.log('9. Agrega Siete:');
function agrega_siete( arr ){
    var siete=[];
    for ( var i = 0 ; i < arr.length ; i++ ){
        siete.push( arr[i]+7 );
    }
    return siete;
}
console.log( agrega_siete( [1,2,3,4] ) );
console.log('-----------------');

console.log('10. Array Inverso:');
function inverse_array( arr ){
    for( var i= 0; i<(arr.length)/2; i++ ){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr;
}
console.log( inverse_array( [1,2,3,4] ) );
console.log('-----------------');

console.log('11. Perspectiva:Negativa :');
function negativos( arr ){
    var negativs = [];
    for( var i= 0; i<arr.length; i++ ){
        if( arr[i]>0 ){
            negativs.push( -Math.abs( arr[i] ) );
        }
        else if ( arr[i]<0 ){
            negativs.push( arr[i] );
        }
    }
    return negativs;
}
console.log( negativos( [1,-3,5,6,8,10,-10] ) );
console.log('-----------------');


console.log('12. Siempre Hambriento :');
function hambriento( arr ){
    var repeticiones=0
    for( var i= 0; i<arr.length; i++ ){
        if( arr[i]=="comida" ){
            console.log("yummy")
            repeticiones++;
        }
    }
    if( repeticiones==0 ){
        console.log( "tengo hambre" )
    }
    
}
console.log( hambriento( ["com","hola", "22", "com"] ) );
console.log('-----------------');

console.log('13. Cambiar hacia el centro :');
function hambriento( arr ){
    [ arr[0], arr[arr.length-1] ] = [ arr[arr.length-1], arr[0] ];
    [ arr[2], arr[arr.length-3] ] = [ arr[arr.length-3], arr[2] ];
    for( var i= 3;i<(arr.length)/2; i++ ){
        if ( i>2 ){
            [ arr[i], arr[arr.length-1-i] ] = [ arr[arr.length-1-i], arr[i] ]
        }

    }
    console.log( arr );
}
console.log( hambriento( [1,2,3,4,"world","hello",7,8,9,10] ) );
console.log('-----------------');

console.log('14. Escala el Array :');
function escala( arr,int ){
    var new_arr =[]; 
    for( var i= 0 ; i<arr.length ; i++ ){
        new_arr.push( arr[i]* int )  ;     
    }
    return new_arr;
}
console.log( escala( [1,2,3],3 ) );
console.log('-----------------');

