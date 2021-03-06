import React from 'react';
import { Meteor } from 'meteor/meteor';
import {browserHistory} from 'react-router';

export default class AddInvoice extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const clientHomeRoute = '/admin/' + this.props.params.clientId;
    const d1 = this.refs.d1.value.trim();
    const d2 = this.refs.d2.value.trim();
    const d1name = this.refs.d1name.value;
    const d2name = this.refs.d2name.value;
    const u1 = this.refs.u1.value.trim();
    const u2 = this.refs.u2.value.trim();
    const u1name = this.refs.u1name.value;
    const u2name = this.refs.u2name.value;
    if (d1) {
      // 7/21, 9pm: the issue here is defining updates, and perhaps passing that spread operator stuff
      // from the Meteor method 'clients.addInvoice' in clients.js
      Meteor.call('clients.addInvoice', d1name, d1, d2name, d2, u1name, u1, u2name, u2);
      console.log('First Demand: ', d1name, d1);
      console.log('Second Demand: ', d2name, d2);
      console.log('First Usage: ', u1name, u1);
      console.log('Second Usage: ', u2name, u2);
      this.refs.d1.value = "";
      this.refs.d2.value = "";
      this.refs.d1name.value = "";
      this.refs.d2name.value = "";
      this.refs.u1.value = "";
      this.refs.u2.value = "";
      this.refs.u1name.value = "";
      this.refs.u2name.value = "";
      // browserHistory.push(clientHomeRoute);
    };
  }
  render() {
    console.log(this.props.params);
    console.log(this.props);
    return (
      <div className="container">
        <h2>Add Invoice</h2>
        <h6>Next up: put Mobx in to pass through the customer name</h6>
        <h6>Wire this up to a 'clients.update' Meteor method</h6>
        <h6>Figure out the whole database thing</h6>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="row">
            <div className="form-group">
              <div className="col-xs-2">Demand Charge 1 name</div>
              <div className="col-xs-2">
                <input type="text" ref="d1name" placeholder="Utility Demand" />
              </div>
              <div className="col-xs-2">Demand Charge 1 value</div>
              <div className="col-xs-2">
                <input type="number" ref="d1" defaultValue="10" step="0.01"  />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="form-group">
                <div className="col-xs-2">Demand Charge 2 name</div>
                <div className="col-xs-2">
                  <input type="text" ref="d2name" placeholder="On-Peak Demand" />
                </div>
                <div className="col-xs-2">Demand Charge 2 value</div>
                <div className="col-xs-2">
                  <input type="number" ref="d2" defaultValue="5" step="0.01" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <div className="col-xs-2">Usage Charge 1 name</div>
                <div className="col-xs-2">
                  <input type="text" ref="u1name" placeholder="xyz" />
                </div>
                <div className="col-xs-2">Usage Charge 1 value</div>
                <div className="col-xs-2">
                  <input type="number" ref="u1" defaultValue="0.05" step="0.001" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <div className="col-xs-2">Usage Charge 2 name</div>
                <div className="col-xs-2">
                  <input type="text" ref="u2name" placeholder="Fuel Cost Adjustment" />
                </div>
                <div className="col-xs-2">Usage Charge 2 value</div>
                <div className="col-xs-2">
                  <input type="number" ref="u2" defaultValue="0.02" step="0.001" />
                </div>
              </div>
            </div>
            <div className="row">
              <button className="btn btn-default">Submit Invoice</button>
            </div>
        </form>
      </div>
    );
  }
}
