const { Selector } = require('testcafe');

let testController = null;

class Home {
  constructor() {
    this.name = Selector('#id_nombre').with({ boundTestRun: testController });
    this.lastName = Selector('#id_apellido').with({ boundTestRun: testController });
    this.email = Selector('#id_email').with({ boundTestRun: testController });
    this.password = Selector('#id_password').with({ boundTestRun: testController });
    this.birthDate = Selector('form >div:nth-child(6)>p>input').with({ boundTestRun: testController });
    this.male = Selector('#id_genero_hombre').with({ boundTestRun: testController });
    this.female = Selector('#id_genero_mujer').with({ boundTestRun: testController });
    this.createAccount = Selector('form>div>button').with({ boundTestRun: testController });

  }
}
class Page {
  constructor() {
    this.home = new Home();
  }
}

module.exports = Page;
