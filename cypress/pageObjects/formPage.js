import basePage from "./basePage";

class formPage extends basePage{
    static get url(){
        return "/automation-practice-form"
    }

    static get firstName() {
        return cy.get("#firstName");
      }
      static get lastName() {
        return cy.get("#lastName");
      }
      static get emailField() {
        return cy.get("#userEmail");
      }
      static get genderButton() {
        return cy.get("#gender-radio-1");
      }
      static get mobileNumber() {
        return cy.get("#userNumber");
      }
      static get currentAddress() {
        return cy.get("#currentAddress");
      }
      static get dateOfBirthField() {
        return cy.get("#dateOfBirthInput");
      }
      static get dateOfBirthWidgetYear() {
        return cy.get(".react-datepicker__year-select");
      }
      static get dateOfBirthWidgetMonth() {
        return cy.get(".react-datepicker__month-select");
      }
      static get dateOfBirthWidgetDay() {
        return cy.get("[aria-label='Choose Tuesday, January 28th, 1930'");
      }
      static get subjectsContainer() {
        return cy.get("#subjectsContainer");
      }
      static get hobbiesMusic() {
        return cy.get(".custom-control-label").contains("Music");
      }
      static get uploadPictureButton() {
        return cy.get("#uploadPicture");
      }
      static get stateField() {
        return cy.get("#state");
      }
      static get stateNCR() {
        return cy.get("#react-select-3-option-0");
      }
      static get cityField() {
        return cy.get("#city");
      }
      static get cityDelhi() {
        return cy.get("#react-select-4-option-0");
      }
      static get submitButton() {
        return cy.get("#submit");
      }
      static get submitedDataTable() {
        return cy.get(".table-responsive");
      }
}

export default formPage;