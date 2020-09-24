import React,{Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class LoginFacebook extends Component{
    state={
        auth:false,
        name: '',
        picture: ''
    }
    componentClicked= () =>{
        console.log("Facebook button clicked");
    }

    responseFacebook= (response) => {
        console.log(response);
    }

    render(){
        let facebookData;

        this.state.auth ?
            facebookData=(
                <div>

                </div>
            ):
            facebookData=(
                <FacebookLogin
                    appId="2797056503848286"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
            );
         return(
             <>
                {facebookData}
            </>
         );
    }
}