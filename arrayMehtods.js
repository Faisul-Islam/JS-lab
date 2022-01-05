// my solution of https://javascript.info/task/camelcase

function camelize(input) {
    return input.split("-").map(function(itm, idx) {
        if (idx == 0) return itm;
        else return itm.charAt(0).toUpperCase() + itm.slice(1)
    }).join("");
}

// my solution of https://javascript.info/task/filter-range
function filterRange(arr, a, b) {
    return filteredArr = arr.filter(itm => (itm >= a && itm <= b))
}