console.log('\n## 4: update one');

  console.log.raw('update( state, id, new_body )');
  console.log('\t(documentation goes here)')
    const update_cases = [
        {name: 'clean case', 
            args: [ { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'roat'}] }, 8, 'taor' ], 
            expected: { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'taor'}] } },
        {name: 'error case', 
            args: [ { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'roat'}] }, 3, 'taor' ], 
            expected: {err: 'no such id'} }
      ];
    function update(state, id, new_body) {

      const found = state.todos.find(todo => todo.id === id);

      let result;
      if (found === undefined) {
        result = {err: 'no such id'};
      } else {
        const update_the_one = function(todo) {
          let result;
          if ((todo.id)===id) { 
            result = {id, body: new_body}; 
          } else {
            result = todo;
          };
          return result;
        }
        state.todos = state.todos.map( update_the_one );
        result = JSON.parse(JSON.stringify(state));
      };

      return result;

    };
    run_tests(update, update_cases);


  console.log.raw('update_handler( )'); 
  console.log('\t(documentation goes here)')
    function update_handler() {

      // gather and check user input
      const pre_id = document.getElementById('id').value;
      const id = Number(pre_id);

      if (pre_id === '') {
        throw new Error('enter an id');
      };
      if (isNaN(id)) {
        throw new Error(pre_id + ' is not a valid id');
      };

      const body = document.getElementById('body').value;

      // execute logic
      const result = update(state, id, body);
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
      new_entry.action = 'update';
      new_entry.args = [id, body];
      new_entry.result = result;
      add_log_entry(new_entry);

    }

    
  const update_button = document.getElementById('update');
  update_button.addEventListener('click', update_handler);
