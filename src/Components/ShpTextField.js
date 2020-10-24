import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';
class ShpTextField extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        var {ShpLabel = '' , value = '' , onChange = ()=>{}} = this.props
        return (
            <div>
            <TextField id="standard-basic" label={ShpLabel} value={value}  onChange={onChange}/>
            </div>
        )
    }
}
export default ShpTextField