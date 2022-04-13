const meuArray = [20, 50, 39, 45, 30, 1058, 3025, 10];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArray));