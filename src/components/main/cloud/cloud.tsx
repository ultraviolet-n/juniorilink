import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSpeechSynthesis } from 'react-webspeech';
import styled from 'styled-components'

interface Words {
    id: number;
    text: string;
}

interface WordsState {
    random: Words[];
    ordinal: Words[];
    text: string;
}

interface Props {
    randomCloud?: Words[];
    ordinalCloud?: Words[];
    checkCloud?: Words[];
    stateswords?: WordsState[];
    setToastActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemCloud = styled.div`
    display: flex;
    background: #C2C4FF;
    padding:9.5px;
    border-radius: 4px;
    @media (max-width: 750px) {
    padding:8.5px;
            }
    @media (max-width: 530px) {
    padding:7.5px;
            }
`
const BoardCloud = styled.div`
    gap:10px;
    padding:20px;   
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
    background: #f5f5f5;
    margin-bottom:10px;
    min-width:50%;
    max-width:80%;
    min-height:80px;
    height:100%;
    background: #F5F5F5;
    border-radius: 2px;
    font-family: 'Source Sans Pro';
    color: #333333;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    transition: all 0.5s;
    @media (max-width: 750px) {
    padding:18px;
    min-width:90%;
                }
    @media (max-width: 530px) {
    padding:15px;
    min-width:90%;
    font-size: 16px;
                }
`
const CloudTitle = styled.div`
    font-family: 'Montserrat';
    font-weight: 500;
    color: #ffffff;
    font-size: 35px;
    padding:0px 10px 10px 10px;
    @media (max-width: 750px) {
    font-size: 30px;
                    }
    @media (max-width: 530px) {
    font-size: 25px;
                    }
`
const ButtonCloud = styled.div`
    margin:10px 0 10px 0;
    color: #333333;
    font-weight: 600;
    border: none;
    border-radius: 2px;
    background: #FFFF;
    padding:17px 28px 17px 28px;
    margin-bottom: 40px;
    &:hover {
        background: #F5F5F5;
        transition: all 0.5s;
        cursor: pointer;
    }
    @media (max-width: 530px) {
        height:100%;
        min-width:85%;
        margin-bottom: 30px;
    }    
    @media (max-width: 420px) {
        height:100%;
        min-width:82%;
        margin-bottom: 24px;
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


const Cloud: React.FC<Props> = ({ randomCloud, ordinalCloud, checkCloud, setToastActive }) => {

    const timeToast = (): ReturnType<typeof setTimeout> => {
        return setTimeout(() => {
            setToastActive!(false);
        }, 2500);
    }

    const { speak } = useSpeechSynthesis();

    const check = (): void => {
        if (JSON.stringify(checkCloud) === JSON.stringify(ordinalCloud)) {
            let arr = []
            for (var i = 0, il = ordinalCloud!.length; i < il; i++) {
                arr.push(ordinalCloud![i].text)
            }
            let text = arr.join(" ")
            speak({ text })
        } else {
            setToastActive!(true);
            timeToast();
        }
    }
    return (
        <Container>
            <CloudTitle>Варианты слов</CloudTitle>
            <Droppable droppableId="cloud-random" direction="horizontal">
                {(provided) => (
                    <BoardCloud className="boards" ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {randomCloud!.map((item, index) =>
                            <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                                {(provided) => (
                                    <ItemCloud className="items"
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}>
                                       
                                        <div>{item.text}</div>
                                    </ItemCloud>
                                )}
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </BoardCloud>)}
            </Droppable>
            <CloudTitle>Перевод</CloudTitle>
            <Droppable droppableId="cloud-ordinal" direction="horizontal">
                {(provided) => (<BoardCloud className="boards"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {ordinalCloud!.map((item, index) =>
                        <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                            {(provided) => (
                                <ItemCloud className="items"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}>
                                    
                                    <div>{item.text}</div>
                                </ItemCloud>
                            )}
                        </Draggable>
                    )}
                    {provided.placeholder}
                </BoardCloud>)}
            </Droppable>
            <ButtonCloud onClick={check}>Проверить</ButtonCloud>
        </Container>
    )
}


export default Cloud;