import { useState } from "react";
import List from "./components/list";

import { bindActionCreators } from "@reduxjs/toolkit";
import {Creators as todoListActions} from "./app/actions/todoListActions";
import { connect } from "react-redux";

import "./App.css";
import { ListPlus, CheckSquareOffset, ListChecks } from "phosphor-react";
import Warning from "./components/warning";

function App({addList, todoList}) {
  const [newList, setNewList] = useState("");
  const [show, setShow] = useState("hide")

  const handleChangeListInput = (event) => {
    setNewList(event.target.value);
  };

  const addListValidation = () => {
    if (newList !== "") {
      addList(newList);
      setNewList("");
      setShow("hide")
    } else {
      setShow("show")
    }
  };

  return (
    <div>
      <header className="hearder__container">
        <h1 className="header__title">
          <CheckSquareOffset size={32} weight="duotone" /> Lista de afazeres
        </h1>
        <p className="header__text"> Tome notas... depois faça... </p>
      </header>

      <Warning text="Insira um titulo para a lista" show={show} setShow={setShow} />

      <div className="todoList__body">
        <div className="addList__container">
          <p className="addList__text"> Adicione uma lista ... </p>
          <input
            className="addList__input"
            onKeyDown={(e) => e.code === "Enter" && addListValidation()}
            onChange={(e) => handleChangeListInput(e)}
            value={newList}
          />
          <button className="addList__button" onClick={addListValidation}>
            <ListPlus size={20} />  ADD
          </button>
        </div>

        {todoList.length === 0 ? (
          <div className="empityList__container"> 
            <p className="empityList__text"> Adicione uma lista </p>
            <ListChecks size={40} color="#9a031c" weight="thin" />
          </div>
        ) : (
          <div className="list__container">
            {todoList.map((list) => {
              return (
                <div>
                  {todoList.length > 1 ?  <p className="list__title"> LISTAS: </p> :  <p className="list__title"> LISTA: </p>}
                  <List
                    key={list.id}
                    listName={list.listName}
                    idList={list.id}
                    tasks={list.tasks}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => 
bindActionCreators (todoListActions, dispatch);

const mapStateToProps = state => {
  return {
    todoList: state.todoList.todoList
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
