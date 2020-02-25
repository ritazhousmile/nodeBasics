var request = require("request");

describe("calc", () => {
  it("should multiply 2 and 2", () => {
    expect(2 * 2).toBe(5);
  });
});

describe("get messages", () => {
  it("should return 200 ok", () => {
    request.get("http: //localhost:3000/messages", (err, req) => {
      console.log(res.body);
      document();
    });
  });
});
