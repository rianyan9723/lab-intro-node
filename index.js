class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length; 

  }

  add(item) {

    this.items.pop(item); 
    this.items = this.items.sort((function(a,b){
      return a-b;
    }))

  }

  get(pos) {

    if (i < this.items.length){
      return this.items[pos];
    }
    else {
      throw new Error('OutOfBounds');
    }

  }

  max() {

    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    
    else {
      return this.Math.max(items);
    }

  }

  min() {

    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    
    else {
      return this.Math.min(items);
    }


  }

  sum() {

    if (this.length === 0) {
      return 0;
    }

    return this.items.reduce((acc, inc) => {
      acc = acc + inc;

      return acc;
      
    }, 0);
    
  }

  avg() {

    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.length;

  }


module.exports = SortedList;
