function mergeStrings(first, second){
    for(let i = 0; i < first.length; i++) {
      if (second.startsWith(first.substring(i))) {
          return first.substring(0, i) + second;
      }
    }
    return first + second;
  }