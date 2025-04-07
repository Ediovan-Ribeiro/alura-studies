import React from "react";
import Botao from "../Botao";

export default class Formulario extends React.Component {
    render() {
        return (
            <form >
                <div>
                    <label htmlFor="tarefa">
                        Adicionar Novo Estudo
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que vai estudar hoje" required />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" name="Tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />

            </form>
        )
    }
}