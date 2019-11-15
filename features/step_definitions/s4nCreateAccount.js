const { Selector } = require('testcafe');
const { Given, When, Then } = require('cucumber');
const { ClientFunction } = require('testcafe');
const Page = require('./pageObjects/s4nTest');
const page = new Page();
let testController = null;

const getWindowLocation = ClientFunction(function () {
  return window.location
});
  const enterName = page.home.name.with({ boundTestRun: testController })
  const enterLastName = page.home.lastName.with({ boundTestRun: testController })
  const emailValid = page.home.email.with({ boundTestRun: testController })
  const passwordAccount = page.home.password.with({ boundTestRun: testController })
  const birthDateValid = page.home.birthDate.with({ boundTestRun: testController })
  const maleCheckBox = page.home.male.with({ boundTestRun: testController })
  const femaleCheckBox = page.home.female.with({ boundTestRun: testController })
  const submitButton = page.home.createAccount.with({ boundTestRun: testController })


Given('User wants to create account s4n test page', function () {
  const parameters = this.parameters;

  return this.waitForTestController().then(function (tc) {
    testController = tc;

    return testController
      .navigateTo(parameters.s4nURL);
  });
});

When('fill up correctly the fields', function () {
  
  return testController
    .typeText(enterName, 'Ronald')
    .typeText(enterLastName, 'Estupinan')
    .typeText(emailValid, 'ronald@gmail.com')
    .typeText(passwordAccount, 'ronald@gmail.com')
    .typeText(birthDateValid, '1947-02-12')
    .click(maleCheckBox)     
});

Then('it clicks on create account and confirm alert', function () {
  const submitButton = page.home.createAccount.with({ boundTestRun: testController })
  return testController
    .setNativeDialogHandler(() => true)
    .click(submitButton)
});

When('fill up incorrectly birthDate', function () {
  
  return testController
    .typeText(enterName, 'Ronald')
    .typeText(enterLastName, 'Estupinan')
    .typeText(emailValid, 'ronald@gmail.com')
    .typeText(passwordAccount, 'ronald@gmail.com')
    .typeText(birthDateValid, 'ronald@gmail.com')
    .click(femaleCheckBox)     

});

Then('it clicks on create account and confirm fields messages', function () {
  const birthDateMessage = Selector('form>div:nth-child(6)>span').with({ boundTestRun: testController });
  return testController
    .click(submitButton)
    .expect(birthDateMessage.textContent).contains('La fecha de nacimiento es obligatoria');
});

When('fill up correctly without click on gender', function () {
  
  return testController
    .typeText(enterName, 'Ronald')
    .typeText(enterLastName, 'Estupinan')
    .typeText(emailValid, 'ronald@gmail.com')
    .typeText(passwordAccount, 'ronald@gmail.com')
    .typeText(birthDateValid, '1992-02-1')

});

Then('it clicks on create account and confirm message of gender', function () {
  const genderMessage = Selector('form>div:nth-child(7)>span').with({ boundTestRun: testController });
  return testController
    .click(submitButton)
    .expect(genderMessage.textContent).contains('El género es obligatorio');
});

Then('verify page title', function () {
  const getTitle = Selector("title").with({ boundTestRun: testController });
  return testController
    .expect(getTitle.textContent).contains('pruebaQaApp');
});

Then('verify terms and conditions copy', function () {
  const termsAndConditions = Selector("form>div:nth-child(8)>p").with({ boundTestRun: testController });
  return testController
    .expect(termsAndConditions.textContent)
    .contains('Al hacer clic en "Crear cuenta", aceptas las Condiciones y confirmas que leíste nuestra Política de datos, incluido el uso de cookies');
});
