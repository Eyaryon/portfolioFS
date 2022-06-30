
/*EventListener um zwischen der Login- und der Create-Form zu wechseln
*Die Links werden über ihre entsprechende ID angesprochen
*Anschließend wird ihrer übergeordneten Form die Class "form--hidden" hinzugefügt und der entgegenstehenden Form die gleiche Class entfernt
*/
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });
});

//Funktion zum Anzeigen einer Fehler-Anzeige
function setFormMessage (formElement, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.add('form__message--error')
};

//Funktion zur Simulierung einer Login-Funktionalität
document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("#loginButton").addEventListener("click", () =>{
        login(document.querySelector("#username"), document.querySelector("#password"));
    });
});

function login(user, password){
    if(user.value == "Max_Muster" && password.value == "1234"){
        document.location.href = "./home.html";
    } else {
        setFormMessage(document.querySelector("#login"), "Ungültiger Username oder Passwort!");
    };
};

//Funktion zur User-Registrierung. Gibt derzeit nur die Daten in der Konsole aus.
function createAccount(form){
    console.log(form.username.value, form.email.value, form.password.value, form.confirmPassword.value);
};

//Funktion zum Schließen des Geburtstag hinzufügen-Dialogs
document.addEventListener("DOMContentLoaded", () => {
    const gebDialog = document.querySelector("#addBday");
    
    document.querySelector("#cancle").addEventListener("click", () => {
        gebDialog.removeAttribute("open");
    });
});

//Funktion zum öffnen des Geburtstag hinzufügen-Dialogs
document.addEventListener("DOMContentLoaded", () =>{
    const gebDialog = document.querySelector("#addBday");

    document.querySelector("#addButton").addEventListener("click", () =>{
        gebDialog.setAttribute("open", "");
    });
});

//Funktion zum Alter errechnen
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
}

//Hinzufügen Button
document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("#createButton").addEventListener("click", () =>{
        var myBdayContainer = document.querySelector("#bdayContainer");
        var myBdayItem = document.createElement('div');
        var myBdayTitle = document.createElement('div');
        var myBdayContent = document.createElement('div');
        var myTitleDecoration = document.createElement('strong');
        var myTitleContent = document.createTextNode(document.getElementById("fName").value + " " + document.getElementById("lName").value);
        var myTitleButton = document.createElement('button');
        var myButtonIcon = document.createElement('img');
        var myContentItem = document.createElement('p');
        var myContentDecoration = document.createElement('span');
        var myContentTitle = document.createTextNode('Geburstag am:');
        var myContentDate = document.createTextNode(document.getElementById("bDate").value);
        var myContentBody = document.createTextNode('Alter:');
        var myContentAge = document.createElement('output');
       
        myTitleDecoration.appendChild(myTitleContent);
        
        myButtonIcon.setAttribute("src", "./src/minus-sign-11-512.png");
        myButtonIcon.setAttribute("alt", "Remove");
        myButtonIcon.setAttribute("width", "25.6");
        myButtonIcon.setAttribute("height", "25.6");
        
        myTitleButton.setAttribute("class", "button__bday-remove");
        myTitleButton.setAttribute("id", "removeButton");
        myTitleButton.setAttribute("type", "button");
        myTitleButton.appendChild(myButtonIcon);
        
        myBdayTitle.setAttribute("class", "main__bday-title");
        myBdayTitle.appendChild(myTitleDecoration);
        myBdayTitle.appendChild(myTitleButton);

        myContentAge.setAttribute("id", "age");
        myContentAge.value = getAge(document.getElementById("bDate").value);

        for(i=0;i<4;i++){
            switch(i){
                case 0:
                    myContentDecoration.appendChild(myContentTitle);
                    myContentDecoration.setAttribute("class", "span__bday")
                    myContentItem.appendChild(myContentDecoration);
                    myBdayContent.appendChild(myContentItem);
                    break;
                case 1:
                    myContentItem = document.createElement('p');
                    myContentItem.appendChild(myContentDate);
                    myBdayContent.appendChild(myContentItem);
                    break;
                case 2:
                    myContentDecoration = document.createElement('span');
                    myContentDecoration.appendChild(myContentBody);
                    myContentDecoration.setAttribute("class", "span__bday")
                    myContentItem = document.createElement('p');
                    myContentItem.appendChild(myContentDecoration);
                    myBdayContent.appendChild(myContentItem);
                    break;
                case 3:
                    myContentItem = document.createElement('p');
                    myContentItem.appendChild(myContentAge);
                    myBdayContent.appendChild(myContentItem);
                    break;
            }
        }

        myBdayItem.setAttribute("class", "main__bday-item");
        myBdayItem.appendChild(myBdayTitle);
        myBdayItem.appendChild(myBdayContent);
        
        myBdayContainer.appendChild(myBdayItem);

        document.querySelector("#addBday").removeAttribute("open");
    });
    
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('.button__bday-remove').addEventListener("click", () =>{
        console.log("hi");
    });
});