//exceptions
// import { ActionIsNotAnObject } from "./exception/action-is-not-an-object.exception.js";
// import { ActionHasNoType } from "./exception/action-has-no-type.exception.js";
// import { ActionHasNoTarget } from "./exception/action-has-no-target.exception.js";
// class ActionHasNoTarget extends Error {
//   constructor() {
//     super(`Action should have a target.`);
//     this.name = "ActionHasNoTarget";
//   }
// }


// function createStore(reducer, initialState) {
//   if (!isFunction(reducer)) {
//     throw new Error(
//       `Reducer should be a function, but got "${kindOf(reducer)}"`
//     );
//   }

//   if (isFunction(initialState)) {
//     throw new Error("InitialState couldn't be a function");
//   }
//   let state = initialState;
//   let followers = [];
//   let isDispatching = false;

//   function dispatch(action) {
//     if (!isObject(action)) {
//       throw new ActionIsNotAnObject(action);
//     }

//     if (!("type" in action)) {
//       throw new ActionHasNoType();
//     }

//     const isInitType = action.type === "@INIT";
//     if (!isInitType && !("target" in action)) {
//       throw new ActionHasNoTarget();
//     }

//     if (isDispatching) {
//       throw new Error("Couldn't handle any other actions while processing");
//     }

//     try {
//       isDispatching = true;
//       state = reducer(state, action);
//     } finally {
//       isDispatching = false;
//       broadcast();
//     }
//   }

//   function broadcast() {
//     for (const follow of followers) {
//       follow();
//     }
//   }

//   function getState() {
//     if (isDispatching) {
//       throw new Error(
//         "Some Reducers may updating and are busy. please wait..."
//       );
//     }

//     return state;
//   }

//   function follow(followFn) {
//     followers.push(followFn);

//     return function unfollow() {
//       const nodeIndex = followers.indexOf(followFn);

//       if (nodeIndex >= 0) {
//         followers.splice(nodeIndex, 1);
//       }
//     };
//   }

//   dispatch({
//     type: "@INIT",
//   });

//   return {
//     dispatch,
//     getState,
//     follow,
//   };
// }

// function shapeAssertionReducers(reducers) {
//   Object.entries(reducers).forEach(([reducerKey, reducer]) => {
//     const action = { type: "@INIT", target: reducerKey };
//     const state = reducer(undefined, action);

//     if (typeof state === "undefined") {
//       throw new Error(
//         `Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(
//           action
//         )}`
//       );
//     }

//     const randomActionType = Math.random().toString(16).slice(2);
//     const secondAction = { type: randomActionType, target: reducerKey };
//     const secondState = reducer(undefined, secondAction);
//     if (typeof secondState === "undefined") {
//       throw new Error(
//         `Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(
//           secondAction
//         )}`
//       );
//     }
//   });
// }

// function combineReducers(reducers) {
//   const finalReducers = {};

//   for (const reducerKey in reducers) {
//     const reducer = reducers[reducerKey];

//     if (isFunction(reducer)) {
//       finalReducers[reducerKey] = reducer;
//     }
//   }

//   let shapeError;
//   try {
//     shapeAssertionReducers(finalReducers);
//   } catch (e) {
//     shapeError = e;
//   }

//   return (state = {}, action) => {
//     if (shapeError) {
//       throw shapeError;
//     }

//     let hasChanged = false;
//     const nextState = state;
//     if (action.type === "@INIT" || action.target === "*") {
//       for (const reducerKey in finalReducers) {
//         const reducer = finalReducers[reducerKey];
//         const reducerState = state[reducerKey] || undefined;
//         delete action.target;
//         const newReducerState = reducer(reducerState, action);

//         if (typeof newReducerState === "undefined") {
//           throw new Error(
//             `Reducer ${reducerKey} returns undefined for action's type ${action.type}.`
//           );
//         }

//         hasChanged = hasChanged || reducerState !== newReducerState;

//         nextState[reducerKey] = newReducerState;
//       }
//     } else {
//       const reducerKey = action.target;
//       if (!(reducerKey in finalReducers)) {
//         throw new Error(`Target ${reducerKey} not found in reducers`);
//       }
//       const reducer = finalReducers[reducerKey];
//       const reducerState = state[reducerKey] || undefined;
//       delete action.target;
//       const newReducerState = reducer(reducerState, action);

//       if (typeof newReducerState === "undefined") {
//         throw new Error(
//           `Reducer ${reducerKey} returns undefined for action's type ${action.type}.`
//         );
//       }

//       hasChanged = reducerState !== newReducerState;

//       if (hasChanged) nextState[reducerKey] = newReducerState;
//     }

//     return hasChanged ? nextState : state;
//   };
// }

// export const store = createStore(
//   combineReducers({
//     task: taskReducer,
//   })
// );

// function kindOf(inp) {
//   return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();
// }

// function isObject(inp) {
//   return kindOf(inp) === "object";
// }

// function isFunction(inp) {
//   return typeof inp === "function";
// }

// const tasksValue = localStorage.getItem("tasks");
// const tasksInitialState = tasksValue ? JSON.parse(tasksValue) : [];
// function taskReducer(state = tasksInitialState, action) {
// switch (action.type) {
//   case "ADD": {
//     return [
//       ...state,
//       {
//         id: action.payload.id,
//         title: action.payload.title,
//         doneStatus: action.payload.doneStatus,
//       },
//     ];
//   }
//   case "DELETE": {
//     const id = action.payload.id;
//     const newList = state.filter((box) => box.id !== id);
//     return newList;
//   }
//   case "TOGGLE_TASK_STATUS": {
//       const {id} = action.payload
//       const todoIndex = state.findIndex((todo) => todo.id === id);
//       if (todoIndex >= 0) {
//           const todo = state[todoIndex];
//           todo.doneStatus = !todo.doneStatus;
//         }
  
//         return [...state];
//   }
//   default:
//     return state;
// }
// }


// window.onload = function () {
//   renderTasks(store.getState().task)
// };

// const taskListELM = document.querySelector(".task-list");

// function createTask({ id, title: titleText , doneStatus}) {
// const liELM = document.createElement("li");
// liELM.classList.add("list__node");
// liELM.setAttribute("id", id);

// const doneButtonELM = document.createElement("button");
// doneButtonELM.classList.add("done-btn");
// const doneButtonIcon = document.createElement("i")
// doneButtonIcon.classList = "fa-regular fa-check" 
// doneButtonELM.append(doneButtonIcon) 
// doneButtonELM.addEventListener("click", (event) => {
//   const elementId = event.target.parentElement.parentElement.id
//   store.dispatch({
//       type: "TOGGLE_TASK_STATUS",
//       target: "task",
//       payload: {
//           id: elementId
//       }
//   })
//   console.log(doneStatus)
//   if(doneStatus) {
//       console.log(event.target.parentElement.parentElement)
//       event.target.parentElement.parentElement.classList.add("done")
//   }
  
// });

// liELM.append(doneButtonELM)

// const titleDivELM = document.createElement("span");
// titleDivELM.classList.add("title-div");
// const titleTextNode = document.createTextNode(titleText)
// titleDivELM.append(titleTextNode)
// liELM.append(titleDivELM)

// const deleteNodeELM = document.createElement("button");
// deleteNodeELM.classList.add("delete-node-btn");
// const deleteNodeIcon = document.createElement("i")
// deleteNodeIcon.classList = "fa-solid fa-trash"
// deleteNodeELM.append(deleteNodeIcon) 
// deleteNodeELM.addEventListener("click", (event) => {
//   const elementId = event.target.parentElement.parentElement.id
//   store.dispatch({
//       type: "DELETE",
//       target: "task" ,
//       payload: {
//           id: elementId,
//       },

//   })

// });
// liELM.append(deleteNodeELM)

// taskListELM.append(liELM)

// }

// const inputValue = document.querySelector("#new-task");

// const addTaskELM = document.querySelector(".todo-add");
// addTaskELM.addEventListener("click", () => {
//   if(inputValue.value) {
//       store.dispatch({
//         type: "ADD",
//         target: "task",
//         payload: {
//           id: Math.random().toString(16).slice(2),
//           title: inputValue.value,
//           doneStatus: false
//         },
//       });
//       inputValue.value = ""
//   }
// });

// function renderTasks(list) {
// taskListELM.innerHTML = "";
// for (const task of list) {
//   createTask(task);
// }
// }

// const unSubscribeTask = store.subscribe(() => {
//   renderTasks(store.getState().task);
//   localStorage.setItem("tasks", JSON.stringify(store.getState().task));
// });
