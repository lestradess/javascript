function fibonacci (num){
    let array = [1,1];
    for (let i = 2; i < num ; i++) {
        array.push(array[i-2]+array[i-1]);     
    }
    return array;
}
fibonacci(6);