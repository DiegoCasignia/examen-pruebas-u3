const { calcWeightedGrade, percentile } = require('./src/utils/exam');

describe('Pruebas de calcWeightedGrade', () => {
    test('Debe devolver la nota', () => {
        expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}])).toBe(86.00);
    });

    test('Debe devolver errores', () => {
        expect(calcWeightedGrade([{score:80,weight:0.6},{score:90,weight:0.6}])).toThrow('RangeError');
        expect(calcWeightedGrade([{score:180,weight:0.4},{score:90,weight:0.6}])).toThrow('RangeError');
        expect(calcWeightedGrade([{score:'hola',weight:0.4},{score:90,weight:0.6}])).toThrow('TypeError');
    });
});

describe('Pruebas de percentile', () => {
    test('Debe devolver el precentil', () => {
        expect(percentile(0,[1,2,3])).toBe(1.00);
        expect(percentile(100,[1,2,3])).toBe(3.00);
        expect(percentile(50,[1,2,3,4])).toBe(2.00);
    });

    test('Debe devolver errores', () => {
        expect(percentile('hola',[1,2,3])).toThrow('TypeError');
        expect(percentile(0,'hola')).toThrow('TypeError');
        expect(percentile(200,[1,2,3])).toThrow('RangeError');
    });
});
