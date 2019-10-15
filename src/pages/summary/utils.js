const compare = (a, b) => {
    const objA = a.votes;
    const objB = b.votes;

    let comparison = 0;
    if (objA > objB) {
        comparison = -1;
    } else if (objA < objB) {
        comparison = 1;
    }
    return comparison;
};

export default compare;
