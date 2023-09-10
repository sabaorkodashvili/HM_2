const headingDiv = document.createElement("div");
const mainContainer = document.createElement("div");
const buttonsDiv = document.createElement("div");
///mainconrainer
function containerStyle(parentElementId, marginTop, justCont, pdTop) {
  const div = parentElementId;
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.textAlign = "center";
  div.style.marginTop = marginTop;
  div.style.justifyContent = justCont;
  div.style.paddingTop = pdTop;
}
containerStyle(mainContainer, "160px", "", "");
function createBtn(
  text,
  bgColor,
  color,
  width,
  height,
  parentElementId,
  borderRadius
) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.backgroundColor = bgColor;
  button.style.color = color;
  button.style.marginRight = "10px";
  button.style.borderColor = "#23A6F0";
  button.style.width = width;
  button.style.height = height;
  button.style.padding = "15px";
  button.style.borderRadius = borderRadius;
  button.style.fontSize = "15px";
  const div = parentElementId;
  div.appendChild(button);
}
createBtn(
  "Get Quote Now",
  "#23A6F0",
  "white",
  "193px",
  "52px",
  buttonsDiv,
  "5px"
);
createBtn(
  "Learn More",
  "#252B42",
  "#23A6F0",
  "193px",
  "52px",
  buttonsDiv,
  "5px"
);
function createHeadingDiv(
  name,
  heading,
  text,
  hdColor,
  pColor,
  h1Size,
  pSize,
  parentElementId,
  margintop
) {
  const prnt = parentElementId;
  const h4 = document.createElement("h4");
  h4.textContent = name;
  h4.style.color = "#23A6F0";
  h4.style.fontStyle = "bold";
  prnt.appendChild(h4);
  ////h1
  const h1 = document.createElement("h1");
  h1.textContent = heading;
  h1.style.fontSize = h1Size;
  h1.style.color = hdColor;
  h1.style.width = "542px";
  h1.style.height = "160px";
  prnt.appendChild(h1);
  ///p
  const p = document.createElement("p");
  p.textContent = text;
  p.style.color = pColor;
  p.style.fontSize = pSize;
  p.style.width = "536px";
  p.style.height = "60px";
  p.style.marginTop = margintop;
  prnt.appendChild(p);
}
//
createHeadingDiv(
  "Welcome",
  "Selling on the internet like a pro",
  " We know how large objects will act, but things on a small scale just do not act that way.",
  "white",
  "white",
  "58px",
  "20px",
  headingDiv
);
////boxDiv
const boxDiv = document.createElement("div");
boxDiv.style.display = "flex";
boxDiv.style.gap = "40px";
boxDiv.style.marginTop = "50px";
////// create box function
function createBox(text, bgColor, color, imgUrl, borderClr) {
  const box1 = document.createElement("div");
  const box1Img = document.createElement("img");
  const box1H1 = document.createElement("h1");
  const boxP = document.createElement("p");
  box1.style.width = "328px";
  box1.style.height = "292px";
  box1.style.backgroundColor = bgColor;
  box1.style.marginTop = "60px";
  box1.style.color = color;
  ///box1img
  box1Img.src = imgUrl;
  box1Img.marginTop = "10px";
  box1Img.style.marginLeft = "-160px";
  box1Img.style.marginTop = "35px";
  box1.appendChild(box1Img);
  ///box1H1
  box1H1.textContent = text;
  box1.appendChild(box1H1);
  ///border1
  const border1 = document.createElement("div");
  border1.style.border = "1px solid ";
  border1.style.color = borderClr;
  border1.style.width = "80px";
  border1.style.marginLeft = "50px";
  border1.style.borderWidth = "-10px";
  box1.appendChild(border1);
  ///boxp
  boxP.textContent =
    "The gradual accumulation of information about atomic and small-scale behaviour...";
  boxP.style.width = "222px";
  boxP.style.height = "60px";
  boxP.style.marginLeft = "50px";
  boxP.style.textAlign = "initial";
  box1.appendChild(boxP);
  boxDiv.appendChild(box1);
}
createBox("training Courses", "white", "#252B42", "./img/img1.png", "red");
createBox("2,769 online courses", "white", "#252B42", "./img/img2.png", "red");
createBox("training Courses", "#23A6F0", "white", "./img/img3.png", "white");
///section2
const section2 = document.createElement("div");
const heading2Div = document.createElement("div");
containerStyle(heading2Div, "90px", "center", "140px"); // heading2 div style
createHeadingDiv(
  "Practice Advice",
  "Featured Products",
  "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
  "#252B42",
  "#737373",
  "40px",
  "14px",
  heading2Div,
  "-100px"
);
section2.style.backgroundColor = "white";
section2.style.height = "620px";
section2.appendChild(heading2Div);
///section2Input
const section2Input = document.createElement("div");
section2Input.style.display = "flex";
section2Input.style.marginTop = "50px";
section2Input.style.justifyContent = "center";
//emailInput
const emailInput = document.createElement("input");
emailInput.placeholder = "Your  Email";
emailInput.style.height = "50px";
emailInput.style.fontSize = "16px";
emailInput.style.width = "550px";
emailInput.style.paddingLeft = "20px";
emailInput.style.marginRight = "5px";
section2Input.appendChild(emailInput);
createBtn("Subscribe", "#23A6F0", "white", "90px", "55px", section2Input);
section2.appendChild(section2Input);
///
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = " #252B42";
///
document.body.appendChild(mainContainer);
mainContainer.appendChild(headingDiv);
mainContainer.appendChild(buttonsDiv);
mainContainer.appendChild(boxDiv);
document.body.appendChild(section2);
