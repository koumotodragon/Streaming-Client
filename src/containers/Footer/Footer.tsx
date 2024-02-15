import React from 'react'
import "./Footer.css"
import footerLogo from '../../assets/footer-logo.png'

const footerMenu = [
    {
        id: 1,
        name: 'PRIVACY',
        url: '#'
    },
    {
        id: 2,
        name: 'TERMS',
        url: '#'
    },
    {
        id: 3,
        name: 'DMCA',
        url: '#'
    },
    {
        id: 4,
        name: 'SUBMIT VIDEO',
        url: '#'
    }
];
export const Footer = () => {
    return (
        <div className="Footer-Container">
            <footer className="footer-main">
                <div className="footer-logo">
                    <a href="">
                        <img src={footerLogo} alt="" />
                    </a>
                </div>
                <div className="footer-menu">
                    <ul>
                        {footerMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </footer>
        </div>
    )
}
