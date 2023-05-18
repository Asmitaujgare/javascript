var names = ["Maria", "Antony", "Joy", "Juan"]

function insertName(name) {
    names.push(name);
}


console.log(insertName('Asmita'));

function checkName(name, list) {
    return list.includes(name);
  }

 
function compareLists(list1, list2) {
    let matches = [];
    
    
    for (let i=0; i<list1.length; i++) {
      if (list2.includes(list1[i])) {
        matches.push(list1[i]);
      }
    }
    return matches;
  }


function getNameLengths(list) {
    let lengths = [];
    
    for (let i=0; i<list.length; i++) {
      lengths.push(list[i].length);
    }
    return lengths;
  }