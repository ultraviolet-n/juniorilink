import { useState } from "react";
import styled from "styled-components";

interface Props {
    toastActive?: boolean;
    setToastActive?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToastWrapper = styled.div<{ active: boolean }>`
position: fixed;
right: 0;
bottom: 0;
z-index: 4;
opacity: ${(props: { active: boolean; }) => (props.active ? '1' : '0')};
visibility: ${(props: { active: boolean; }) => (props.active ? 'visible' : 'hidden')}; 
transition: all 0.5s;
`
const ToastCard = styled.div`
height: 132px;
border-radius: 32px;
margin: 15px;
background:#f64b3c url(image/main/toast/redbubbles.svg) 0 100% no-repeat;
padding:0px;
display:flex;
align-items:flex-start;
padding:16px 34px 16px 120px;
@media (max-width: 750px) {

                        }
@media (max-width: 530px) {
    padding:10px 20px 10px 70px;
    height: 110px;
                        }
`
const ToastImage = styled.img`
position: absolute;
top: -25px;
left: 25px;
@media (max-width: 530px) {
   height:70px;
}
`
const ToastContent = styled.div`
display: flex;
flex-direction: column;
max-width: 250px;
height: 103px;

`
const ToastHeader = styled.div`
display:flex;
flex-direction: row;
align-items:center;
font-family: 'Source Sans Pro';
color: #ffffff;
`
const ToastHaderText = styled.div`
font-weight: 500;
font-size: 32px;
line-height: 38px;
letter-spacing: -0.035em;
margin-bottom:15px;
@media (max-width: 750px) {

}
@media (max-width: 530px) {
    font-size: 22px;
    line-height: 25px;
}
`
const ToastClose = styled.div`
width: 1em;
height: 1em;
color: #333333;
background-color: #FFFF;
clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
&:hover {
    background:  #F5F5F5;
    transition: all 0.5s;
    cursor: pointer;
}
@media (max-width: 530px) {
    padding:3px;
}`
const ToastBody = styled.div`
font-family: 'Montserrat';
font-weight: 400;
font-size: 20px;
line-height: 22px;
color: #ffffff;
@media (max-width: 750px) {

}
@media (max-width: 530px) {
    font-size: 14px;
}
`
const Toast: React.FC<Props> = ({ toastActive, setToastActive }) => {
    return (
        <ToastWrapper active={toastActive ? true : false}>
            <ToastCard>
                <ToastImage src="image/main/toast/fail.svg" />
                <ToastContent>
                    <ToastHeader><ToastHaderText>Что то не так...</ToastHaderText></ToastHeader>
                    <ToastBody>Попробуйте еще раз! У Вас обязательно получится!</ToastBody>
                </ToastContent>
                <ToastClose onClick={() => (setToastActive!(false))} />
            </ToastCard>
        </ToastWrapper>
    )
}
export default Toast;