import {tasksRoute} from   './tasksRoute';
import {createTaskRoute} from './createTaskRoute';
import { completeTaskRoute} from './completeTaskRoute';
import {removeTaskRoute} from './removeTaskRoute';
import { testRoute } from './testRoute';

export const routes = [
    tasksRoute,
    createTaskRoute,
    completeTaskRoute, 
    removeTaskRoute,
    testRoute
];