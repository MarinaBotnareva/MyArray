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

  push: function (...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
    return this.length;
  },

  slice: function (begin = 0, end = this.length) {
    if (begin < 0) {
      const newBegin = this.length + begin; 
      begin = newBegin < 0 ? 0 : newBegin; 
    }
    if (end < 0) {
     const newEnd = this.length + end;
     end = newEnd < 0 ? 0 : newEnd;
    }
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

  concat: function (...args) {
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

  unshift: function (...args) {
      this.reverse();
      args.reverse();
      this.push(...args);
      this.reverse();
      return this.length;
    },

    shift: function () {
      const deletedItem = this[0];
      this.reverse();
      this.length --;
      this.reverse();
      return deletedItem;
    },

  forEach: function (func) {
    for (let i = 0; i < this.length; i++) {
      const element = this.array[i];
      callback(element, index, this);
    }
  },

  map: function (func) {
    const result = new MyArray();
    this.forEach((item) => {
      result.push(func(item));
    });
    return result;
  },


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

