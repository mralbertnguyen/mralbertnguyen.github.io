import React from 'react'
import InfoSmallView from '../../components/ShopPageComponents/InfoSmallView'
import ShopHeader from '../../components/ShopPageComponents/ShopHeader'
/**
 * This is a page will appear as a ecommecer website
 * [COMPONENTS]
 * - InfoSmallView -> view on header to show address, email, phone and view show social connection icons 
 * - Header -> include logo , main menu , search , icon liked(heart), cart icon, total money in cart, icon user
 * - Image as landing page 
 * - Menu option to choice kind of product as a filter
 * - Special Deal where to show hot sale, hot deal as something like that
 * - Popular Product 
 * - Footer
 * 
 * [Special components]
 * floating button back to top
 * 
 */
export default class ShopPage extends React.Component{
    render(){
        return(
            <>
                <InfoSmallView/>
                <ShopHeader/>
            </>
        )
    }
}