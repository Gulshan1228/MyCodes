let box = document.querySelector(".box")
box.style.height="100px"
box.style.width="100px"
box.style.backgroundColor="skyblue"
box.style.textAlign="center"

let newbtn = document.createElement("button")
newbtn.innerHTML="click here !"

box.append(newbtn);     // inside-end
box.prepend(newbtn);    // inside-start
box.before(newbtn);     // outside-start(before the element)
box.after(newbtn);      // outside-end((After the element)

// newbtn.remove() or box.remove()   // Elements can also be delete



//Question - add a another class in paragraph 
// can not be done with the getattribute() because it delete the old one and add another one 
// but we have a question we have to add another class name to the paragraph without delete the old class name

// Now we will use the classList Method for solving this problem
let para = document.querySelector(".content")

para.classList.add("newClass")   // it adds a new class to the element
para.classList.remove("content")   // we can also remove a class of the element
