import React , {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import Search from '../Components/Search';
import ShpButton from '../Components/ShpButton'
import Menu from '../Components/Menu'
var element = ['menu', 'logo', 'search' , 'account', 'order', 'prime' , 'cart']  
var subelement = ['mobile','today\'sdeal','BestSeller', 'computers', 'pantry','books','gift','newrelease','amazonpay','customer service' , 'sell']
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerBar :[1],
            subBar : [1]
          }
    }
    render() { 
        return ( 
                <React.Fragment>
                <AppBar color = 'primary' style={{width:'100%' ,height:'100px',backgroundColor:'#131921' , color : 'white'}}>
            {
                this.state.headerBar.map((item,index)=>{
                    return <Grid container >
                      {
                          element.map((items , indexes)=>{
                              var xs = 1
                              if(items == 'search'){
                                  xs = 5
                              }
                              else if(items == 'logo'){
                                  xs = 2
                              }
                              return <Grid item xs={xs}>
                                  {
                                  
                                    items == 'search'?
                                    <Search
                                    label = {items}
                                    value = {items}
                                    onChange = ''
                                    />
                                    :
                                    items == 'menu' ?
                                    <Menu
                                    onChange = ''
                                    />
                                    :
                                    items == 'account' || items == 'order' || items == 'prime' ?
                                    <ShpButton
                                    label ={items}
                                    onClick = ''
                                    />
                                    :
                                    null
                                  }  
                                  </Grid>

                          })
                          
                      }
                    </Grid>
                })
            }

                    <div style={{width:'100%' ,height:'50px',marginTop:'2%', backgroundColor:'#2b3745'}}>
                    {  
                    this.state.subBar.map((item,index)=>{
                    return <Grid container >
                      {
                          subelement.map((items , indexes)=>{
                              var xs = 1
                              if(items=='customer service'){
                                  xs=2
                              }
                              
                              return <Grid item xs={xs}>
                                  {
                                  
                                    
                                    <ShpButton
                                    label ={items}
                                    onClick = ''
                                    />
                                    
                                  }  
                                  </Grid>

                          })
                          
                      }
                    </Grid>
                })
                }
                        </div>
                </AppBar>
               
                </React.Fragment>
         );
    }
}
 
export default Header;