// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload}
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // 추가하기 버튼을 클릭해도 추가한 아이템이 화면에 표시되지 않음.
      // 추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.
      //추가하기 로직을 만들어준다
      state.todos.map((item, idx) => item.id =idx)
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
      // case DELETE_TODO :
      // let deleteListTodo =state.filter((item)=> 
      // item.id !== action.payload)
      // return(deleteListTodo)
    //삭제 에 대한 액션을 정의
    case DELETE_TODO :
      return {
        ...state,
        todo: state.todos.filter((todo) => {
          return todo.id !== action.payload;
      }),
    }

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
