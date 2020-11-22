import React from 'react';
import SingleCard from './Acard';

import ShowAdded from './showadded';

//import { connect } from 'react-redux';
//import { fetchPosts } from '.../Actions/postActions'

function CategoryName (props){
  const category = props.category;
  let displayCategory = (
        <h2>{category}</h2>
        )
  return displayCategory;
} 

function MyShop (props){


  const rows = [];
  let lastCategory = null;

  while (props.shops.product != null) {
    rows.push()  
  }

  props.shops.forEach((product) => {
    if (product.mainCategory !== lastCategory) {
      rows.push(
        <CategoryName category = {product.mainCategory} key = {product.mainCategory}/>
      )
    }

    rows.push(
    
        <SingleCard product = {product} key = {product.id} onclick = {props.onclick} Ronclick = {props.handleRonclick}/>
      
    );
    lastCategory = product.mainCategory;
    
  });

/*const shopComponent = Shops.map(shop => <SingleCard key={shop.id} product={shop}/>)*/
    let ShopCard =
        <div>
            {/*<Card.Group style={{justifyContent: 'center', textAlign: 'center'}}>*/}
            <div styles={{justifyContent: "center", textAlign: 'center'}}>
            
                {rows}
            
            </div>
            {/*</Card.Group>*/}

              <ShowAdded counter= {props.shopAdded}/>
        </div>

    return ShopCard;
}

export default MyShop;
/*export default connect(null, {fetchPosts})(MyShop);*/