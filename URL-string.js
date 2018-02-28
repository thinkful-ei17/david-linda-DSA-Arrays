function replaceSpace(string) {
  return string.replace(/\s/g, '%20'); // '\s' = backlash + s = space ; 'g' = global search; forward slashes trigger recognition of Regular Expression
}

console.log(replaceSpace('tauhida parveen'));
console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));

//expected outcome: tauhida%20parveen
//expected outcome: www.thinkful.com%20/tauh%20ida%20parv%20een