/*
    sometimes we want to collect data from recursive operations
    not just checking the condition we need to use helper method
*/

function collectOddValues() {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length == 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    return result;
}