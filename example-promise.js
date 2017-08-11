function addPromise(a,b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if(typeof a == 'number' && typeof b == 'number') {
          resolve(a+b);
      } else {
          reject('Not a number');
      }
    }, 1000);
  });
}

addPromise(3,4).then(function(temp) {
  console.log('Addition is ' + temp);
},function(err) {
  console.log('Not a number');
});

addPromise(3,'hey').then(function(temp) {
  console.log('Addition is', temp);
},function(err) {
  console.log('Not a number');
});
