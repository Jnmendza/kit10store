import React from 'react';
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'
import CarouselHeader from './Carousel'

const ProductList = () => {

    return (
        
        <div>
            <CarouselHeader />
            <div className="container mt-1">
                <Title name="Our " title="Vintage Products" />
                <div className="row">
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map( product => {
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
    )
}

export default ProductList