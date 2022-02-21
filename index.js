'use strict';
// prototype obj 
const arrayPrototype = {
  //Class.prototype.includes
  includes: function () {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === arg) {
        return true;
      }
    }
    return false;
  },
  indexOf: function () {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === arg) {
        return i;
      }
    }
    return -1;
  },

  push: function () {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
    return this.length;
  },

  slice: function (begin, end = this.length) {
    const result = new MyArray();
    for(i = begin; i < end; i++) {
      result.push(this[i]);
    }
    return result;
  },

  pop: function () {
    if (this.length === 0) {
      return;
    }
    let deleteArg = this[this.length - 1];
    this.length --;
    return deleteArg;
  },

  concat: function () {
    const result = new MyArray();
    result.push(this);
    for (let i = 0; i < args.length; i++) {
      result.push(args[i]);
    }
    return result;
  },
  
  reverse: function () {
    for(var i=0,j=this.length-1; i<j; i++,j--){
      let temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    }
    return this;
  },

  forEach: function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  },

  // shift: function () {
  //   var arrLength = this.length;
  //   var deleteObj = this[0];
  //   for (var i = 0; i < arrLength; i++) {
  //     this[i] = this[i + 1];
  //   }
  //   this.length -= 1;
  //   return deleteObj;
  // },

  // unshift: function () {
  //   var argulength = arguments.length;
  //   for (let i = this.length; i> = 0; i--) {
  //     this[i + argulength - 1] = this[i - 1]
  //   }
  //   for (let i = 0; i < argulength; i++) {
  //     this[i] = arguments[i]
  //   }
  //   return this.length;
  // },

  }


// constructor func 
function MyArray () {
  this.array = {};
  this.length = 0;
}

// bind prototype obj (Class.prototype.)
MyArray.prototype = Object.assign(
  MyArray.prototype, 
  arrayPrototype
  );

  // static method (Class.method)
MyArray.isMyArray = (arg) => {
  if (arg instanceof MyArray) {
    return true;
  }
  return false;
}

//create instance (new)
const myarray = new MyArray()
