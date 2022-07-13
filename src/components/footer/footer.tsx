import styled from 'styled-components'

const Foot = styled.div`
    width: 100%;
    background: #fff;
    z-index: 1;
    padding-bottom:20px;
    padding-top:20px;
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`
const Coper = styled.div`
    color: #8A8A8A;
`
const LinkItem = styled.a`
    &:not(:last-child){
        padding:0 16px 0 0;
    }
    @media (max-width: 900px) {
        &:not(:last-child){
            padding:0 12px 0 0;
        }
    }
    @media (max-width: 530px) {
        &:not(:last-child){
            padding:0 8px 0 0;
        }
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

const Footer: React.FC = () => {
    return (
        <Foot>
            <Container>
                <Coper>© ПРИГЛАСИТЬ НА РАБОТУ &#10132;</Coper>
                <div>
                    <div>
                        <LinkItem href="https://vk.com/id89926743"><img src="./image/footer/VK.svg" alt="" /></LinkItem>
                        <LinkItem href="https://t.me/ultraviolet_nv"><img src="./image/footer/Telegram.svg" alt="" /></LinkItem>
                    </div>
                </div>
            </Container>
        </Foot>
    )
}
export default Footer;