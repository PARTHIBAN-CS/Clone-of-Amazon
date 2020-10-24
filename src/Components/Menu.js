import React , {Component} from 'react'
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var {  onChange = ()=>{}} = this.props

        return (  
                <div>
                    <DehazeSharpIcon
                    onChange = {''}
                    />
                </div>
        );
    }
}
 
export default Menu;