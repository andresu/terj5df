import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: [
      ],
      newguest:{name: "", lastname: ""},
      newguestname: "",
      newguestlastname: ""
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleSubmitGuest = this.handleSubmitGuest.bind(this);    
  }
  handleChangeName(e) {
    let wrapperGuest = this.state.newguestname;
    let guestName = e.target.value;
    wrapperGuest = guestName;
    this.setState({
        newguestname: wrapperGuest
    });
  }
  handleChangeLastName(e) {
    let wrapperGuest = this.state.newguestlastname;
    let guestLastName = e.target.value;
    wrapperGuest = guestLastName;
    this.setState({
        newguestlastname: wrapperGuest
    });
  }
  handleSubmitGuest(e) {
    e.preventDefault();
    let guestFull = this.state.newguest;
    guestFull.name = this.state.newguestname;
    guestFull.lastname = this.state.newguestlastname;
    let guest = {
        name: this.state.newguest.name,
        lastname: this.state.newguest.lastname
    }
    this.setState({
        newguest : guestFull,
        guests: this.state.guests.concat([guest])
    })
    this.setState({
        newguestname:'',
        newguestlastname: '',
        newguest:{name: "", lastname: ""},
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmitGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" onChange={this.handleChangeName} value={this.state.newguestname} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" onChange={this.handleChangeLastName} value={this.state.newguestlastname} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest,i) =>
                    <tr key = {i}>
                      <td>{guest.name}</td>
                      <td>{guest.lastname}</td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


