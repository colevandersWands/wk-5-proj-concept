console.log('\n## 2: read one');


console.log.raw('read_one( state, id )');
console.log('\t(documentation goes here)')
  const read_one_cases = [
      {name: 'clean case', 
          args: [{todos: [{id: 3, body: 'pig' }]}, 3], 
          expected: {3: 'pig'} },
      {name: 'error case', 
          args: [{todos: [{id: 3, body: 'pig' }]}, 4], 
          expected: {err: 'no such id'} },
    ];
  function read_one(state, id) {                
                                                      
    let result;                                       
                                                      
    const found = state.todos.find(todo => todo.id === id);
    if (found === undefined) {
      result = {err: 'no such id'};                   
    } else {
      result = { [found.id]: found.body };
    };                                                

    return result;

  };
  run_tests(read_one, read_one_cases);



console.log.raw('read_one_handler( )'); 
console.log('\t(documentation goes here)')
  function read_one_handler() {

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
    const one_todo = read_one(state, id);
    const todo_str = JSON.stringify(one_todo);

    // display to user
    const output_div = document.getElementById('output-div');
    output_div.innerHTML = todo_str;

    // log interaction
    const new_entry = {};
    new_entry.action = 'read one';
    new_entry.args = [id];
    new_entry.result = one_todo;
    add_log_entry(new_entry);

  }
