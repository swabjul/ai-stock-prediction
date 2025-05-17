const tickerArr = []

const generateReportBtn = document.querySelector(".generate-report-btn")

generateReportBtn.addEventListener("click", fetchStockData)


const tickerInputForm = document.querySelector("#ticker-input-form")

tickerInputForm.addEventListener("submit", (e)=> {
  e.preventDefault();

  const tickerInput = document.querySelector("#ticker-input")
  const tickerLabel = document.querySelector(".ticker-label")
  const tickerInputVal = tickerInput.value



  let tickerLabelValue;


  if (tickerInputVal.length > 2) {
    console.log("AAAAAAAAAAAAA")
    tickerLabelValue = true;
    tickerArr.push(tickerInputVal)
    console.log(tickerArr)

    renderTickers()
  } else {
    console.log("BBBBBBBBBBBBB")
    tickerLabelValue = false;
  }




    tickerInput.value = ""
    tickerLabel.style.color = tickerLabelValue ? "black" : "red"

    tickerLabel.textContent = tickerLabelValue
      ? "Add up to 3 stock tickers below to get a super accurate stock predictions report👇 "
      : "You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla."



})


function renderTickers() {

  tickerChoiceDisplay.innerHTML = ""

  const tickerChoiceDisplay = document.querySelector(".ticker-choice-display")
  const fragment = document.createDocumentFragment();

  for (const ticker of tickerArr) {
    const span = document.createElement("span")
    span.textContent = ticker
    span.className = "ticker"
    fragment.appendChild(span)
  }

  tickerChoiceDisplay.appendChild(fragment)

}





function fetchStockData() {
  console.log("aaaaaaaaaa")
}