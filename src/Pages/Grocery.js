import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import image from '../IMAGE/tomato.jpg'
import carrot from '../IMAGE/carrot.jpg'


class Grocery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{display:'flex'}}>
                
                    <Paper  style={{width:'20%', height:'200px',backgroundColor:'orange'}}>
                    <img src={image} style={{width:'70%', height:'180px'}}/>
                    </Paper>
                
                
                    <Paper  style={{width:'20%', height:'200px',backgroundColor:'orange'}}>
                    <img src={carrot} style={{width:'70%', height:'180px'}}/>
                    </Paper>
                
            </div>
         );
    }
}
 
export default Grocery;