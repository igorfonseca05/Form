class ValidarFormulário {
    constructor() {
        this.form = document.querySelector('form');
        this.name = document.querySelector('#insertname')
        this.eventos()
    }

    eventos() {
        this.form.addEventListener('submit', (e) => {
            this.submitForm(e)
        })
    }

    submitForm(e) {
        e.preventDefault();
        this.verifyFields()
        
        if(this.verifyFields()) {
            alert('Formulário foi enviado')
            this.form.reset()
        }
    }

  

    verifyFields() {
        let validFilds = true;

        const elementsForm = document.querySelectorAll('form')
        const removeError = document.querySelectorAll('.error')


        for (let error of removeError) {
            error.remove()
        }

        for (let input of elementsForm[0]) {

            if (input.id === `insertname` || input.id === 'lastname') {
                if (!input.value) {
                    const msgError = `O input ${input.name} não pode estar vazio`;
                    this.error(input, msgError)
                    validFilds = false;
                }
        }

            if (input.id === 'insertemail') {
                const testEmail = /[a-zA-Z0-9]+@[a-z]/.test(input.value)
                if(!testEmail) {
                    const msgError = `Seu ${input.name} deve conter no minínmo 6 caracteres`;
                    this.error(input, msgError)
                    validFilds = false;
                }

                if (!input.value) {
                    const msgError = `O input ${input.name} não pode estar vazio`;
                    this.error(input, msgError)
                    validFilds = false;
                }
            }

            if(input.id === 'insertuserName'){
                if(!input.value) {
                    const msgError = `O input ${input.name} não pode estar vazio`;
                    this.error(input, msgError)
                    validFilds = false;
                }
                
            }

            if(input.id === 'password'){
                const inputConfirmPassword = input.nextElementSibling;

                if(!input.value) {
                    const msgError = `O input ${input.name} não pode estar vazio`;
                    this.error(input, msgError)
                    validFilds = false;
                }

                if(input.value !== inputConfirmPassword.value) {
                    const msgError = `As senhas devem coincidir`;
                    this.error(inputConfirmPassword, msgError)
                    validFilds = false;
                }   
            }

        }
        return validFilds
    }


    error(input, error) {
        const div = document.createElement('div')
        div.setAttribute('class', 'error')
        div.textContent = ` ${error}`;
        input.insertAdjacentElement('afterend', div)
    }
}

const formulário = new ValidarFormulário()