describe('Calculator', () => {
  describe('Additional', () => {
    context('When all operand are number', () => {
      it('Additive 2 positive numbers correctly', () => {
        expect(1 + 1).to.equal(2)
        expect(2 + 3).to.equal(5)
      })

      it('Additive 2 negative numbers correctly', () => {
        expect(-1 + -1).to.equal(-2)
        expect(-2 + -3).to.equal(-5)
      })
    })
    context('When some operand are string', () => {
      it('Additive positive number with string must be append string', () => {
        expect(1 + '2').to.equal('12')
        expect(-3 + '-2').to.equal('-3-2')
      })
    })
  })

  describe('Multipier', () => {
    it('Multiply 2 positive numbers correctly', () => {
      expect(1 * 1).to.equal(1)
      expect(2 * 3).to.equal(6)
      expect(3 * 4).to.equal(12)
    })

    it('Multiply negative with positive must be negative values', () => {
      expect(-1 * 1).to.equal(-1)
      expect(-2 * 3).to.equal(-6)
      expect(-3 * 4).to.equal(-12)
    })

    it('Multiply negative with negative must be negative values', () => {
      expect(-1 * -1).to.equal(1)
      expect(-2 * -3).to.equal(6)
      expect(-3 * -4).to.equal(12)
    })

    it('Every number mltiply with 0 must be 0', () => {
      expect(1 * 0).to.equal(0)
      expect(-3 * 0).to.equal(0)
      expect(0 * 0).to.equal(0)
    })
  })
})
