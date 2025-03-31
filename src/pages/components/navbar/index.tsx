import { Spin as Hamburger } from 'hamburger-react'
import { ContainerMenu } from "./styles";
import { useState } from 'react';
import Logo from "../../../assets/LOGO_NEG.svg";
import AngleRight from "../../../assets/angle-right-solid-svgrepo-com.svg";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

    return (
        <ContainerMenu>
            <nav>
                <div className="head-menu">
                    <div className='hamburger'>
                        <Hamburger size={24} color="#fff" toggled={isOpen} toggle={setIsOpen} />
                    </div>
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <div className="sub-menu">
                <a href="https://test.sagatiba.com/dev/our-history/">
                    <span>NOSSA HISTÓRIA</span>
                </a>

                <a href="https://test.sagatiba.com/dev/our-production/">
                    <span>NOSSA ESSÊNCIA</span>
                </a>

                <a href="" style={{ boxShadow: "inset 0px -2px 0px #f05a30" }}>
                    <span>MAIARA E MARAISA</span>
                </a>

                <a href="">
                    <span>PRODUTOS</span>
                </a>

                <a href="https://test.sagatiba.com/dev/caipirinha/">
                    <span>COQUETÉIS</span>
                </a>

            </div>
            <div className={isOpen ? "menu visible" : "menu hidden"}>
                <div className='menu-items'>
                    <a href="https://test.sagatiba.com/dev/our-history/">
                        <span>NOSSA HISTÓRIA</span>
                    </a>

                    <a href="https://test.sagatiba.com/dev/our-production/">
                        <span>NOSSA ESSÊNCIA</span>
                    </a>

                    <a href="" style={{ boxShadow: "inset 0px -1px 0px #f05a30" }}>
                        <span>MAIARA E MARAISA</span>
                    </a>

                    <a onClick={() => setIsProductsMenuOpen(true)}>
                        <span>PRODUTOS</span>
                        <span><img className='angle-right' src={AngleRight} /></span>
                    </a>

                    <a href="https://test.sagatiba.com/dev/caipirinha/">
                        <span>COQUETÉIS</span>
                    </a>
                </div>
            </div>

            <div className={isProductsMenuOpen ? "menu visible" : "menu hidden"}>
                <div className='menu-items'>
                    <a onClick={() => setIsProductsMenuOpen(false)} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
                        <span style={{ height: '16px' }}><img className='angle-right' src={AngleRight} style={{ rotate: '180deg' }} /></span>
                        <span>BACK</span>
                    </a>

                    <a href="https://test.sagatiba.com/dev/cristalina/">
                        <span>CRISTALINA</span>
                    </a>

                    <a href="https://test.sagatiba.com/dev/jabuticaba-e-jambu/">
                        <span>JABUTICABA E JAMBU</span>
                    </a>
                </div>

            </div>
        </ContainerMenu>
    )
}