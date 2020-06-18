import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DinerForm extends Component {
  state = { name: '', address: '', hours: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ name: 'bbq' })
    // this.setState({ address: '345 street' })
    // this.setState({ hours: '24/7' })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // add the object to the array
    this.props.addDiner(this.state)
    // clear out the form
    this.setState({ name: '', address: '', hours: '' })
  }

  render() {
    const { name, address, hours } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name='name'
          value={name}
          onChange={this.handleChange}

          label='name'
          required
        />
        <Form.Input 
          name='address'
          value={address}
          onChange={this.handleChange}
          label='address'
          required
        />
        <Form.Input 
          name='hours'
          value={hours}
          onChange={this.handleChange}
          label='hours'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default DinerForm;