const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to the Basic Sass Boilerplate Generator!");
  }

  writing() {
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("index.html"),
      this.destinationPath("index.html")
    );
    this.fs.copy(this.templatePath("scss"), this.destinationPath("scss"));
    this.fs.copy(this.templatePath("js"), this.destinationPath("js"));
  }

  end() {
    this.log(" ");
    this.log(
      "Finished generating! All you need is sass-live extension to convert your sass file in to css "
    );
    this.log(" ");
    this.log(
      "If you want your css to generate in separate folder use just copy and paste below code in your vscode setting.json"
    );
    this.log(" ");

    this.log(`
    "liveSassCompile.settings.formats": [
       
        {
          "format": "compressed",
          "extensionName": ".min.css",
          "savePath": "/css"
        }
      ],
    
    `);
    this.log(" ");
    this.log(" ");
  }
};
