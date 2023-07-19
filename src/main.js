var calPoints = function(operations) {
    let state = [];
    for(let i = 0; i < operations.length; i++)
    {
        if((parseInt(operations[i]) >= Number.MIN_SAFE_INTEGER &&  parseInt(operations[i]) <= Number.MAX_SAFE_INTEGER))
        {
            state.push(parseInt(operations[i]));
        }
        else if(operations[i] === 'C')
        {
            state.pop();
        }
        else if(operations[i] == 'D')
        {
            state.push(state[state.length - 1] * 2);
        }
        else
        {
                state.push(state[state.length - 1] + state[state.length - 2]);
        }
    }
    return state.reduce((x, y) => x + y,0);
};

let result = calPoints(["1","C"]);
console.log(result);