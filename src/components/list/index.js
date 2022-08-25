import React, { useState } from "react";
import Warning from "../warning";
import Task from "../task";

import { bindActionCreators } from "@reduxjs/toolkit";
import { Creators as todoListActions } from "../../app/actions/todoListActions";
import { connect } from "react-redux";

import "./list.css";
import { PlusCircle, ClipboardText, X } from "phosphor-react";

const List = (props) => {
  const [newTask, setNewTask] = useState("");
  const [show, setShow] = useState("hide");

  const addTaskValidation = () => {
    if (newTask !== "") {
      props.addTask(props.idList, newTask)
      setNewTask("");
      setShow("hide")
    } else {
      setShow("show")
    }
  };

  return (
    <div className="listCard__container">

      <Warning text="Insira um titulo para a tarefa" show={show} setShow={setShow} />

      <div className="listCard__container__top"> 
        <p className="listCard__name"> {props.listName} </p>
        <button
          className="listCard__deleteButton"
          onClick={() => props.deleteList(props.idList)}
        >
          <X size={20} color="#9a031c" weight="duotone" />
        </button>
      </div>
      
      <div className="addTask__container">
        <input
          className="addTask__input"
          onKeyDown={(e) => e.code === "Enter" && addTaskValidation()}
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button className="addTask__button" onClick={() => addTaskValidation()}>
          <PlusCircle size={20} /> ADD
        </button>
      </div>

      {props.tasks.length >= 1 ? (
        props.tasks.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.taskName}
              completed={task.completed}
              deleteTask={props.deleteTask}
              completeTask={props.completeTask}
              taskId={task.id}
              listId={props.idList}
            />
          );
        })
      ) : (
        <div className="empityTask__container">
          <p className="empityTask__text"> Adicione uma tarefa </p>
          <ClipboardText size={32} color="#2b2d42" weight="duotone" />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(todoListActions, dispatch);

export default connect(null, mapDispatchToProps)(List);
