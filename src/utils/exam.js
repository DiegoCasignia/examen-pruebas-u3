function calcWeightedGrade(items) {
    let weight = 0;
    let nota = 0;
    for (let i=0; i < items.length; i++){
        const item = items[i];
        if (item.score < 0 || item.weight < 0 || item.score > 100 || item.weight > 1){
            throw new Error('RangeError');
        } else if (typeof item.score !== 'number' || typeof item.weight !== 'number'){
            throw new Error('TypeError');
        } else {
            weight = weight + item.weight;
            nota = nota + item.score;
        }
    }
    if (weight !== 1){
        throw new Error('RangeError');
    }
    nota = nota/items.length;
    return parseFloat(nota.toFixed(2));
}

function percentile(p, values) {
    if (typeof p !== 'number' || !Array.isArray(values)){
            throw new Error('TypeError');
    }

    if (p < 0 || p > 100) {
        throw new Error('RangeError.');
    }
    
    let value;

    if (p == 0){
        value = values[0];
    } else if (p == 100) {
        value = values[values.length - 1];
    }
    return parseFloat(value.toFixed(2));
}

module.exports = { calcWeightedGrade, percentile };