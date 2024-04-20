

let text=document.querySelector("h2")
text.innerText= text.innerText + ", I am Gulshan Singh";

let paragraph = document.querySelectorAll(".para")
paragraph[0].innerHTML="AFTER : The Document Object Model (DOM) is a programming interface for HTML documents."
paragraph[1].innerHTML="It represents the structure of a document as a tree, known as the DOM tree. Each element in this tree is called a node."

console.log(paragraph[1].innerHTML)


    // // getAttribute(attr)
    // let gulshan = document.querySelector(".box")
    // console.log(gulshan.getAttribute("class"))

    // // setAttribute(attr , value)
    // gulshan.setAttribute("class","gulshan")


//node.style   --  Apply CSS by using Javascript
document.querySelector(".box").innerText="Gulshan Singh"

let box = document.querySelector(".box")

box.style.color="white"
box.style.backgroundColor="purple"            // CamelCode Text - backgroundColor
box.style.border="5px solid black"
box.style.fontSize="1rem"