const QuizData = [
  {
    question: "What does HTML stand for?",
    Options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperline and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    Options: ["Margin", "Padding", "Spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript functions used to select an HTML element by using id?",
    Options: [
      "document.quary",
      "getElementById",
      "SelectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React js,which hook is used to perform side effects in a function component?",
    Options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create ordered list?",
    Options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];
const answerElm=document.querySelectorAll(".answer");
const[questionElm, option_1, option_2, option_3, option_4]=
document.querySelector(
  "#question, .option_1, .option_2, option_3, .option_4"
);
const submitBtn=document.getElementsById("#Submit");
let currentQuiz=0;
let score=0;
const loadQuiz=()=>{
  const{question, options}=QuizData[currentQuiz];
  console.log(question);

  questionElm.innerText=question;
  options.forEach((curOption, index)=> (window[`option_${index + 1}`].innerText=curOption)
  );
};
loadQuiz();
const getSelectedOption = () => {
  // answerElm.forEach((curOption, index)=> {
  //   if(curOption.checked){
  //     ans_index=index;
  //   }
  // });
  let answerElement=Array.from(answerElm);
  return answerElm.findIndex((curElem, index)=>curElem.checked);
};
const deselectedAnswer =() => {
  return answerElm.forEach((curElem) =>curElem.checked == false);
};
submitBtn.addEventListener("click", ()=> {
  const selectOptionIndex =getSelecterOption();
  console.log(selectOptionIndex);
  if(selectOptionIndex ===QuizData[currentQuiz].correct){
    score=score+1;
  }
  currentQuiz=currentQuiz+1;
  if(currentQuiz<QuizData.length){
    deselectedAnswer();
    loadQuiz();
  }else{
    QuizData.InnerHTML=
    <></>
  }
});
