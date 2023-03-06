function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    let obj = {
      status: msg
    }
     return obj;
  }