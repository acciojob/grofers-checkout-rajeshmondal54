const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".price");
    let totalPrice = 0;
	priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });
	const totalRow = document.createElement("tr");
	const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = "Total Price: Rs " + totalPrice;
	totalRow.appendChild(totalCell);
	const table = document.querySelector("table");
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

