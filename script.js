const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all the price elements
    const priceElements = document.querySelectorAll(".price");
    let totalPrice = 0;

    // Iterate through the price elements and sum their values
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Remove the existing total row if it exists
    const existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    totalRow.setAttribute("id", "total-row");
    
    // Create a single cell to span the whole row
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.fontWeight = "bold";
    totalCell.setAttribute("id", "ans");
    totalCell.textContent = "Total Price: Rs " + totalPrice;

    // Append the cell to the row
    totalRow.appendChild(totalCell);

    // Append the row to the table
    const table = document.querySelector("table");
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
