function findLowestScoringStudent(students) {
  describe("findLowestScoringStudent", () => {
  it("should return the student with the lowest score", () => {
    const Students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  
  const expected = { name: "Morgan Sutton", score: 7.4 };
  const actual = findLowestScoringStudent(Students);
  
  expect(actual).toEqual(expected); 
  });
});
