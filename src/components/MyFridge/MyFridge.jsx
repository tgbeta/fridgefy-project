import React, { Component } from 'react';
import StyledMyFridge from './StyledMyFridge'

class MyFridge extends Component {
    render() {
        return (
          <StyledMyFridge>
            <h2>My Fridge</h2>
            <div>
              <input />
              <div>
                <button>Search</button>
                <button>Add</button>
              </div>
            </div>
            <div>
              <p>Item:</p>
              <button>X</button>
            </div>
          </StyledMyFridge>
        );
    }
}

export default MyFridge;