console.log('# an app');


console.log.raw(`
STEPS
* user stories table
* log
* user story development
  * log the log
  * read all 
  * read one 
  * create
  * update
  * delete
`)

console.log('\n## a user can ');

  const log_the_log = 'click a button to log the log to the console'
  const read_all_todos = 'see all todos saved in the model';
  const read_one_todo = 'pass in an id to get back only that todo';
  const add_a_todo = 'input a new string to the model';
  const update_todo = 'pass in an id & a string to reset a todo in the model';
  const delete_one = 'pass in an id to remove that todo from the model';

  const use_cases = {
    log_the_log,
    read_all_todos,
    read_one_todo,
    add_a_todo,
    update_todo,
    delete_one
  };

  console.table(use_cases);
  
console.log('\n## application state ');

  const todo_schema = {
    id: 'number',
    body: 'string'
  };

  let state = {
    next_id: 1,
    todos: [{id: 0, body: 'finish this project'}]
  };

  console.log('todo schema: ', todo_schema)
  console.log('state: ', state)
