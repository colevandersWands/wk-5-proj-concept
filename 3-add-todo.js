

console.log('\n## 3: add todo');

  console.log.raw('add_todo( state, new_body )');
  console.log('\t(documentation goes here)')
    const add_todo_cases = [
      {name: 'a case', 
          args: [{next_id: 3, todos: [{id: 2, body: 'dig'}]}, 'road'], 
          expected: { next_id: 4, todos: [{id: 2, body: 'dig'}, {id: 3, body: 'road'}] } },
    ];
    function add_todo(state, new_body) {
 
      const new_state = {
          next_id: state.next_id + 1,
          todos: state.todos.slice()
        };
      
      const new_todo = {
          id: state.next_id,
          body: new_body
        };

      new_state.todos.push(new_todo);

      return new_state;

    };
    run_tests(add_todo, add_todo_cases);

  console.log.raw('add_todo_handler( )');
  console.log('\t(documentation goes here)')
    function add_todo_handler() {

      // gather user input
      const body = document.getElementById('body').value;

      // execute logic
      state = add_todo(state, body);
      const all_todos = read_all(state);
      const todos_str = JSON.stringify(all_todos);

      // display to user
      const output_div = document.getElementById('output-div');
      output_div.innerHTML = todos_str;      

      // log interaction
      const new_entry = {};
      new_entry.action = 'add todo';
      new_entry.args = [body];
      new_entry.result = all_todos;
      add_log_entry(new_entry);

    }

    
  const add_todo_button = document.getElementById('add-todo');
  add_todo_button.addEventListener('click', add_todo_handler);