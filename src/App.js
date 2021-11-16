import React from "react";
import $ from 'jquery'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      nom:'',
      ville:'',
      email:''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleNom=this.handleNom.bind(this)
    this.handleVille=this.handleVille.bind(this)
    this.handleEmail=this.handleEmail.bind(this)
  }

  handleEmail(event){
    event.preventDefault()
    this.setState({
      email:event.target.value
    })
  }

  handleNom(event){
    event.preventDefault()
    this.setState({
      nom:event.target.value
    })
  }

  handleVille(event){
    event.preventDefault()
    this.setState({
      ville:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)

    

      $.post('http://localhost/react_php/src/react_php.php',
          {
            nom:$('#nom').val(),
            ville:$('#ville').val(),
            email:$('#email').val()
          },
          function(response) {
            document.querySelector('p').innerText=response;
          }
      )

  }

  render(){
    return(
      <React.Fragment>

        <form method='get' onSubmit={this.handleSubmit} className="m-5">
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group mb-3">
                      <label htmlFor="nom">Nom:</label>
                      <input type="text" value={this.state.nom} onChange={this.handleNom} id="nom" className="form-control" placeholder="Entrer votre nom..."/>
                  </div>
                  <div className="form-group mb-3">
                      <label htmlFor="ville">Ville:</label>
                      <input type="text" value={this.state.ville} onChange={this.handleVille} id="ville" className="form-control" placeholder="Entrer votre ville..."/>
                  </div>
                  <div className="form-group mb-3">
                      <label htmlFor="email">Email:</label>
                      <input type="email" value={this.state.email} onChange={this.handleEmail} id="email" className="form-control" placeholder="Entrer votre email..."/>
                  </div>
                  <input type="submit" value="Envoyer" className="btn btn-info"/>
              </div>
          </div>
        </form>
        <p></p>

      </React.Fragment>
    )
  }
}

export default App;