import React, { Component } from 'react'
import skate from '../images/skate.png'
import bmx from '../images/bmx.png'
import moto from '../images/moto.png'
import esports from '../images/e-sports.png'
import logo from '../images/logo.png'


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
        if (Regex.test(first_name)){
            alert(`First name can't contain special characters or numbers`)
        }else if (Regex.test(last_name)){
            alert(`Last name can't contain special characters or numbers`)
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
                .then(res=>{
                    if(res.status == 200){
                        document.getElementById('confirmation').classList.toggle('confirmation')
                    }
                })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.Submit()
    }

    render() {
        return (
            <div className='center'>
                <img id='logo' alt='X-Games Logo' src={logo} />
                <h1>XGAMES INSIDER</h1>
                <h4>Get early access to news and info</h4>
                <form onSubmit={this.handleSubmit}>
                Name<br/>
                <input className='invalid' type='text' id='first_name' placeholder='First Name' required minlength='2'  autoFocus></input><br/>
                <input className='invalid' type='text' id='last_name' placeholder='Last Name' required minlength='2'  autoFocus></input><br/>
                E-mail<br/>
                <input type='email' id='email' placeholder='Enter your email' required autoFocus></input><br/>
                <div>Check out our <a href='https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/'>privacy policy here</a></div>
                <div className="container">
                    <div className="skate">
                        <img id='skate-img' src={skate} />
                        <label className="label">SKATE</label>
                        <input type='checkbox' name='skate' id='1' value='skate' />
                    </div>
                    <div className="bmx">
                        <img src={bmx} />
                        <label className="label">BMX</label>
                        <input type='checkbox' name='bmx' id='2' value='bmx' />
                    </div>
                    <div className="e-sports">
                        <img src ={esports} />
                        <label className="label">E-SPORTS</label>
                        <input type='checkbox' name='e-sports' id='3' value='e-sports' />
                    </div>
                    <div className="moto">
                        <img src={moto} /><br/>
                        <label className="label">MOTO</label>
                        <input type='checkbox' name='moto' id='4' value='Moto' />
                    </div>
                </div>
                <input type='submit' value='submit'></input> 
                </form>
                <div id='confirmation' className='confirmation'>Congratulations! You're Now Signed Up!</div>
            </div>
        )
    }
}
