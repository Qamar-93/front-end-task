var test = require('tape');
var getActor = require('./index');

test('Example test', function(t) {
  

  var result = getActor("selena gomez");
  var expected = [{
    id: 1,
    description: "make smoothie out of things that should really be cooked",
    state: false,
  }];
  t.deepEqual(result, expected, 'equal');
  t.end();
});



// var test = require('tape');
// var todoFunctions = require('../logic');
//
// // Delete toDo test
// test('deleteTodo test', function(t) {
//   var actual = todoFunctions.deleteTodo(todoList2, 1);
//   var expected =  [
//     {
//       id: 2 ,
//       description : "second one",
//       done : false
//     },
//     {
//       id: 4 ,
//       description : "4th one",
//       done : false
//     },
//     {
//       id: 3 ,
//       description : "3rd one",
//       done : true
//     }
//   ];
//   t.deepEqual(actual, expected, 'deleteTodo function test pass');
//   t.end();
// });
// // Mark toDo test
// test('markTodo function test', function(t) {
//   var actual = todoFunctions.markTodo(todoList2, 1);
//   var expected =  [
//     {
//       id: 1 ,
//       description : "first one",
//       done : false
//     },
//     {
//       id: 2 ,
//       description : "second one",
//       done : false
//     },
//     {
//       id: 4 ,
//       description : "4th one",
//       done : false
//     },
//     {
//       id: 3 ,
//       description : "3rd one",
//       done : true
//     }
//   ];
//   t.deepEqual(actual, expected, 'markTodo function test pass');
//
// });
