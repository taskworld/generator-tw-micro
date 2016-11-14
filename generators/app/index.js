'use strict'
const yeoman = require('yeoman-generator')
const yosay = require('yosay')

const copyFile = (yeoman, file) => {
  yeoman.fs.copy(
    yeoman.templatePath(file),
    yeoman.destinationPath(file)
  )
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Taskworld microservice generator!'
    ))

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }]

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props
    }.bind(this))
  },

  writing: function () {
    copyFile(this, 'dummyfile.txt')
    copyFile(this, '.babelrc')
    copyFile(this, '.eslintrc.yml')
    copyFile(this, '.gitignore')
    copyFile(this, 'package.json')
    copyFile(this, 'README.md')
    this.directory('src', 'src')
  },

  install: function () {
    this.installDependencies()
  }
})
