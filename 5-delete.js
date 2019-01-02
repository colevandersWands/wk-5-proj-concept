
console.log('\n## 5: delete one');

  console.log.raw('delete_todo( state, id )');
  console.log('\t(documentation goes here)')
    const delete_cases = [
        {name: 'clean case', 
            args: [ { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'roat'}] }, 8 ], 
            expected: { todos: [{id: 4, body: 'cow'}] } },
        {name: 'error case', 
            args: [ { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'roat'}] }, 3], 
            expected: {err: 'no such id'} }
      ];
    function delete_todo(state, id) {

      const found = state.todos.find(todo => todo.id === id);

      let result;
      if (found === undefined) {
        result = {err: 'no such id'};
      } else {
        state.todos = state.todos.filter( todo => todo.id !== id );
        result = JSON.parse(JSON.stringify(state));
      };

      return result;

    };
    run_tests(delete_todo, delete_cases);

  console.log.raw('delete_handler( )');
  console.log('\t(documentation goes here)')
    function delete_handler() {
      // gather and check user input
      const pre_id = document.getElementById('id').value;
      const id = Number(pre_id);

      if (pre_id === '') {
        throw new Error('enter an id');
      };
      if (isNaN(id)) {
        throw new Error(pre_id + ' is not a valid id');
      };

      // execute logic
      const result = delete_todo(state, id);
      let display_str;
      if (result.err) {
        display_str = JSON.stringify(result);
      } else {
        state = result;
        const all_todos = read_all(state);
        display_str = JSON.stringify(all_todos);
      }

      // display to user
      const output_div = document.getElementById('output-div');
      output_div.innerHTML = display_str;

      // log interaction
      const new_entry = {};
      new_entry.action = 'delete';
      new_entry.args = [id];
      new_entry.result = result;
      add_log_entry(new_entry);

    }