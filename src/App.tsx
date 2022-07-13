import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import Main from './components/main/main';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import stateswords from './state/state'
import styled from 'styled-components'
import Footer from './components/footer/footer';
import Header from './components/headers/header';

interface Words {
  id: number;
  text: string;
}

const AppWrapper = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
`

function App() {

  const [randomCloud, setRandomCloud] = useState<Words[]>([{ id: 3, text: "regret" }, { id: 4, text: "if" }, { id: 1, text: "You" }, { id: 7, text: "this" }, { id: 5, text: "you" }, { id: 2, text: "won`t" }, { id: 9, text: "specialist" }, { id: 6, text: "employ" }, { id: 8, text: "young" }, { id: 10, text: "these" }, { id: 11, text: "will" }])

  const [ordinalCloud, setOrdinalCloud] = useState<Words[]>([])

  const [checkCloud, setCheckCloud] = useState<Words[]>([{ id: 1, text: "You" }, { id: 2, text: "won`t" }, { id: 3, text: "regret" }, { id: 4, text: "if" }, { id: 5, text: "you" }, { id: 6, text: "employ" }, { id: 7, text: "this" }, { id: 8, text: "young" }, { id: 9, text: "specialist" }])

  const [stateText, setStateText] = useState<string>("Вы не пожалеете, если возьмете на работу этого молодого специалиста.")

  const [modalActive, setModalActive] = useState(false)

  const[toastActive, setToastActive] = useState(false)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return
    let add;
    let random = randomCloud;
    let ordinal = ordinalCloud;
    if (source.droppableId === `cloud-random`) {
      add = random[source.index]
      random.splice(source.index, 1)
    } else {
      add = ordinal[source.index]
      ordinal.splice(source.index, 1)
    }
    if (destination.droppableId === `cloud-random`) {
      random.splice(destination.index, 0, add)
    } else {
      ordinal.splice(destination.index, 0, add)
    }
    setRandomCloud(random)
    setOrdinalCloud(ordinal)
  } // Функция для переноса с одного облака в другое 

  function shuffle(array: Words[]) {
    array.sort(() => Math.random() - 0.5);
  } // Функция для рандомной сартировки 


  const setCloud = (num: number): any => {
    if (ordinalCloud.length > 0) {
      for (var i = 0, il = ordinalCloud.length; i < il; i++) {
        randomCloud.push(ordinalCloud[i])
        shuffle(randomCloud)
      }
    }
    let stateRandom: Words[] = stateswords[num].random
    let stateOrdinal: Words[] = stateswords[num].ordinal
    let stateText: string = stateswords[num].text
    let stateClear: Words[] = ([])
    setRandomCloud(stateRandom)
    setOrdinalCloud(stateClear)
    setCheckCloud(stateOrdinal)
    setStateText(stateText)
  } // Функция для переключения стейта
  const bodyscroll = () => {
    (modalActive === true) ? document.body.style.overflow = "visible" : document.body.style.overflow = "hidden"
}
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <AppWrapper>
        <Header setModalActive={setModalActive} bodyscroll={bodyscroll} />
        <Main randomCloud={randomCloud} ordinalCloud={ordinalCloud} checkCloud={checkCloud} stateswords={stateswords} setCloud={setCloud} stateText={stateText} modalActive={modalActive} setModalActive={setModalActive}  bodyscroll={bodyscroll} toastActive={toastActive} setToastActive={setToastActive} />
        <Footer />
      </AppWrapper>

    </DragDropContext>
  );
}

export default App;
