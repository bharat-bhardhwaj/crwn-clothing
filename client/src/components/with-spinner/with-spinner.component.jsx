import React from 'react';
import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';


const WithSpinner = WrrapedComponent => ({isLoading,...otherProps}) =>{

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):(
        <WrrapedComponent {...otherProps}/>
    )
}

export default WithSpinner;