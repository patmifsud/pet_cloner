import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './App.css';
import { db } from '../services/firebase.js'
import React, {Component} from 'react';
const database = db.collection("Users");
const { Option } = Select;


class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {submitted: false};
  }

    onFinish = (values) => {
      console.log(values);
      db.collection("Users").doc()
      .set({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        ausState:values.ausState,
        dog: values.dog,
        cat: values.cat},
        {merge:true})
      this.setState({submitted: true})
    }

  form = () => {
    return(
      <div className= "subscribe-container">
        <div class="formHeader">
              <div class="logoVert"> </div>
              <h3>Subscribe to our newsletter today</h3>
              <p>For all the latest scientific advances, EvaGen stories and events.  </p>
          </div>

        <Form onFinish={this.onFinish}>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name'
              }
            ]}
          >
            <Input placeholder= "First Name"/>
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name'
              }
            ]}
          >
            <Input placeholder= "last Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
            {
            type: 'email',
            message: 'The input is not valid E-mail!',
            },
            {
            required: true,
            message: 'Please input your E-mail!',
            }
            ]}
          >
          <Input placeholder= "E-mail"/>
          </Form.Item>

          <Form.Item
            name="ausState"
            rules={[{ required: true, message: 'Please select your state!' }]}
          >
            <Select placeholder="State">
              <Option value="NSW">NSW</Option>
              <Option value="VIC">VIC</Option>
              <Option value="TAZ">TAZ</Option>
              <Option value="QLD">QLD</Option>
              <Option value="SA">SA</Option>
              <Option value="NT">NT</Option>
              <Option value="ACT">ACT</Option>
              <Option value="WA">WA</Option>
            </Select>
          </Form.Item>

          <div className="subscribe-checkboxes">
            <Form.Item
              name="dog"
              valuePropName="checked"
              rules={[
                { required: true, message: 'Please select your state!' }
              ]}
            >
              <Checkbox>
                Dog
              </Checkbox>
            </Form.Item>

              <Form.Item
              name="cat"
              valuePropName="checked"
              rules={[
                { required: true, message: 'Please select your state!' }
              ]}
            >
              <Checkbox>
              Cat
              </Checkbox>
            </Form.Item>
          </div>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Subscribe
              </Button>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                { required: true, message: 'Please agree T&C' }
              ]}
            >
            <Checkbox>
              I give EVAGEN permission to use the above email address.
            </Checkbox>
            </Form.Item>
            <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information see our Privacy Policy</p>
        </Form>
      </div>
    )
  }

  confirmation = () => {
    return(
      <div className= "submitted-container">
        <div class="logoVert"> </div>
        <h2>Thank you for subscribing</h2>
      </div>
    )
  }

  render() {
      return(
        <div>
          { this.state.submitted ?
              this.confirmation() : this.form()
          }
        </div>
      );
    }

}

export default Subscribe;
