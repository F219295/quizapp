const questions = [
    {
      question: "What does HTML stand for?",
      answer: [
        { text: "Hypertext Markup Language", correct: "true" },
        { text: "Hyperlink and Text Markup Language", correct: "false" },
        { text: "Hyper Technology Markup Language", correct: "false" },
        { text: "Hypertext Technology Markup Language", correct: "false" },
      ],
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      answer: [
        { text: "<a>", correct: "true" },
        { text: "<link>", correct: "false" },
        { text: "<href>", correct: "false" },
        { text: "<url>", correct: "false" },
      ],
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answer: [
        { text: "<lb>", correct: "false" },
        { text: "<break>", correct: "false" },
        { text: "<br>", correct: "true" },
        { text: "<newline>", correct: "false" },
      ],
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      answer: [
        { text: "font-color", correct: "false" },
        { text: "text-color", correct: "false" },
        { text: "color", correct: "true" },
        { text: "text-style", correct: "false" },
      ],
    },
    {
      question: "How do you select an element with ID 'myElement' in CSS?",
      answer: [
        { text: "element#myElement", correct: "false" },
        { text: "#myElement", correct: "true" },
        { text: ".myElement", correct: "false" },
        { text: "myElement", correct: "false" },
      ],
    },
    {
      question: "Which CSS property is used to create rounded corners for an element?",
      answer: [
        { text: "border-radius", correct: "true" },
        { text: "rounded-corners", correct: "false" },
        { text: "border-style", correct: "false" },
        { text: "corner-radius", correct: "false" },
      ],
    },
    {
      question: "Which HTML tag is used to display an image?",
      answer: [
        { text: "<img>", correct: "true" },
        { text: "<image>", correct: "false" },
        { text: "<picture>", correct: "false" },
        { text: "<src>", correct: "false" },
      ],
    },
    {
      question: "In CSS, how do you select all paragraphs within a div element?",
      answer: [
        { text: "div p", correct: "true" },
        { text: "div + p", correct: "false" },
        { text: "p.div", correct: "false" },
        { text: "div > p", correct: "false" },
      ],
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answer: [
        { text: "styles", correct: "false" },
        { text: "inline-style", correct: "false" },
        { text: "css", correct: "false" },
        { text: "style", correct: "true" },
      ],
    },
    {
      question: "What is the correct CSS syntax to change the font size to 16px?",
      answer: [
        { text: "font-size: 16;", correct: "false" },
        { text: "size: 16px;", correct: "false" },
        { text: "font-size: 16px;", correct: "true" },
        { text: "fontsize: 16px;", correct: "false" },
      ],
    },
  
        {
          question: "Which HTML element is used to define a list item?",
          answer: [
            { text: "<ul>", correct: "false" },
            { text: "<li>", correct: "true" },
            { text: "<ol>", correct: "false" },
            { text: "<dl>", correct: "false" },
          ],
        },
        {
          question: "In CSS, which property is used to control the spacing between elements?",
          answer: [
            { text: "space", correct: "false" },
            { text: "margin", correct: "true" },
            { text: "padding", correct: "false" },
            { text: "spacing", correct: "false" },
          ],
        },
        {
          question: "What is the purpose of the 'alt' attribute in the 'img' tag?",
          answer: [
            { text: "To set the alignment of the image", correct: "false" },
            { text: "To provide a title for the image", correct: "false" },
            { text: "To specify the image source", correct: "false" },
            { text: "To provide alternative text for the image", correct: "true" },
          ],
        },
        {
          question: "Which CSS property is used to create a border around an element?",
          answer: [
            { text: "border-style", correct: "false" },
            { text: "border", correct: "true" },
            { text: "border-color", correct: "false" },
            { text: "border-width", correct: "false" },
          ],
        },
        {
          question: "Which HTML element is used to define the header of a section or article?",
          answer: [
            { text: "<head>", correct: "false" },
            { text: "<header>", correct: "true" },
            { text: "<h1>", correct: "false" },
            { text: "<h2>", correct: "false" },
          ],
        },
        {
          question: "What is the correct way to link an external CSS file to an HTML document?",
          answer: [
            { text: '<link rel="stylesheet" href="styles.css">', correct: "true" },
            { text: '<style src="styles.css">', correct: "false" },
            { text: '<link href="styles.css">', correct: "false" },
            { text: '<stylesheet src="styles.css">', correct: "false" },
          ],
        },
        {
          question: "In CSS, how do you select all elements with the class 'highlight'?",
          answer: [
            { text: ".highlight", correct: "true" },
            { text: "#highlight", correct: "false" },
            { text: "highlight", correct: "false" },
            { text: "*highlight", correct: "false" },
          ],
        },
        {
          question: "Which HTML element is used to display a video?",
          answer: [
            { text: "<movie>", correct: "false" },
            { text: "<video>", correct: "true" },
            { text: "<media>", correct: "false" },
            { text: "<mp4>", correct: "false" },
          ],
        },
        {
          question: "What is the purpose of the 'alt' attribute in the 'area' tag?",
          answer: [
            { text: "To specify the coordinates of the clickable area", correct: "false" },
            { text: "To provide alternative text for the image map area", correct: "true" },
            { text: "To set the shape of the clickable area", correct: "false" },
            { text: "To link the image map area to another page", correct: "false" },
          ],
        },
        {
          question: "In CSS, what is the default value of the 'position' property?",
          answer: [
            { text: "absolute", correct: "false" },
            { text: "static", correct: "true" },
            { text: "relative", correct: "false" },
            { text: "fixed", correct: "false" },
          ],
        },
        
            {
              question: "Which HTML element is used to create a checkbox?",
              answer: [
                { text: "<input type='checkbox'>", correct: "true" },
                { text: "<checkbox>", correct: "false" },
                { text: "<check>", correct: "false" },
                { text: "<input type='check'>", correct: "false" },
              ],
            },
            {
              question: "In CSS, which property is used to control the size of a font?",
              answer: [
                { text: "font-weight", correct: "false" },
                { text: "font-family", correct: "false" },
                { text: "text-size", correct: "false" },
                { text: "font-size", correct: "true" },
              ],
            },
            {
              question: "Which HTML element is used to define the footer of a section or article?",
              answer: [
                { text: "<foot>", correct: "false" },
                { text: "<footer>", correct: "true" },
                { text: "<bottom>", correct: "false" },
                { text: "<h4>", correct: "false" },
              ],
            },
            {
              question: "What is the purpose of the 'target' attribute in the 'a' tag?",
              answer: [
                { text: "To specify the URL of the link", correct: "false" },
                { text: "To create a link to an external website", correct: "false" },
                { text: "To open the linked page in a new window or tab", correct: "true" },
                { text: "To set the text of the link", correct: "false" },
              ],
            },
            {
              question: "In CSS, how do you group multiple selectors together to apply the same styles?",
              answer: [
                { text: "Separate each selector with a period (.)", correct: "false" },
                { text: "Separate each selector with a comma (,)", correct: "true" },
                { text: "Separate each selector with an ampersand (&)", correct: "false" },
                { text: "Separate each selector with a plus (+)", correct: "false" },
              ],
            },
            {
              question: "Which HTML element is used to display a horizontal rule?",
              answer: [
                { text: "<hr>", correct: "true" },
                { text: "<line>", correct: "false" },
                { text: "<rule>", correct: "false" },
                { text: "<hline>", correct: "false" },
              ],
            },
            {
              question: "What is the correct way to apply an external CSS file to an HTML document?",
              answer: [
                { text: '<style src="styles.css">', correct: "false" },
                { text: '<stylesheet href="styles.css">', correct: "false" },
                { text: '<link rel="stylesheet" type="text/css" href="styles.css">', correct: "true" },
                { text: '<css src="styles.css">', correct: "false" },
              ],
            },
            {
              question: "In CSS, what is the purpose of the 'display' property with a value of 'none'?",
              answer: [
                { text: "It hides the element from the layout and makes it invisible", correct: "true" },
                { text: "It creates a border around the element", correct: "false" },
                { text: "It changes the background color of the element", correct: "false" },
                { text: "It makes the element's text bold", correct: "false" },
              ],
            },
            {
              question: "Which HTML element is used to define the largest heading?",
              answer: [
                { text: "<heading>", correct: "false" },
                { text: "<h6>", correct: "false" },
                { text: "<h1>", correct: "true" },
                { text: "<h3>", correct: "false" },
              ],
            },
            {
              question: "In CSS, what is the default value of the 'text-decoration' property?",
              answer: [
                { text: "underline", correct: "false" },
                { text: "none", correct: "true" },
                { text: "italic", correct: "false" },
                { text: "overline", correct: "false" },
              ],
            },
          ];
          
          

          function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }
          
          // Function to select only 10 random questions from the shuffled array
          function getRandomQuestions(array, numQuestions) {
            shuffleArray(array);
            return array.slice(0, numQuestions);
          }

const qelement=document.getElementById("question");
const ans=document.getElementById("ans_btn");
const next=document.getElementById("next_btn");

let index=0;
let score=0;



function startquiz(){
 index=0;
     score=0; 
next.innerHTML="Next";
addquestion();
    }
    
function addquestion(){
    reset();
    let   current=questions[index];
    let questionno=index+1;

    qelement.innerHTML=questionno+" . "+current.question;

current.answer.forEach(answer=>
    {
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectans);
    });

}
function reset(){
    next.style.display="none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
}
function selectans(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct ==="true"
    if(iscorrect)
    {
        selectbtn.classList.add("correct");
score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
   
Array.from(ans.children).forEach(button=>{
    if(button.dataset.correct ==="true")
    {
        button.classList.add("correct");
    }
    button.disabled = true;

});
    
next.style.display = "block";

}
function show_score(){
    reset();
    qelement.innerHTML = `You Scored ${score} out of ${questions.length}!`;

    next.innerHTML="Replay";
    next.style.display="block"; 
}
function handle_next(){
    index++;
    if(index<questions.length)
    {
        addquestion();
      
    }
    else{
        show_score();
    }
}

next.addEventListener('click',()=>{
    if(index<questions.length)
    {
        handle_next();

    }
    else 
    {
        startquiz();
    }
});


const selectedQuestions = getRandomQuestions(questions, 10);
questions.length = 0; // Clear the original array
questions.push(...selectedQuestions); // Replace with the selected questions


startquiz(); 