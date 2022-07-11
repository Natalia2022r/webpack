`use strict`
const btn = document.querySelector("#btn");
const result = document.querySelector(".info");


function * createIdGenerator(){
    let id = 1;
    while(true){
        yield id++
    }
}
const idGenerator = createIdGenerator()
btn.addEventListener("click", () => {
	result.textContent = idGenerator.next().value;
});