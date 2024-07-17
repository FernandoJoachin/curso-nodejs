import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '2002-11-07';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () =>{
        const birthdate = '2002-11-07';
        const age = getAge(birthdate);
    
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    
        expect(age).toBe(calculatedAge);
    });

    test('getAge should return 0 years', () =>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2002);
        const birthdate = '2002-11-07';
        const age = getAge(birthdate);
    
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    });
})