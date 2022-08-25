export const Types = { 
    ADD_LIST: 'list/ADD',
    ADD_TASK: 'task/ADD',
    DELETE_TASK: 'task/DELETE_TASK',
    DELETE_LIST: 'list/DELETE_LIST',
    COMPLETE_TASK: 'task/COMPLETE_TASK',
}

export const Creators = {
    addList: (newListName) => ({
        type:  Types.ADD_LIST,
        newListName
    }),
    addTask: (listId, newTaskName) => ({
        type: Types.ADD_TASK,
        listId,
        newTaskName
    }),
    deleteTask: (taskId, listId) => ({
        type: Types.DELETE_TASK,
        taskId,
        listId
    }),
    deleteList: (listId) => ({
        type: Types.DELETE_LIST,
        listId
    }),
    completeTask: (taskId, listId) => ({
        type: Types.COMPLETE_TASK,
        taskId,
        listId, 
    })
}

export default Creators;