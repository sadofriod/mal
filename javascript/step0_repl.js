const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function READ(params) {
  console.log("read", params);
  return params;
}
function EVAL(params) {
  console.log("EVAL", params);
  return params;
}
function PRINT(params) {
  console.log("PRINT", params);
  return params;
}
function rep(params) {
  return PRINT(EVAL(READ(params)));
}

readline.question(">user:", (input) => {
  rep(input);
  readline.close();
});
