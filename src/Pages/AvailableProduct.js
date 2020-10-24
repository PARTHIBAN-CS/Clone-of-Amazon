import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import ModelDialog from '../Components/ModelDialog'
import ShpButton from '../Components/ShpButton'
import { Grid, ModalManager } from '@material-ui/core';
import ShpTextField from '../Components/ShpTextField';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Header from '../Pages/Header';
var totalCard =  ['image' , 'describtion' , 'price' , 'quantity' , 'add' , 'cart' , 'buy'] 
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

class AvailableProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            cards : [] ,
            addCard : 0 , 
            displayAddedCard : [] , 
            openModel : false
        }
    }
    componentWillMount(){
        var  totalCard = [
            {
                image : 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/25/full/1566751811-4884.jpg' ,
                describtion : 'Amul Product',
                price : 1000 ,
                quantity : 0 , 
                totalprice : 0,
                totalcart : 0 ,
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul juices',
                price : 50,
                quantity : 0 ,
                totalprice : 0,
                totalcart : 0 ,
        
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul',
                price : 50,
                quantity : 0 ,
                totalprice : 0,
                totalcart : 0 ,

        
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul juices',
                price : 199,
                quantity : 0,
                totalprice : 0,
                totalcart : 0 ,


        
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul juices',
                price : 100,
                quantity : 0 ,
                totalprice : 0,
                totalcart : 0 ,


        
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul juices',
                price : 92,
                quantity : 0 ,
                totalprice : 0,
                totalcart : 0 ,


        
            },
            {
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
                describtion : 'Amul juices',
                price : 50,
                quantity : 0 ,
                totalprice : 0,
                totalcart : 0 ,


        
            },
        ]
        this.state.cards = totalCard 
        this.setState({cards : this.state.cards})
    }
    ADD=(index)=>{
        var total = this.state.cards
        total[index]['quantity'] = total[index]['quantity'] + 1 
        total[index]['totalprice'] = total[index]['quantity'] * total[index]['price']
        
        this.setState({
            cards : total
        })
    }
    SUB=(index)=>{
        var total = this.state.cards 
        if(total[index]['quantity'] >=1){
            total[index]['quantity'] = total[index]['quantity'] - 1 
            total[index]['totalprice'] = total[index]['quantity'] * total[index]['price']
            this.setState({
                cards : total
            })
        }
    }
    BACK=()=>{
        console.log(this.props)
        this.props.history.push('/')
    }
    addtocard=(index)=>{
       var buyCard  = this.state.addCard 
       console.log(this.state.cards[index])
       var displayAddedCard = this.state.displayAddedCard 
       displayAddedCard.push(this.state.cards[index])

       console.log(displayAddedCard)
       console.log(this.state.cards[index]['quantity'])
        var totcard = this.state.cards[index]['quantity'] + buyCard 
        this.setState({
            addCard : totcard , 
            displayAddedCard : displayAddedCard
        })
    }
    openModel=()=>{
        this.setState({
            openModel : true
        })
    }
    openCart=(index)=>{
        var displayCart = ['image' ,'describtion', 'quantity' , 'price ' ,'totalprice' ]

    }
    render() { 
        return ( 
            <div>
                <Header />
                <div style={{marginTop : '150px' , marginLeft:'95%'}}>
                <StyledBadge badgeContent={this.state.addCard} color="secondary">
                <ShoppingCartIcon  onClick={this.openModel} />
                </StyledBadge>
             
                </div>
                <div>
                    <ShpButton
                    label='BACK'
                    onClick={this.BACK}
                    />
                </div>
            
            <Grid container style={{marginTop : '10px'}}>
            {
                this.state.cards.map((item , index)=>{
                   return <Grid item xs={4} >
                       <Paper style={{height : '400px' , width : '300px' , justifyContent : 'space-evenly'}}>
                       
                              
                        {
                          totalCard.map((items , indexes)=>{
                              return  <Grid item xs={6}>
                                
                                    {
                                        items == 'describtion' ? 
                                        <h3>{item['describtion']}</h3> :
                                        items == 'image'?
                                    <img src={item['image']} style={{height : '120px' , width : '250px'}}></img> :
                                    items == 'price'?
                                    <span>{item['price']}</span> :
                                       
                                        items == 'add'?
                                        <div style={{display : 'flex'}}>
                                        <h3  style={{color : 'green'}} onClick={()=>this.ADD(index)} >+</h3> 
                                       
                                        <h3 style={{marginLeft : '3%' , marginRight : '3%'}}>
                                        {item['quantity']}  quantity   / {item['totalprice']} totalprice
                                        </h3>
                                      
                                        <h3 style={{color : 'red'}} onClick={()=>this.SUB(index)} >-</h3> 
                                        </div>
                                       :
                                       items == 'cart' || items == 'buy' ?
                                       <ShpButton
                                       label={items}
                                       onClick={items == 'cart' ? ()=>this.addtocard(index) : this.buy}
                                       />
                                       :null
                                    }
                              </Grid>
                        
                          })  
                        }
                    
                         </Paper>
                    </Grid>
                })
            }
      </Grid>
      
 
      <ModelDialog open={this.state.openModel} title={'Total products'} width={"30%"} handleClose={() => {
this.setState({
    openModel: false
})
}}>
    
<div className="sub-contentsecond" style={{ display: 'flex' }}>
    <div>
        <div style={{ width: 48 }}>
         <h5> Productdetails </h5>
        </div>

        <React.Fragment>
            {
                this.state.displayAddedCard.map((item , index)=>{
                    return totalCard.map((items , indexes)=>{
                    return <p>{item[items]}</p>
                    })
                })
            }
        </React.Fragment>
    </div>
</div>

</ModelDialog>
x`
      </div>
         );
    }
}
 
export default AvailableProduct;