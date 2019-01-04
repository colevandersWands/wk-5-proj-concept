
console.log('\n## 1: read all');


  console.log.raw('read_all( state )');
  console.log('\t(documentation goes here)')
    const read_all_cases = [
        {name: 'a case', 
            args: [ { todos: [{id: 4, body: 'cow'}, {id: 8, body: 'roat'}] } ], 
            expected: {4: 'cow', 8: 'roat'} },
      ];
    function read_all(state) {

      const all_todos = {};

      for (let todo of state.todos) {
        all_todos[todo.id] = todo.body;
      };

      return all_todos;

    };
    run_tests(read_all, read_all_cases);

  console.log.raw('read_all_handler( )');
  console.log('\t(documentation goes here)')
    
    function read_all_handler() {                    
      // no user input to gather                       
                                                      
      // execute logic
      const all_todos = read_all(state);              
      const todos_str = JSON.stringify(all_todos)

      // display to user
      const output_div = document.getElementById('output-div');
      output_div.innerHTML = todos_str;

      // log interaction
      const new_entry = {};
      new_entry.action = 'read all';
      new_entry.next_id = state.next_id;
      new_entry.todos = all_todos;
      add_log_entry(new_entry);

    }
    
  const read_all_button = document.getElementById('read-all');
  read_all_button.addEventListener('click', read_all_handler);

