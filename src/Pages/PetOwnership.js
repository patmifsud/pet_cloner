import { Card, Meta} from 'antd';
import React, {Component} from 'react';
import { map } from 'underscore';
import {Pie} from 'react-chartjs-2';



class PetOwnership extends Component {

  render () {
    const user = this.props.allusers;
    const catOwner = user.filter(user => user.cat == true).length;
    const dogOwner = user.filter(user => user.dog == true).length;

    return (
      <div>
        <div style={{marginRight:"70px"}}className="site-card-border-less-wrapper">
            <Pie
              data={
                {
                labels: ['Cat', 'Dog', 'Both'],
                 datasets: [
                   {
                   label: 'Owners',
                   backgroundColor: ['#48a4e7','#0087e9','#0467b0'],
                   borderColor: 'rgba(0,0,0,1)',
                   borderWidth: 2,
                   data: [
                      catOwner,
                      dogOwner,
                      catOwner+dogOwner
                   ]}
                 ]
                }
              }
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'Pet ownership',
                  fontSize:17
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
        </div>
        <div>
            <p><strong>Total Cat:</strong> { catOwner }</p>
            <p><strong>Total Dog:</strong> { dogOwner }</p>
            <p><strong>Total :</strong> { dogOwner + catOwner }</p>
        </div>

      </div>

    )
  }
}

export default PetOwnership;
