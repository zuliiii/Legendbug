// import React from 'react'

//  function User() {
//     return (
//         <div>
//             <ul>
//                 <li>Ad: {this.props.ad}</li>
//                 <li>Yas: {this.props.yas}</li>
//                 <li>Maas: {this.props.maas}</li>
//             </ul>
//         </div>
//     )
// }
// export default User;

import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    render() {
        const bool = false;
        return (
            <div>
                {/* {
              bool ? <h3>dogrudur</h3>
              : <h3>sehvdir</h3>
            } */}

             {/* <h1>{"salam".toUpperCase()}</h1>  */}


                <ul>
                <li>Ad: {this.props.ad}</li>
                <li>Yas: {this.props.yas}</li>
                <li>Maas: {this.props.maas}</li>
            </ul>
            </div>
        )
    }
}

// PropTypes ve Default Props: mutleq import etmek lazim yuxarida >> impt

User.propsType ={
   ad : PropTypes.string.isRequired,
   yas : PropTypes.string.isRequired,
   maas : PropTypes.string.isRequired
}

User.defaultProps = {
    ad: "ad yoxdur",
    yas: "yas yoxdur",
    maas: "maas yoxdur"
}

export default User




