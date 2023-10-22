let employeeId;
let fullName;
let extension;
let email;
let department;
let form;

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

function showData(employeeId, fullName, extension, email, department) {
    console.log(`
    ID: ${employeeId}
    Full Name: ${fullName}
    Extension: ${extension}
    Email: ${email}
    Department: ${department}
                 `)
}

window.addEventListener('load', () => {
    console.log("Application is ready!")
    form        = $('empForm')
    form.addEventListener("submit", (f) => {
        f.preventDefault()
        employeeId  = $('employeeId')
        fullName    = $('fullName')
        extension   = $('extension')
        email       = $('inputEmail')
        department  = $('department')
        showData(employeeId.value, fullName.value, extension.value, email.value, department.value)
    })
})

