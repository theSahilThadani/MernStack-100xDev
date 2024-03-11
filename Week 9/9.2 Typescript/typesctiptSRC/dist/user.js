"use strict";
const user = {
    name: "sahil",
    surname: 'thadani',
    age: 18,
};
const isLigal = (user) => {
    if (user.age <= 18)
        return 'ligal';
    else
        return 'inligal';
};
