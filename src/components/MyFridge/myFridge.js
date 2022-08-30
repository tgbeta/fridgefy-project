import React, { Component } from 'react';

class MyFridge extends Component {
    render() {
        return (
            <div className="column-sides">
            <h2>My Fridge</h2>
            <div>
              <input />
              <div>
                <button>Search</button>
                <button>Add</button>
              </div>
            </div>
            <div className="column-box">
              <p className="column-itens">Item:</p>
              <p className="column-button">X</p>
            </div>
          </div>
        );
    }
}

export default MyFridge;