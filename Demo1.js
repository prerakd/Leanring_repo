var o1={};

//Simple assingment
Object.defineProperty(o1,'x',{
  value:5,
  writable:false,
  enumerable:true,
  configurable:true,
});

o1.x=9;
console.log("Assignment with data descriptor:");
console.log(o1.x);



//accessor discriptor
var o2={};

var val=10;
Object.defineProperty(o2,'x',{
  get:function(){return val},
  set:function(newVal){val=newVal},
  enumerable:true,
  configurable:true
});

console.log("Assignment with accessor discriptor:");
console.log("Deafult value");
console.log(o2.x);
o2.x=5;
console.log("After assignemnt");
console.log(o2.x);


//writable true
var o3={};
Object.defineProperty(o3,'x',{
  writable:true,
  value: 15,
});
console.log("Value of x before updating");
console.log(o3.x);
o3.x=20
console.log("Value of x after updating(writable true)");
console.log(o3.x);


//writable false
Object.defineProperty(o3,'x',{
  writable:false,
});
o3.x=40

console.log("Value of x after updating(writable false)");
console.log(o3.x);


//enumerable false
var o4={};

o4.a=5;
o4.b=10;
o4.c=15;
Object.defineProperty(o4,'c',{
  enumerable:false,
})
Object.defineProperty(o4,'d',{
  value:10,
})
console.log(Object.keys(o4));


//configurable example

var o5={};
o5.a=2;
Object.defineProperty(o5,'b',{
  value:5,
  configurable:true,
})

Object.defineProperty(o5,'a',{
  value:6,
  writable:true,
  enumerable:true,
  configurable:true,
});

Object.defineProperty(o5,'b',{
  get:function(){
    return 8;
  }
});

console.log(o5.a);
o5.a=20;
o5.b=12;

console.log(o5.b);



///Custom descriptor
var tp;
var arch=[];
function descriptor()
{
    return{
      enumerable:true,
      configurable:true,
      set:function(val)
      {
        tp=val;
        arch.push(val);
      },
      get:function()
      {
        return tp;
      }
    }
}
var o6={};
Object.defineProperty(o6,'x',descriptor());
o6.x=100;
o6.x=200;
o6.x=300;
o6.x=400;

console.log(o6.x);
console.log(arch);
