
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'

interface Props {
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
    bodyscroll: () => any;
}

const ButtonHead = styled.div`
    font-family: 'Montserrat';
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 2px;
    background: #585cc6;
    padding:17px 28px 17px 28px;
    &:hover {
        background: #797ddf;
        transition: all 0.5s;
        cursor: pointer;
    }
    @media (max-width: 900px) {
        padding:16px 26px 16px 26px;
    }
    @media (max-width: 530px) {
        padding:15px 24px 15px 24px;
    }
`
const Head = styled.div`
    color: #fff;
    width: 100%;
    background: #fff;
    font-size: 18px;
    line-height: 18px;
    z-index: 1;
    padding-bottom:32px;
    padding-top:32px;
    @media (max-width: 900px) {
        padding-bottom:20px;
        padding-top:20px;
    }
    @media (max-width: 530px) {
        font-size: 16px;
        padding-bottom:12px;
        padding-top:12px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: #fff;
    max-width: 1280px;
    margin: 0 auto;
    padding-left:10px;
    padding-right:10px;
`

const Header: React.FC<Props> = ({ setModalActive, bodyscroll }) => {

    return (
        <Head>
            <Container>
                <div><img src="./image/header/logo.svg" alt="" /></div>
                <ButtonHead onClick={() => {
                    setModalActive(true);
                    bodyscroll();
                }}>Сменить фразу</ButtonHead>
            </Container>
        </Head>
    )
}
export default Header;