//1
const multiple = (numbers) => {
    if( numbers % 3 === 0  ) {
        return " true "
    }else {
        return " false"
    }
}
console.log(multiple(4));

//3 

const namesFromLowerCaseToUpperCase = ( name ) => {
    return name.toUpperCase();
}
console.log(namesFromLowerCaseToUpperCase('dimitri'));

//5 


let numbers = [ 11, 12 ,13 ,14 ,15 ,16 ,17 ,18, 19, 20];
let filterNumbers = numbers.filter((item) => item % 2 === 0 );
console.log(filterNumbers);


//2 
const getCurrencySymbolFromCode = (currency) => {
    if ( currency === "USD") {
        return "$";
    }else if ( currency === "EUR"){
        return "€";
    }else if ( currency === "GEL"){
        return "ლ";
    }else {
        return " IM SORRY DUDE";
    }
}
console.log(getCurrencySymbolFromCode("GEL"));

// aq vwerdi da ver davwere
let name1 =  {
    firstName : " dmssnn",
};

let name2 = {
    firstName : " gela ",
};

let name3 = {
    firstName : " shota ",
};
