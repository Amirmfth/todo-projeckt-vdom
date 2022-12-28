// Virtual DOM Utilities
import { createElement } from "./dom/createElement";
import { hyperRender } from "./dom/hyper-render";
import { mount } from "./dom/mount";
import { diff } from "./dom/diff";
// Utilities
import { pickRandomIndex } from "./utils/pick-random-index.util";

//redux

import { ActionHasNoType } from "./redux/exception/action-has-no-type.exception.js";
import { ActionHasNoTarget } from "./redux/exception/action-has-no-target.exception.js";
import { ActionIsNotAnObject } from "./redux/exception/action-is-not-an-object.exception";





const AppTree = createElement("div" ,{
  props:{
    class: "container",
  } ,
  children: [
    createElement("div" , {
      props: {
        class: "page-Header"
      },
      children: [
        createElement("h1" , {
          children: [
            createElement("i" , {
              props: {
                class: "fa-solid fa-calendar-check"
              },
            },),
            "What's Next",      
          ]
        }),
        createElement("h4" , {
          children: [ "your amazing daily planer" ,]
        })
      ]
    }) ,
    createElement("div" , {
      props: {
        class: "page-Body",
      },
      children: [
        createElement("div" , {
          props: {
            class: "todo-container",
          },
          children: [
            createElement("div" , {
              props: {
                class: "todo-header"
              } , 
              children: [
                createElement("input" , {
                  props: {
                    id: "new-task" ,
                    type: "text" ,
                    placeholder: "new task"
                  } ,
                }),
                createElement("button" , {
                  props: {
                    class: "todo-add",
                  } ,
                  children: [
                    "ADD"
                  ]
                })
              ]
            }),
            createElement("div" , {
              props: {
                class: "todo-body",
              },
              children: [
                createElement("ul" , {
                  props: {
                    class: "task-list"
                  }
                }),
              ]
            }),
          ]
        }),
      ]
    }),
    createElement("div" , {
      props: {
        class: "page-Footer"
      },
      children: [
        createElement("div" , {
          props:{
            class: "footer-container"
          },
          children: [
            createElement("div" , {
              props: {
                class: "email-info"
              },
              children: [
                createElement("p" , {
                  children: [
                    createElement("i" , {
                      props: {
                        class: "fa-solid fa-at"
                      }
                    }),
                    "Email : amirmf831380@gmail.com"
                  ]
                })
              ]
            }),
            createElement("div" ,{
              props:{
                class: "phone-info"
              } ,
              children: [
                createElement("p", {
                  children: [
                    createElement("i" , {
                      props:{
                        class: "fa-solid fa-phone-volume"
                      }
                    }),
                    "Phone Number : 0939-833-2265"
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})

let AppTreeElm = AppTree;
const $app = hyperRender(AppTreeElm);

const appElm = document.querySelector(".container");
mount($app, appElm)
let $rootEl = mount($app, appElm);

    
    const newAppElm = AppTree;
    const patch = diff(AppTreeElm, newAppElm);
    $rootEl = patch($rootEl);
    AppTreeElm = newAppElm;







function createStore(reducer, initialState) {
  if (!isFunction(reducer)) {
    throw new Error(
      `Reducer should be a function, but got "${kindOf(reducer)}"`
    );
  }

  if (isFunction(initialState)) {
    throw new Error("InitialState couldn't be a function");
  }
  let state = initialState;
  let subscribers = [];
  let isDispatching = false;

  function dispatch(action) {
    if (!isObject(action)) {
      throw new ActionIsNotAnObject(action);
    }

    if (!("type" in action)) {
      throw new ActionHasNoType();
    }

    const isInitType = action.type === "@INIT";
    if (!isInitType && !("target" in action)) {
      throw new ActionHasNoTarget();
    }

    if (isDispatching) {
      throw new Error("Couldn't handle any other actions while processing");
    }

    try {
      isDispatching = true;
      state = reducer(state, action);
    } finally {
      isDispatching = false;
      broadcast();
    }
  }

  function broadcast() {
    for (const follow of subscribers) {
      follow();
    }
  }

  function getState() {
    if (isDispatching) {
      throw new Error(
        "Some Reducers may updating and are busy. please wait..."
      );
    }

    return state;
  }

  function subscribe(watcher) {
    subscribers.push(watcher);

    return function unSubscribe() {
      const nodeIndex = subscribers.indexOf(watcher);

      if (nodeIndex >= 0) {
        subscribers.splice(nodeIndex, 1);
      }
    };
  }

  dispatch({
    type: "@INIT",
  });

  return {
    dispatch,
    getState,
    subscribe,
  };
}

function shapeAssertionReducers(reducers) {
  Object.entries(reducers).forEach(([reducerKey, reducer]) => {
    const action = { type: "@INIT", target: reducerKey };
    const state = reducer(undefined, action);

    if (typeof state === "undefined") {
      throw new Error(
        `Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(
          action
        )}`
      );
    }

    const randomActionType = Math.random().toString(16).slice(2);
    const secondAction = { type: randomActionType, target: reducerKey };
    const secondState = reducer(undefined, secondAction);
    if (typeof secondState === "undefined") {
      throw new Error(
        `Reducer for key ${reducerKey} returns undefined for action ${JSON.stringify(
          secondAction
        )}`
      );
    }
  });
}

function combineReducers(reducers) {
  const finalReducers = {};

  for (const reducerKey in reducers) {
    const reducer = reducers[reducerKey];

    if (isFunction(reducer)) {
      finalReducers[reducerKey] = reducer;
    }
  }

  let shapeError;
  try {
    shapeAssertionReducers(finalReducers);
  } catch (e) {
    shapeError = e;
  }

  return (state = {}, action) => {
    if (shapeError) {
      throw shapeError;
    }

    let hasChanged = false;
    const nextState = state;
    if (action.type === "@INIT" || action.target === "*") {
      for (const reducerKey in finalReducers) {
        const reducer = finalReducers[reducerKey];
        const reducerState = state[reducerKey] || undefined;
        delete action.target;
        const newReducerState = reducer(reducerState, action);

        if (typeof newReducerState === "undefined") {
          throw new Error(
            `Reducer ${reducerKey} returns undefined for action's type ${action.type}.`
          );
        }

        hasChanged = hasChanged || reducerState !== newReducerState;

        nextState[reducerKey] = newReducerState;
      }
    } else {
      const reducerKey = action.target;
      if (!(reducerKey in finalReducers)) {
        throw new Error(`Target ${reducerKey} not found in reducers`);
      }
      const reducer = finalReducers[reducerKey];
      const reducerState = state[reducerKey] || undefined;
      delete action.target;
      const newReducerState = reducer(reducerState, action);

      if (typeof newReducerState === "undefined") {
        throw new Error(
          `Reducer ${reducerKey} returns undefined for action's type ${action.type}.`
        );
      }

      hasChanged = reducerState !== newReducerState;

      if (hasChanged) nextState[reducerKey] = newReducerState;
    }

    return hasChanged ? nextState : state;
  };
}



function kindOf(inp) {
  return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();
}

function isObject(inp) {
  return kindOf(inp) === "object";
}

function isFunction(inp) {
  return typeof inp === "function";
}

const tasksValue = localStorage.getItem("tasks");
const tasksInitialState = tasksValue ? JSON.parse(tasksValue) : [];
function taskReducer(state = tasksInitialState, action) {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          doneStatus: action.payload.doneStatus,
        },
      ];
    }
    case "DELETE": {
      const id = action.payload.id;
      const newList = state.filter((box) => box.id !== id);
      return newList;
    }
  case "TOGGLE_TASK_STATUS": {
      const {id} = action.payload
      const todoIndex = state.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
          const todo = state[todoIndex];
          todo.doneStatus = !todo.doneStatus;
        }
  
        return [...state];
  }
  default:
    return state;
}
}

const store = createStore(
  combineReducers({
    task: taskReducer,
  })
);


window.onload = function () {
  renderTasks(store.getState().task)
};

const taskListELM = document.querySelector(".task-list");

function createTask({ id, title: titleText , doneStatus}) {
const liELM = document.createElement("li");
liELM.classList.add("list__node");
liELM.setAttribute("id", id);

const doneButtonELM = document.createElement("button");
doneButtonELM.classList.add("done-btn");
const doneButtonIcon = document.createElement("i")
doneButtonIcon.classList = "fa-regular fa-check" 
doneButtonELM.append(doneButtonIcon) 
doneButtonELM.addEventListener("click", (event) => {
  const elementId = event.target.parentElement.parentElement.id
  store.dispatch({
      type: "TOGGLE_TASK_STATUS",
      target: "task",
      payload: {
          id: elementId
      }
  })
  // if(doneStatus) {
  //     event.target.parentElement.parentElement.classList.add("done")
  // }
  
});


liELM.append(doneButtonELM)
let titleDivELM;
if(doneStatus) {
  titleDivELM = document.createElement("strike");
  titleDivELM.classList.add("title-div");
  const titleTextNode = document.createTextNode(titleText)
  titleDivELM.append(titleTextNode)
  liELM.append(titleDivELM)
} else {
  titleDivELM = document.createElement("span");
  titleDivELM.classList.add("title-div");
  const titleTextNode = document.createTextNode(titleText)
  titleDivELM.append(titleTextNode)
  liELM.append(titleDivELM)
}


const deleteNodeELM = document.createElement("button");
deleteNodeELM.classList.add("delete-node-btn");
const deleteNodeIcon = document.createElement("i")
deleteNodeIcon.classList = "fa-solid fa-trash"
deleteNodeELM.append(deleteNodeIcon) 
deleteNodeELM.addEventListener("click", (event) => {
  const elementId = event.target.parentElement.parentElement.id
  store.dispatch({
      type: "DELETE",
      target: "task" ,
      payload: {
          id: elementId,
      },

  })

});
liELM.append(deleteNodeELM)

taskListELM.append(liELM)

}

const inputValue = document.querySelector("#new-task");

const addTaskELM = document.querySelector(".todo-add");
addTaskELM.addEventListener("click", () => {
  if(inputValue.value) {
      store.dispatch({
        type: "ADD",
        target: "task",
        payload: {
          id: Math.random().toString(16).slice(2),
          title: inputValue.value,
          doneStatus: false
        },
      });
      inputValue.value = ""
  }
});

function renderTasks(list) {
taskListELM.innerHTML = "";
for (const task of list) {
  createTask(task);
}
}

const unSubscribeTask = store.subscribe(() => {
  renderTasks(store.getState().task);
  localStorage.setItem("tasks", JSON.stringify(store.getState().task));
});
