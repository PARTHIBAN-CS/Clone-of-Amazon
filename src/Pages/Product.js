import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

var totalCard = [
    {
        image : 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/25/full/1566751811-4884.jpg' ,
        describtion : 'Amul Product'
    },
    {
        image : 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/25/full/1566751811-4884.jpg' ,
        describtion : 'Amul Product'
    },
    {
        image : 'https://www.indiastudychannel.com/attachments/Resources/157161-11551-pro_akms_ct.jpg' ,
        describtion : 'Milk shake'
    },
    {
        image : 'https://lh3.googleusercontent.com/0lW-RECctX-h8c4z4pEXb6y9lYpcyUVW1GnUxhYTzhSalYW61WeeeQreol1BnVAy-Baf' ,
        describtion : 'Amul Product'
    },
    {
        image : 'https://5.imimg.com/data5/SE/PH/AC/SELLER-80635375/cc-500x500.jpg' ,
        describtion : 'Dark Chocolate'
    },
    {
        image : 'https://images-na.ssl-images-amazon.com/images/I/715XDBQH2aL._SX569_.jpg' ,
        describtion : 'Butter'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq63rSCb93DAJCM6TaZVKpLkg4lPwGctLnxA&usqp=CAU' ,
        describtion : 'Amul juices'
    },
    {
        image : 'https://img.dmart.in/images/rwd/products/I/G/h/IGhee1LAMUL3378XX290216_1_B.jpg' ,
        describtion : 'Ghee'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE1l0tJ2TcRsP8sDFqbZ4aIf2fZFe1NgaO_w&usqp=CAU' ,
        describtion : 'Ice Cream'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOTSvhLhX5hOva8CEhao6t0UNOXXcPr2mGvQ&usqp=CAU' ,
        describtion : 'Slim n Trim'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJE-IiRmg1bAI0d3cTBYsRyUYgr64nwsWeRw&usqp=CAU' ,
        describtion : 'Milk powder'
    },
    {
        image : 'https://pbs.twimg.com/media/ED6kIHxU8AAIor-.jpg' ,
        describtion : 'Chocolate Powder'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSHtSb-VPTS4t74bWcB7uxUT9EmPl4Z-YnzQ&usqp=CAU' ,
        describtion : 'Milk'
    },
    {
        image : 'https://b7.pngbarn.com/png/955/231/malai-paneer-milk-amul-cheese-milk-png-clip-art.png' ,
        describtion : 'Panneer'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2fAOgq6-TbTdpFfbqkSwEkL4fmizz0U5jNw&usqp=CAU' ,
        describtion : 'Cream milk'
    },
]
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards : [1]
         }
    }
    NEXT = (items , indexes) => {
        console.log(items)
        console.log(this.props)
        this.props.props.history.push('/AvailableProduct')

    }
    render() { 
        console.log(this.props)
        return (  
            <div> 
                {
                    this.state.cards.map((item , index)=>{
                       return <Grid container>
                            {
                              totalCard.map((items , indexes)=>{
                                  return <Grid item xs={4}>
                                      <Paper style={{height : '200px' , width : '300px' , justifyContent : 'space-evenly'}} onClick={()=>this.NEXT(items , indexes)}>
                                        <h3>{items['describtion']}</h3>
                                            <img src={items['image']} style={{height : '120px' , width : '250px'}}></img>
                                      </Paper>
                                  </Grid>
                              })  
                            }
                        </Grid>
                    })
                }
            </div>
                
        );
    }
}
 
export default Product;