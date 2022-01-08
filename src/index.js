module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.flat(Infinity);  
  let set = new Set();
  for (let i = 0; i < arr.length; i += 2) {
    let a = arr[i] + arr[i + 1];
    set.add(a);
  }

  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < str.length; i++) {
      let isk = str[i] + str[i + 1];
      if (set.has(isk)) {
        str = str.replace(isk, "");
        i++;
        flag = true;
      }
    }
  }
  return !Boolean(str);
};
