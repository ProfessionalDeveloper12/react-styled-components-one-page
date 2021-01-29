import { TopBar, HeaderBox } from './styles';
import Container from '../../layouts/container';
import {FaTwitter, FaFacebook, FaYoutube, FaFacebookF} from "react-icons/fa"

export default function Header() {
    return(
        <div>
            <TopBar>
                <Container className="container">
                    <div className="topbar-content">
                        <p className="today">Friday, January 29, 2021</p>
                        <div className="social-icons">
                            <FaFacebookF color="#fff" fontSize={18} style={{marginLeft: 6, marginRight: 6}} />
                            <FaTwitter color="#fff" fontSize={18} style={{marginLeft: 6, marginRight: 6}} />
                            <FaYoutube color="#fff" fontSize={18} style={{marginLeft: 6, marginRight: 6}} />
                        </div>
                    </div>
                </Container>
            </TopBar>
            <HeaderBox>
                <Container className="container">
                    <img src="/images/MainLogo.webp" alt="Logo"/>
                </Container>
            </HeaderBox>
        </div>
    )
}