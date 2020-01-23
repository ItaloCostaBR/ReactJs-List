it('should sum two parameters', () => {
    const a = 1;
    const b = 2;
    const sum = a + b;
    
    expect(sum).toBe(3);
});

it('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    
    expect(data).toEqual({one: 1, two: 2});
});

it('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

it('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

it('but there is "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});
