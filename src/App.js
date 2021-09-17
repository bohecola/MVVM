import { useDOM, useReactive } from '../MVVM';

function App () {

  const state = useReactive({
    count: 0,
    name: 'Ra'
  })

  const add = (num) => {
    state.count += num;
  }

  const minus = (num) => {
    state.count -= num;
  }

  const changeName = (name) => {
    state.name = name;
  }

  // console.log(state.count);
  // state.count += 1;

  return {
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <button onClick="add(2)">+</button>
      <button onClick="minus(2)">-</button>
      <button onClick="changeName('Ra')">Change Name</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  }
}

useDOM (
  App(),  // template, state, methods
  document.querySelector('#app')
)