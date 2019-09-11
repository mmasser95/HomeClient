function catchErr(err) {
  if (err.response) {
    window.alert(`Error ${err.response.status}: ${err.response.data.message}`);
  } else if (err.request) {
    window.alert(err.request);
  } else {
    console.log('err :', err);
  }
  return false;
}
module.exports = [catchErr];
