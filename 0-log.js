
console.log('\n## 0: log');

  const log = [copy(state)];

console.log.raw('add_log_entry( new_entry )');
console.log('\t(documentation goes here)')
  function add_log_entry(new_entry) {
    log.push(new_entry);
    log.push(copy(state));
  }

console.log.raw('view_log_handler( )');
console.log('\t(documentation goes here)')
  function view_log_handler() {
    console.log(log);
  }

  function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }