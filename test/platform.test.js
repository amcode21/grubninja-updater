/* global describe, it, expect */
const path = require('path');
const platform = require(path.join(__dirname, '..', 'lib', 'platform'))

describe('Platform', () => {
  it('Should parse mac', () => {
    const result = platform('hyper-2.1.1-mac.zip')
    expect(result).toBe('darwin')
  })

  it('Should parse other platforms', () => {
    const result = platform('hyper_2.1.1_amd64.deb')
    expect(result).toBe('deb')
  })

  it('Should return false for unknown files', () => {
    const result = platform('hi.txt')
    expect(result).toBe(false)
  })
})
