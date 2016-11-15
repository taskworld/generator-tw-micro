'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-tw-micro:app', function () {

  const serviceName = 'tw-micro-test'
  const version = '1.3.4'

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        serviceName,
        version
      })
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

  it('change service name', () => {
    assert.fileContent('package.json', /tw-micro-test/)
  })

  it('change service version', () => {
    assert.fileContent('package.json', /1\.3\.4/)
  })
})
