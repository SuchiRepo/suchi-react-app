import React from 'react';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", auth: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username === 'username' && this.state.password === 'password') {
      this.setState({ auth: true });
    } else {
      alert('Wrong username and/or password. Try username/password');
    }
  }

  render() {
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">Login</Typography>
              </Grid>
            </Grid>
          </Toolbar>
          </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper style={{ height: '70vh', width: 400, margin: "20px", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '20px' }}>
              <form onSubmit={this.handleSubmit}>
                <TextField name="username" variant="outlined" fullWidth label="User Name" value={this.state.username} onChange={this.handleChange} required autoFocus />
                <TextField name="password" type="password" variant="outlined" fullWidth label="Password" value={this.state.password} onChange={this.handleChange} required />
                <Button style={{ width: '50%', alignSelf: 'center', marginTop: '40px' }} type="submit" variant="contained" color="primary">Login</Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
        {this.state.auth && <h3>You have logged in successfully.</h3>}
      </div>
    );
  }
  }

  export default Login;