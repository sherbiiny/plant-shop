// Array.prototype.filter = function (callback) {
//   let res = [];
//   let a = this || [];

//   for (let i = 0; i < a.length; ++i) {
//     if (callback(a[i], i, a)) {
//       res.push(a[i]);
//     }
//   }

//   return res;
// };

// console.log([12, 5, 2].filter(n => n > 2));

// Array.prototype.reduce = function (callback, initial) {
//   let res = initial;

//   for (let i = 0; i < this.length; ++i) {
//     res = callback(res, this[i], i, this);
//   }

//   return res;
// };

// console.log([1, 3, 4, 5].reduce((acc, curr) => acc + curr, 0));

// Array.prototype.map = function (callback) {
//   let res = [];

//   for (let i = 0; i < this.length; ++i) {
//     res.push(callback(this[i], i, this));
//   }

//   return res;
// };

// console.log([1, 3, 4, 5].map(x => x * 23));

// Array.prototype.lower_bound = function (x) {
//   let l = 0,
//     r = this.length - 1,
//     mid,
//     ans = this.length;

//   while (l <= r) {
//     mid = l + (r - l) / 2;
//     mid = Math.floor(mid);
//     if (this[mid] >= x) {
//       ans = mid;
//       r = mid - 1;
//     } else l = mid + 1;
//   }

//   return ans;
// };

// console.log([1, 3, 4, 5].lower_bound(4));

let nums = [4, 2, 6, 1, 5];
nums.sort((a, b) => a - b);

console.log(nums);
