// document object model in javascript

// what is document object model(dom)
// the document object model(dom) is application programing interface (apl) for manipulating html documents.

// the do represent an html document as a tree of nodes. the dom provides functions that allow you to add,  remove, and modify parts of the document  effectively.

// note that dom is cross-plateform and languagre-indepentent  way of manipilating html and xml document.

// a documrnt as a hirearchy of nodes.

// the dom represent an html documnets as a hierarchy of nodes. consider the following html documnet:

{/* <Html>
    <head>
        <title> javascript dom</title>
    </head>
    <body>
        <p> hello dom!</p>
    </body>
</Html> */}

// in this dom TreeWalker, the documnet is the root node. the root node has one child node which is the <html> element. the<html> element is called the documnet element.

// each documnet can have only one documnet elemnet. in an html documnet the documnet element is the <html> elemnet. each markup can be represented by a node in hte tree.

//  slecting elemnets

//  getelementbyid()- select an elemnet by id.
// getelementsbytagename()- select element by a tag name.
//  getelementsby classname()-select elemnet by one or more calss name.
// qweryselector()-select element by css selector.

{
    document.getElementById('pera1').innerHTML="hello dom!"
    // document.getElementById('box-1').innerHTML="this is div tag"
    // const model=document.getElementsByClassName('box')
    // console.log(model)

    const element=document.getElementsByTagName('h1')
    function addtext(){
        for(let i=0; i < element.length; i++){
            element[i].innerHTML="hello world!"
            element[i].style.color="Yellow"
            element[i].style.background="green"
            element[i].style.backgroundColor="red"
        }
    }
    addtext()
}

{
   const NewElement = document.createElement("marquee")
   NewElement.textContent = "This is Marquee Tag"
   document.body.appendChild(NewElement)
}

// query selector
{
    document.querySelector('.box').style.color="red"
    document.querySelector('.box').style.color="blue"
    
}

//queryselectorall

{
    const elemnets = document.querySelectorAll("#sun p")
    console.log(elemnets);

    function changeColorss(){
        for(let i =0;  i < elemnets.length; i++){
            elemnets[i].style.color = "red"
        }
    }
}



{
   const NewElement = document.createElement("div")
   NewElement.textContent = "Hello World"
   NewElement.classList = "Hello JavaScript!"
   document.body.appendChild(NewElement)
}


{
    const NewElement = document.createElement("div")
    NewElement.textContent = "Hello World"
    NewElement.classList = "Hello JavaScript!"
    NewElement.classList.add("Anni")
    document.body.appendChild(NewElement)
}

{
    const NewElement = document.createElement("marquee")
    NewElement.textContent = "Hello Guys, What Are You Doing ?"
    document.body.appendChild(NewElement)
} 