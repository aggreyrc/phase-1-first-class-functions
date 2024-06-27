function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function myFuntion(){}
        return myFuntion;
}

function returnsAnAnonymousFunction(){
    return function(){}
}