import React from 'react'
import Card from './Card'
import style from "./ErrorDelate.module.css";


function ErrorDelate(props) {
  return (
    <div className={style.backdrop}>
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ!</h2>
            </header>
            <div className={style.content}>
                <p>Вы точно хотите удалить?</p>
            </div>
            <footer className={style.actions}>
                <button className={style.button} id={props.id} onClick={props.onDelete}>Da</button>
                <button className={style.button} onClick={() => {
                    props.onNet(false)
                }}>Net</button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorDelate