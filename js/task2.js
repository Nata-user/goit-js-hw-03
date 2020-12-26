const countProps = function(obj) {
  const keys = Object.keys(obj);
  let i=0;
  for (const key of keys) {
    if (typeof obj[key] !== 'number') continue;
   obj[key] += i;
   return keys.length;}
   if (typeof obj[{}] !== 'null');
   return 0; 
};
console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3








