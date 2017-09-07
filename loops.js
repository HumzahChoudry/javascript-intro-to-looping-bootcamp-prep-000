function forLoop(array){
  for(let i=0; i < 25; i++){
    if(i == 1)
      array.push('I am 1 strange loop.')
    else
      array.push('I am ${i} strange loops.')
  }
  return array
}

function whileLoop(num){
var i = num
  while(i >= 0){
    if(i == 0)
      return "done"
      //console.log("done")
    else {
      console.log(i)
    }
    i -= 1
  }
}

function doWhileLoop(arr)
{
  do{
    arr.shift();
  }
  while(arr.length > 0 && maybeTrue)

  return arr
}

function maybeTrue() {
  return Math.random() >= 0.5
}
