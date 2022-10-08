import {tasksRoute} from   './tasksRoute';
import {createTaskRoute} from './createTaskRoute';
import { completeTaskRoute} from './completeTaskRoute';
import {removeTaskRoute} from './removeTaskRoute';


export const routes = [
    tasksRoute,
    createTaskRoute,
    completeTaskRoute, 
    removeTaskRoute,
];