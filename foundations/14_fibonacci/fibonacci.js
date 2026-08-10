const fibonacci = function(f) {
    if (f < 0) return 'OOPS';
    switch (+f){
        case 0: 
            return 0;
            break;
        case 1:
        case 2:
            return 1;
            break;
        default:
            return fibonacci(Math.max(f - 1, 0)) + fibonacci(Math.max(f - 2, 0)); 
    }
};

// Do not edit below this line
module.exports = fibonacci;
