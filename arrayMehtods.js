// my solution of camelcase

function camelize(input) {
    return input.split("-").map(function(itm, idx) {
        if (idx == 0) return itm;
        else return itm.charAt(0).toUpperCase() + itm.slice(1)
    }).join("");
}

// my solution of filter-range
function filterRange(arr, a, b) {
    return filteredArr = arr.filter(itm => (itm >= a && itm <= b))
}
// solution of map-objects

let usersMapped = users.map(user => {
    let ret = {};
    ret.fullName = user.name + " " + user.surname;
    ret.id = user.id;
    return ret;
})

// solution to average-age

function getAverageAge(arr) {
    return arr.reduce((s, c) => s + c.age, 0) / arr.length;
}