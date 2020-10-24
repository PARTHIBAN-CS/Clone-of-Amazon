import React , {Component} from 'react'
import AvailableProduct from '../Pages/AvailableProduct'
import Header from '../Pages/Header'
import Product from '../Pages/Product'
class Full extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <React.Fragment>
            <div style={{height : '100%'}}>
                <div style={{height : '10%'}}>
                        <Header />  
                </div>
                <div style={{height : '70%' , marginTop : '10%'}}>
                    <Product props={this.props}/>
                </div>
            </div>
            {/* <div>
                <AvailableProduct />
            </div> */}
            </React.Fragment>
         );
    }
}
 
export default Full;