import wasm from "./lib.rs";

wasm().then(result => {
  const { add } = result.instance.exports;
  alert(add(10, 21));
});