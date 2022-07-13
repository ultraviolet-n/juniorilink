import styled from 'styled-components'

interface Props {
    stateText?: string;
}
const BoardBody = styled.div`
    display:flex;
    align-items:center;
    margin: 0 auto;
`
const BoardTitle = styled.h1`
    font-family: 'Montserrat';
    font-weight: 500;
    color: #ffffff;
    font-size: 60px;
    @media (max-width: 990px) {
    font-size: 45px;
    }
    @media (max-width: 530px) {
    font-size: 35px;
    }
`
const Teacher = styled.img`
    max-height:275px;
    padding-right:25px;
    @media (max-width: 750px) {
    max-height:240px;
        }
    @media (max-width: 530px) {
    max-height:200px;
        }
`
const BoardTeacher = styled.div`
    background: #F5F5F5;
    border-radius: 2px;
    max-width: 519px;
    max-height:200px;
    padding:20px;
    font-family: 'Source Sans Pro';
    color: #333333;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: 750px) {
    font-size: 18px;
            }
    @media (max-width: 530px) {
    font-size: 16px;
    line-height: 18px;
            }
    
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    max-width: 1280px;
    margin: 0 auto;
    padding-left:10px;
    padding-right:10px;
`


const Board: React.FC<Props> = ({ stateText }) => {
    return (
        <Container>
            <BoardTitle>Переведите это предложение</BoardTitle>
            <BoardBody>
                <div> <Teacher src="./image/main/board/teacher.png" alt="" /></div>
                <BoardTeacher>
                    {stateText}
                </BoardTeacher>
            </BoardBody>
        </Container>
    )
}
export default Board;