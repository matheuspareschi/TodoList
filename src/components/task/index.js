import React from "react";
import "./task.css";
import { Trash, Check, Checks } from "phosphor-react";

const Task = (props) => {
  return (
    <div
      className="task__continer"
      style={{ backgroundColor: props.completed && "#cee4cd"}}
      >
      {props.completed ? (
         <Checks
         size={20}
         onClick={() => props.completeTask(props.taskId, props.listId)}
       />
      ) : (
        <Check
        size={20}
        onClick={() => props.completeTask(props.taskId, props.listId)}
      />
       
      )}

      <p className="task__name" style={{ textDecoration: props.completed && "line-through" }}> {props.taskName} </p>
      <Trash
        onClick={() => props.deleteTask(props.taskId, props.listId)}
        size={20}
      />
    </div>
  );
};

export default Task;
