let example = 'Lorem ipsum dolor sit amet, Loem hips mk odor sitda et; Koe yhrpsddk odo fdi ka ets'

function otwellify(comment) {

  let minLineLength = 20;
  let maxLineLength = 60;

  for (let i = 0; i < comment.length; i++) {
    if (comment[i] == ' ') {
      let checker = i + 1;
      while (true) {
        if (comment[i + checker] == ' ' || i + checker == comment.length) {

          if (checker < minLineLength || checker > maxLineLength) {
            break;
          }

          if (i + checker == comment.length) {
            // success
            splitByNChars(comment, i)
            return true;
          } else {
            checker += i + 1;
          }
          
        } else {
          break;
        }
      }
    }
  }
  return false;
}



function splitByNChars(str, n) {
  for (let i = 0; i < str.length; i += n) {
    console.log(str.slice(i, i + n));
    i++;
  } 
}

let result = otwellify(example);
console.log(result);