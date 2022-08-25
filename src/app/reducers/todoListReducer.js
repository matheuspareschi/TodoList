import { Types } from '../actions/todoListActions'
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    todoList: []
}

export default function todoList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_LIST:
            const list = {
                id: nanoid(),
                listName: action.newListName,
                tasks: [] 
            };
            return {
                ...state,
                    todoList: [ ...state.todoList, list]
            };
        
        case Types.ADD_TASK:
            const positionAdd = findPosition(state.todoList, action.listId);
            const task = {
                id: nanoid(),
                taskName: action.newTaskName,
                completed: false,
            };

            return {
                ...state,
                todoList: [...state.todoList, state.todoList[positionAdd].tasks.push(task)],
                todoList: state.todoList.filter((p) => p !==1)       
        }
        
        case Types.DELETE_TASK:
            const positionDelete = findPosition(state.todoList, action.listId);
            const updateTasksDelete = state.todoList[positionDelete].tasks.filter((task) => action.taskId !== task.id);

        return {
            ...state,
            todoList: [...state.todoList, (state.todoList[positionDelete].tasks = updateTasksDelete)],
            todoList: state.todoList.filter((p) => p.length !== 1)       
        }
        
        case Types.DELETE_LIST:
            const updateListDelete = state.todoList.filter((list) => list.id !== action.listId)
            return {
                ...state,
                todoList: updateListDelete
            }
        case Types.COMPLETE_TASK:
            const positionComplete = findPosition(state.todoList, action.listId);
            const updateTasksComplete = completeTask(state.todoList[positionComplete].tasks, action.taskId);
            return {
                ...state,
                todoList: [...state.todoList, (state.todoList[positionComplete].tasks) = updateTasksComplete],
                todoList: state.todoList.filter((p) => p.length !== 1)       
            }
        
        default:
               return state;
        }
        
}

//HELP FUNCTIONS

const findPosition = (todoList, idList) => {
    const listPosition = todoList.map(
     (list, index) => list.id === idList && index
    );
    return listPosition.filter((p) => p !== false);
};

const completeTask = (taskList, taskId) => {
    return taskList.map((task) => {
        if (task.id === taskId && task.completed === true) {
            return { ...task, completed: false}
        } else if (task.id === taskId && task.completed === false) {
            return { ...task, completed: true}
        } else {
            return task
        }
    })
}