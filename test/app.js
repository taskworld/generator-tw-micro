'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-tw-micro:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise()
  })

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ])
  })

  it('create babelrc, eslintrc, gitignore, package, readme', () => {
    assert.file([
      '.babelrc',
      '.eslintrc.yml',
      '.gitignore',
      'package.json',
      'README.md',
    ])
  })

  it('copy src directory', () => {
    assert.file([
      'src/helloworld.js'
    ])
  })
})
