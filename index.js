class SortedList {
  constructor(items, length) {
    /*
    The object should have two properties: items and length.

    items should be an array,
    length should be the number of elements in the array.
    */
    this.items = []
    this.length = this.items.length;
  
  }

  add(item) {
    /*
    The add(item) method should add the value item to the items array, while 
    ensuring that the items in the array stay sorted in ascending order.
    */

    let items = this.items;
    items.push(item)
    items.sort((a, b) => a - b);
    this.length = items.length
  }

  load(pos) {
    /*
    The load(position) method will get the value at index position in the list.
    */

    if(pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    /*
    The max() method should return the highest value of the array.
    */

    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1]
    }
  
  }

  min() {
    /*
    The min() method should return the lowest value of the array.
    */
   
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort()[0]
    }
  }
  sum() {
    /*
    The sum() method should return the total sum of every value in the array.
    */

    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    // The avg() method should return the average value of the array.

    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length
    }

  }
}

module.exports = SortedList;
