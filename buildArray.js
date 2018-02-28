let memory = require ('./memory');
class Array {
  constructor () {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this._capacity = 0;
  }

  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) { //resize allocated space
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length); //tell it new ptr location to copy to, old location, how many data points to copy
    memory.free(oldPtr); //free up previous space
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3); //initial capacity is 3 = this is 1
  arr.push(5); //takes up another 1
  arr.push(15); // take up last 1
  arr.push(19); //resize; (length + 1 * size ratio) = (3+1) * 3 / takes up 1/9
  arr.push(45); // takes up 2/9
  arr.push(10); // takes up 3/9; once all 9 filled up then resize again (13*3) = 39 (so 27 additional spaces to fill); etc
  arr.pop();
  arr.pop();
  arr.pop();
  // console.log(arr);
  // console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push(155);
  arr.push('david');
  console.log(arr);
  console.log(arr.get(0));
//   console.log(arr.get(4));
}

main();

//initial with 1 value
//length: 1
//capacity: 3
//memory address: 0

//additional 5 values
//length: 6
//capacity: 4 * 3 = 12
//memory address: 3 ; changes only when we resize; points to new position to do addl work bc previous memory has already been allocated

//pop 3 times
//length: 3
//capacity: 4 * 3 = 12
//memory address: 3 

//pop 3 more times to remove all
//pushed 'tauhida'
//length: 1
//capacity: 12
//memory address: 0 ; it was actually still 3 because we did not free up the ptr when we popped

// |3|5|15|19|45|10|
//  0 1 2  3      
//         ptr

// |3|5|15|'tauhida'|'david'|10|
//             3        1    
//            ptr

//ptr changes, start at 0; finish capacity (declared to begin with at constructor) so ptr = 0;
//capacity reached (ex. 3) 0 1 2; now need to find bigger location; take entire array copy to new location which starts at 4 so ptr now is 4; resize then goes to new location and ptr changes again