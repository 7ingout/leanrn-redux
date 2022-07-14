import { createStore } from "redux";

// 1. 상태 초기값 설정
// 2. 액션 타입 선언
// 3. 액션생성함수 정의
// 4. reducer 정의
// 5. store 생성

// 1. 리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
}
// 2. 액션타입선언
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 3. 액션 생성함수 정의
function increase() {
    return {
        type: INCREASE
    }
}
// 위 함수를 화살표 함수로 쓴다면
// const increase = () => {
//     return {
//         type: INCREASE
//     }
// }

// 화살표 함수에서 return을 생략한다면
const decrease = () => ({
    type: DECREASE
})
const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
    // text: text 위에처럼 text로만 적어도 됨
})
const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 만들기
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                counter: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                counter: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener);

// 액션 디스패치 해보기
store.dispatch(increase())
// 위에거랑 같은거임
// store.dispatch({
//     type: INCREASE
// })
store.dispatch(decrease())
store.dispatch(addToList({}))
// store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({id: 1, name: "green", age: 20}))
console.log(decrease())