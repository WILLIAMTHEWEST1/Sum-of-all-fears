//get starting Values from the screen
//Controller Function
function getValues() {
    //Get the user input K value - needs to be a number
    let kValue = "17"; //You need to write the code to get user input, replace this line with a document.getelementbyid.

    //convert the input to  a number
    kValue = Number.parseInt(kValue);

    // Make sure I get a number
    if ( | isNAN(kValue)) {
        //search the array function
        let result = checkArray(kValue);

    } else {
        alert("Number array needs numbers.")

    }
}
function checkArrayA(){
     const sumArray = [10, 15, 3, 7];

     //create an output variable
     let output= false;

     //forward searching - 2 "for loops"
     for (let index = 0; index <= sumArray.length -2; index++) {
         for(let j = indext + 1; j <= sumArray.length - 1; j ++)    
          let outerValue = sumArray.length[index];
          let innerValue = sumArray[j];

          if(outerValue + innerValue == kValue){
              output = true;
              return output;
          }
     }



     //or use an Array function - indexOf() - returns the position of a value in an array or -1
}
function checkArrayB(kValue){

    const sumArray = [10, 15, 3, 7];

    let output = false;

    for (let index = 0; index < sumArray.length -2; index++) {
        let checkValue = kValue - sumArray[index];
        if(sumArray.indexOf(checkValue, index) >= 0){
            output = true;
            return output;
        }
        
    }
    
    return output;

}

function displayData(result){
    let output = document.getElementById("result");

    if (result) {
        output.innertext = "Your K value was found."
    } else {
        output.innterText = "Your K value was not found."
    }

}