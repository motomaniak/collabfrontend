import React, { Component } from 'react'

export default class NewsletterContainer extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        sports: []
    }

    

    Submit = () =>{
        let Regex = new RegExp(/[^A-Za-z]/)
        let url = `http://localhost:9000/api/xgames/users`
        let first_name = document.getElementById('first_name').value
        
        let last_name = document.getElementById('last_name').value
        let email = document.getElementById('email').value
        
        let checked = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for(let checkbox of checkboxes){
            checked.push(checkbox.id)
        }
        if(first_name.length < 2){
        
        }else if (last_name.length < 2) {

        }else if (Regex.test(first_name)){

        }else if (Regex.test(last_name)){

        }else{
            this.setState({first_name:first_name, last_name:last_name, email:email, sports: checked})
            const options = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type':'application/json' 
                }
            }
            fetch(url, options)
                .then(res=>res.json())
                .then(res=>console.log(res))
                .catch(err => console.log(err))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.Submit()
    }

    render() {
        return (
            <div>
                <img id='logo' alt='X-Games Logo' src='https://files.slack.com/files-pri/T0351JZQ0-FRFUHQ5R9/xgames_logo.png' />
                <form onSubmit={this.handleSubmit}>
                Name<br/>
                <input className='invalid' type='text' id='first_name' placeholder='First Name' required minlength='2'  autoFocus></input><br/>
                <input className='invalid' type='text' id='last_name' placeholder='Last Name' required minlength='2'  autoFocus></input><br/>
                E-mail<br/>
                <input type='email' id='email' placeholder='Enter your email' required autoFocus></input><br/>
                <img id='skate-img' src='https://files.slack.com/files-pri/T0351JZQ0-FRH4Y0M6V/image.png' />
                <img src='https://files.slack.com/files-pri/T0351JZQ0-FREJYS690/image.png' />
                <img src ='https://files.slack.com/files-tmb/T0351JZQ0-FRSUK3V0U-31f1600411/image_360.png' />
                <img src='https://files.slack.com/files-pri/T0351JZQ0-FRTCKD14G/image.png' /><br/>
                <input type='checkbox' name='skate' id='1' value='skate' />
                <input type='checkbox' name='bmx' id='2' value='bmx' />
                <input type='checkbox' name='e-sports' id='3' value='e-sports' />
                <input type='checkbox' name='moto' id='4' value='Moto' />
                <input type='submit' value='submit'></input>
            </form>
            </div>
        )
    }
}
