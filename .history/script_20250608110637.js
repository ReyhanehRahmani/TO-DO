document.getElementById("creatbut").onclick = function () {
    
    const title = document.getElementById("titlebox").value.trim();
    const desc = document.getElementById("descriptionbox").value.trim();

    const card = document.createElement("div");
    card.classList.add("card");

    const cardItems =document.createElement("div");
    card.classList.add("cardItem");

    card.appendChild(cardItems);

    const titleElem = document.createElement("div");
    titleElem.classList.add("cardTitle");
    titleElem.textContent = title;

    const dateElem = document.createElement("div");
    dateElem.classList.add("cardDate");

    const now = new Date();
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const month = monthNames[now.getMonth()];

    const formattedDate = day + " " + month;

    dateElem.textContent = formattedDate + " • " + " Assigned to Taha ";

    const descElem = document.createElement("div");
    descElem.classList.add("cardDesc");
    descElem.textContent = desc;

    cardItems.appendChild(titleElem);
    cardItems.appendChild(dateElem);
    cardItems.appendChild(descElem);

    document.getElementById("cardsContainer").appendChild(card);

    document.getElementById("clearbut").addEventListener("click", function () {
    document.getElementById("titlebox").value = "";
    document.getElementById("descriptionbox").value = "";});


};
