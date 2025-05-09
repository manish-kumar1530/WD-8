function email(to){
    return function (subject){
        return function (massage){
            return to + subject + massage;
        }
    }
}

const res = email("to")("subject")("massage");
console.log(res);
