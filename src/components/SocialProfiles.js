import React  from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiles extends React.Component {
    render() {
        return(
            <div style={{textAlign:"center"}}>
            <h3>Contact Me</h3>
            {
                SOCIAL_PROFILES.map(PROFILE => {
                    return <SocialProfile key={PROFILE.id} socialProfile={PROFILE}/>
                })
            
            }

            </div>
        );
    }
}

class SocialProfile extends React.Component {
    render(){
        const{image,link} = this.props.socialProfile;
        return(
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={image} alt="Social" style={{width: 30 , margin:  10}} />
            </a>
        );
    }
}
export default SocialProfiles