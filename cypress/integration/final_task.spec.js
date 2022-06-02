import formPage from "../pageObjects/formPage";

describe("AUT", ()=>{
    beforeEach(() => {
        formPage.visit();
    });

    it("Check if the form is working or not", ()=>{
        cy.fixture("inputFields").then((data)=>{

            //Set information in stated text fields
            formPage.firstName.type(data.firstName);
            formPage.lastName.type(data.lastName);
            formPage.emailField.type(data.emailField);
            formPage.genderButton.click({ force: true });
            formPage.mobileNumber.type(data.mobileNumber);
            formPage.currentAddress.type(data.address);

            //Set the Date Of Birth
            formPage.dateOfBirthField.click();
            formPage.dateOfBirthWidgetYear.select("1930");
            formPage.dateOfBirthWidgetMonth.select("1");
            formPage.dateOfBirthWidgetDay.click();

            //Set Subject to Economics and Hobbies to Music
            formPage.subjectsContainer.type("Economics{enter}");
            formPage.hobbiesMusic.click({ force: true });

            //Choose and upload a picture
            formPage.uploadPictureButton.selectFile("cypress/files/039.jpg");

            // Edit City and State
            formPage.stateField.click();
            formPage.stateNCR.click();
            formPage.cityField.click();
            formPage.cityDelhi.click();

            // Submit form
            formPage.submitButton.click();

            // Check if everything contains all the necessary values
            formPage.submitedDataTable.should("contain", data.firstName);
            formPage.submitedDataTable.should("contain", data.lastName);
            formPage.submitedDataTable.should("contain", data.emailField);
            formPage.submitedDataTable.should("contain", "Male");
            formPage.submitedDataTable.should("contain", data.mobileNumber);
            formPage.submitedDataTable.should("contain", "28 January,1930");
            formPage.submitedDataTable.should("contain", "Economics");
            formPage.submitedDataTable.should("contain", "Music");
            formPage.submitedDataTable.should("contain", "039.jpg");
            formPage.submitedDataTable.should("contain", data.address);
            formPage.submitedDataTable.should("contain", "NCR");
            formPage.submitedDataTable.should("contain", "Delhi");
        });
    });
});