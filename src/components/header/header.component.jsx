
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.componnet';


import './header.styles.scss';
import CarIcon from '../cart-icon/cart-icon.component';

const Header =({currentUser,hidden}) =>  (

    <div className = 'header'>

        <Link to ='/' className='logo-container'>
            <Logo/>
        </Link>

        <div className ='options'>

            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>

            {
                currentUser ? (
                    
                <div className='option' onClick={() => auth.signOut()}>
                        Sign Out
                </div>

                )

                : (
                
                <Link className='option' to ='/signin'> SIGN IN</Link>

                )
            }
        <CarIcon/>
        </div>
      {
          hidden ? null :   <CartDropDown/>
      }
        
    </div>
)

const mapStateToProps =({user:{currentUser},cart:{hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden,

})


export default connect(mapStateToProps)(Header)