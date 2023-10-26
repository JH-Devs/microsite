document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');
    const darekKodElement = document.getElementById('darekKod');
    const userEmailElement = document.getElementById('userEmail');
    const slevovyKodElement = document.getElementById('slevovyKod');
    const modalEmailElement = document.getElementById('modalEmail');
    const emailWarningElement = document.getElementById('emailWarning');


        // Události pro ikonu e-mailu
        userEmailElement.addEventListener('input', function() {
            const emailValue = userEmailElement.value.trim();
    
            // Zobraz ikonu, pokud je pole e-mailu vyplněno a obsahuje platný e-mail
            if (emailValue && validateEmail(emailValue)) {
                emailIcon.style.display = 'block';
            } else {
                emailIcon.style.display = 'none';
            }
        });

    openModalBtn.addEventListener('click', function() {
        // Získání hodnot z formuláře
        const slevovyKod = darekKodElement.value;
        const email = userEmailElement.value;

            // Kontrola, zda je e-mail vyplněn
            if (email.trim() === '') {
                emailWarningElement.textContent = 'Vyplňte prosím e-mail.';
                return; // Přerušení funkce, pokud není e-mail vyplněn
            } else {
                emailWarningElement.textContent = ''; // Vymazání varování, pokud je e-mail vyplněn
            }
        

        // Nastavení obsahu modálního okna
        slevovyKodElement.textContent = 'Slevový kód: ' + slevovyKod;
        modalEmailElement.textContent = 'Váš E-mail: ' + email;

        // Zobrazení modálního okna
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        // Skrytí modálního okna
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        // Skrytí modálního okna po kliknutí mimo něj
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });     
});
function generujDarekKod() {
    const delkaKodu = 8; // Změň délku kódu podle potřeby
    const mozneZnaky = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let novyKod = '';

    for (let i = 0; i < delkaKodu; i++) {
        const nahodnyIndex = Math.floor(Math.random() * mozneZnaky.length);
        novyKod += mozneZnaky.charAt(nahodnyIndex);
    }

    document.getElementById('darekKod').value = novyKod;
}
// Funkce pro validaci e-mailu
function validateEmail(email) {
    // Jednoduchá kontrola formátu e-mailu
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

   
