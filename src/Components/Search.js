import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var { Search= 'Sample' , value = '' , onChange = ()=>{}} = this.props

        return ( 
            <div>
                <TextField
                style={{backgroundColor:'white'}}
                id="outlined-name"
                label="Search"
                value={value}
                onChange={onChange}
                variant="outlined"
                
                />
            </div>
         );
    }
}
 
export default Search;