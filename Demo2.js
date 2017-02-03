
//Simple assign
let a = { b: {c: 4} , d: { e: {f: 1} } };
let b={x:1}
let g = Object.assign({}, a);
console.log(g);
console.log(b);
console.log(g.d.e);




//Merging objects
var o={d:6};
var o1={a:2};
var o2={b:3};
var o3={c:4};
var o4={d:5};
Object.assign(o,o1,o2,o3,o4);
console.log(o);


var obj = {
  foo: 1,
  get: function(){
    return 2;
  }
};
Object.assign(o,obj);
console.log(o);


obj={};
let obj1={x:1,y:undefined};
Object.assign(obj,obj1);
console.log(Object.keys(obj));



obj1={};
obj2=[{o1:2},{o2:3},{o3:4}];
Object.assign(obj1,obj2);
console.log(obj1);




obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
