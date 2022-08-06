import React from "react";
import s from './Dialogs.module.css';

import {DialogsPageType} from "../../Redux/State";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props:DialogsPropsType) => {


    let dialogsElement = props.state.dialogsData.map( d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElement = props.state.messagesData.map( m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    )

}

export default Dialogs;