// Array of warriors globally scoped
warriors = ['Samurai', 'Viking', 'Spartan', 'Roman'];

// Global function that will console this list of warriors
// Can use let, const, var
function warriorsPrint(arr){
    arr.forEach(warrior => {
       console.log(warrior); 
    });
}

warriorsPrint(warriors);
