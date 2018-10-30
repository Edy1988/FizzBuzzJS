describe('Javabuzz', function(){
  var javabuzz;

  describe('knows when a number is', function(){
    it ('devisable by 3', function(){
      javabuzz = new Javabuzz();
      expect(isDevisableByThree(3)).toBe(true);
    });

  });

});
