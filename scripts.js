document.getElementById('currentYear').textContent = new Date().getFullYear();
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 7000);

slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 7000);
});

let slideInterval = setInterval(nextSlide, 7000);

const tableData = [
    { label: "Country", value: "Indonesia" },
    { label: "Education", value: "Udayana University" },
    {
        label: "Social Media", value: `
        <div class="dropdown">
            <button class="dropbtn">Links here</button>
            <div class="dropdown-content" id="socialMediaLinks"></div>
        </div>`
    },
];

function createTable() {
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    tableContainer.appendChild(table);

    tableData.forEach((item) => {
        const row = document.createElement("tr");
        const labelCell = document.createElement("th");
        const valueCell = document.createElement("td");
        const valueCellDoubleDot = document.createElement("td");

        labelCell.textContent = item.label;
        valueCellDoubleDot.textContent = ":";
        valueCell.innerHTML = item.value;

        row.appendChild(labelCell);
        row.appendChild(valueCellDoubleDot);
        row.appendChild(valueCell);
        table.appendChild(row);
    });
}

createTable();

const socialMediaLinks = [
    { name: "Facebook", url: "https://www.facebook.com/example" },
    { name: "Twitter", url: "https://twitter.com/example" },
    { name: "Instagram", url: "https://www.instagram.com/example" },
];

function createSocialMediaLinks() {
    const socialMediaDropdown = document.getElementById("socialMediaLinks");

    socialMediaLinks.forEach((socialMedia) => {
        const link = document.createElement("a");
        link.textContent = socialMedia.name;
        link.href = socialMedia.url;
        socialMediaDropdown.appendChild(link);
    });
}

createSocialMediaLinks();