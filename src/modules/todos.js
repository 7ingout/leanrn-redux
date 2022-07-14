// 리덕스 모듈 만들기
// 1. 초기상태선언
// 2. 액션타입선언
// 3. 액션생성함수정의
// 4. 리듀서선언

// 1. 초기상태선언
const initialState = [
    // {
    //     id:1,
    //     text: "예시",
    //     done: false
    // }
]

// 2. 액션타입선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 3. 액션 생성함수
let nextId = 1
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text,
        done: false
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 4. 리듀서 선언
export default function todos(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id ? // id가 일치하면
                { ...todo, done: !todo.done }  // done 값을 반전
                : todo // 아니라면 그대로 둠
            )
        default:
            return state;
    }
}