import React , {Component} from 'react'
import Button from '@material-ui/core/Button';
class ShpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var {label = '' , onClick = ()=>{}} = this.props
        return ( <div> 
<Button variant="contained" color="primary" onClick={onClick} style={{backgroundColor:'#2b3745'}}>
        {label}
      </Button>
        </div> );
    }
}
 
export default ShpButton;