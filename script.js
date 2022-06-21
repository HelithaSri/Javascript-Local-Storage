function store(e) {

    // let fData = {
    //     inputFname: document.getElementById("first-name").value,
    //     inputLname: document.getElementById("last-name").value,
    //     inputEmail: document.getElementById("email").value,
    //     inputPhone: document.getElementById("phone").value,
    //     inputCompany: document.getElementById("company").value,
    //     inputAddress: document.getElementById("address").value
    // }

    let inputFname= document.getElementById("first-name");
    localStorage.setItem("first-name", inputFname.value);

    let inputLname= document.getElementById("last-name");
    localStorage.setItem("last-name", inputLname.value);

    let inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);

    let inputPhone= document.getElementById("phone");
    localStorage.setItem("inputPhone", inputPhone.value);

    let inputCompany= document.getElementById("company");
    localStorage.setItem("company", inputCompany.value);

    let inputAddress= document.getElementById("address");
    localStorage.setItem("address", inputAddress.value);

    // localStorage.setItem("formData", JSON.stringify(fData));
    display();
    e.preventDefault();

}
display();
function display() {
    if (!localStorage.length==0) {
        // let {inputFname, inputLname, inputEmail, inputPhone, inputCompany, inputAddress} = JSON.parse(localStorage.getItem('formData'));
        // console.log(localStorage.getItem('formData'));
        console.log(localStorage.length);
        document.getElementById("first-name").value = localStorage.getItem('first-name')
        document.getElementById("last-name").value = localStorage.getItem('last-name')
        document.getElementById("email").value = localStorage.getItem('email')
        document.getElementById("phone").value = localStorage.getItem('inputPhone')
        document.getElementById("company").value = localStorage.getItem('company')
        document.getElementById("address").value = localStorage.getItem('address')
        // console.log(document.getElementById("first-name").value);
    }
}

// document.getElementById("first-name").value = localStorage.getItem("first-name");
// document.getElementById("last-name").value = localStorage.getItem("last-name");
// document.getElementById("email").value = localStorage.getItem("email");
// document.getElementById("phone").value = localStorage.getItem("inputPhone");
// document.getElementById("company").value = localStorage.getItem("company");
// document.getElementById("address").value = localStorage.getItem("address");

// document.getElementById("first-name").value = localStorage.getItem('first-name')
// document.getElementById("last-name").value = localStorage.getItem('last-name')
// document.getElementById("email").value = localStorage.getItem('email')
// document.getElementById("phone").value = localStorage.getItem('inputPhone')
// document.getElementById("company").value = localStorage.getItem('company')
// document.getElementById("address").value = localStorage.getItem('address')