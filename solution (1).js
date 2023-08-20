function findLowestScoringStudent(students) {
  describe("findLowestScoringStudent", () => {
  it("should return the student with the lowest score", () => {
    const mathStudents = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Catarina Lima", score: 9.7 },
      { name: "Rebecca Mills", score: 8.7 },
    ];

    const expected = { name: "Catarina Lima", score: 9.7 };
    const actual = LowestScoringStudent(mathStudents);

    expect(actual).toEqual(expected);
  });
});
module.exports = findLowestScoringStudent;
