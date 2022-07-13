import { useState } from "react";
import Cloud from "./cloud/cloud";
import Modal from "./modal/modal";
import styled from 'styled-components'
import Board from "./board/board";
import Toast from "./toast/toast";

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
    stateText?: string;
    modalActive?: boolean;
    setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
    bodyscroll: () => any;
    toastActive?: boolean;
    setToastActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainWrapper = styled.div`
    flex-direction: column;
    flex: 1 1 auto;
    background: #585cc6 url("image/main/back.svg") 100% 25% no-repeat;
`



const Main: React.FC<Props> = ({ randomCloud, ordinalCloud, checkCloud, stateswords, setCloud, stateText, modalActive, setModalActive, bodyscroll, toastActive,setToastActive }) => {



    return (

        <MainWrapper>

            <Board stateText={stateText} />
            <Cloud randomCloud={randomCloud} ordinalCloud={ordinalCloud} checkCloud={checkCloud} setToastActive={setToastActive} />
            <Modal stateswords={stateswords} setCloud={setCloud} ordinalCloud={ordinalCloud} randomCloud={randomCloud} modalActive={modalActive} setModalActive={setModalActive} bodyscroll={bodyscroll} />
            <Toast toastActive={toastActive} setToastActive={setToastActive} />

        </MainWrapper>
    )
}


export default Main;