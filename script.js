const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll(".price");
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });

    const existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    const totalRow = document.createElement("tr");
    totalRow.setAttribute("id", "total-row");
    
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.fontWeight = "bold";
    totalCell.setAttribute("id", "ans");
    totalCell.textContent = "Total Price: Rs " + totalPrice;

    totalRow.appendChild(totalCell);

    const table = document.querySelector("table");
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
