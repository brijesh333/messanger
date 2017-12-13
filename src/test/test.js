describe("normalizeData", function() {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format. 

    it("accepts golden path data", function() {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });
});

describe("normalizeData", function() {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format. 

    it("accepts golden path data", function() {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Brijesh", "PersonalIdentifier": 123123}';
        var norm = normalizeData(json);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Brijesh");
        expect(norm.id).toEqual(123123);
    });
});

describe("test", function() {
    it("accept string and attach 0 to it", function() {
        var msg = "Hi";
        var ans = test(msg);

        expect(ans).toEqual("Hi1");
    })
})