import React , {Component} from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
            <div style={{width : '100%', height:'100px'}}>     
                <Toolbar>
                <IconButton edge="start" className={''} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            
                
                </Toolbar>
            </div>
            <div style={{width:"100%", height : '100px'}}>
                <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                <LocalLibraryIcon></LocalLibraryIcon>
                <FitnessCenterIcon></FitnessCenterIcon>
                <PhoneAndroidIcon></PhoneAndroidIcon>
            </div>
            </React.Fragment>
        );
    }
}
 
export default Main;