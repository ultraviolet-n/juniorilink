import { useState } from "react";
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
    setCloud: (num: number, ordinal: any, random: any) => any;
    modalActive?: boolean;
    setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
    bodyscroll: () => any;
}
const ModalCard = styled.div<{ active: boolean }>`
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 676px;
    gap: 20px;
    background-color: #fff;
    padding: 24px;
    margin: 0 16px 0 16px;
    opacity: ${(props: { active: boolean; }) => (props.active ? '1' : '0')};
    transform: ${(props: { active: boolean; }) => (props.active ? 'translate(0, 0)' : 'translate(0, -100%)')}; 
    transition: all 0.5s;
`
const ModalBody = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap:7.5px;
`
const ModalItem = styled.div`
    font-family: 'Source Sans Pro';
    display: flex;
    background: #C2C4FF;
    padding:7.5px;
    border-radius: 2px;
    &:hover {
        background: #797ddf;
        transition: all 0.5s;
        cursor: pointer;
    }
    @media (max-width: 750px) {
    font-size:16px;
                        }
    @media (max-width: 530px) {
    font-size:15px;
    padding:5.5px;
                        }
`
const ModalClose = styled.div`
    width: 1em;
    height: 1em;
    color: #333333;
    background-color: #C2C4FF;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    &:hover {
        background: #797ddf;
        transition: all 0.5s;
        cursor: pointer;
    }
`
const ModalHead = styled.div`
    display:flex;
    justify-content: space-between;
    padding-bottom:20px;
    @media (max-width: 750px) {
    padding-bottom:15px;
                    }
    @media (max-width: 530px) {
    padding-bottom:10px;
                    }
`
const ModalTitle = styled.div`
    font-family: 'Montserrat';
    font-weight: 600;
    color: #333333;
    font-size:25px;
    @media (max-width: 530px) {
    font-size:20px;
                        }
`
const ModalWrapper = styled.div<{ active: boolean }>`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    z-index: 3;
    opacity: ${(props: { active: boolean; }) => (props.active ? '1' : '0')};
    visibility: ${(props: { active: boolean; }) => (props.active ? 'visible' : 'hidden')}; 
`
const Modal: React.FC<Props> = ({ stateswords, setCloud, ordinalCloud, randomCloud, modalActive, setModalActive, bodyscroll }) => {

    return (
        <ModalWrapper active={modalActive ? true : false} onClick={() => {
            setModalActive!(false);
            bodyscroll();
        }}>
            <ModalCard active={modalActive ? true : false}>
                <ModalBody  onClick={e => e.stopPropagation()}>
                    <ModalHead>
                        <ModalTitle>Выберите фразу</ModalTitle>
                        <ModalClose onClick={() => {
                            {
                                setModalActive!(false)
                                bodyscroll();
                            }
                        }}></ModalClose>
                    </ModalHead>
                    {stateswords!.map((stateswords, i = 0) =>
                        <ModalItem key={i} onClick={() => {

                            setCloud(i++, ordinalCloud, randomCloud);
                            setModalActive!(false);
                            bodyscroll();

                        }}>
                            {stateswords.text}
                        </ModalItem>
                    )}
                </ModalBody>
            </ModalCard>
        </ModalWrapper>
    )
}


export default Modal;