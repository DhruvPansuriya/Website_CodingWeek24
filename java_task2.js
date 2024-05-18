const URL = "https://coding-week-2024-api.onrender.com/api/data"

let category1 = document.querySelectorAll(".category1");
let authors = document.querySelectorAll(".author-name");
let left_dates = document.querySelectorAll(".date_left");
let right_dates = document.querySelectorAll(".right_date");
let left_images = document.querySelectorAll(".image");
let right_images = document.querySelectorAll(".right_img");
let left_headlines = document.querySelectorAll(".img_text");
let right_headlines = document.querySelectorAll(".rimg_text");
let content_data_all = document.querySelectorAll(".content_data");
let left_sections = document.querySelectorAll(".hover_left_sections");
let close_buttons = document.querySelectorAll(".close-button")
let overlay = document.querySelector(".overlay");
let right_sections = document.querySelectorAll(".right_secs");

// Function to Change format of the date
function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    // Convert the month number to the month name
    const monthName = monthNames[parseInt(month, 10) - 1];
    // Construct the formatted date string
    return `${monthName} ${parseInt(day, 10)}, ${year}`;
}

function stringUpdate(inputString) {
    var words = inputString.split(' ');
    words.splice(2, 0, '<br>');
    return words.join(' ');
}

const getData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data[0]);

    let i = 0;
    for (let category_each of category1) {
        category_each.innerHTML = data[i].type; i++;
    }
    i = 0;
    for (let author of authors) {
        author.innerHTML = data[i].author; i++;
    }
    i = 0;
    for (let date of left_dates) {
        let new_date = formatDate(data[i].date);
        date.innerHTML = new_date;
        i++;
    }
    for (let date of right_dates) {
        let new_date = formatDate(data[i].date);
        date.innerHTML = new_date;
        i++;
    }
    i = 0;
    for (let image_new of left_images) {
        image_new.style.backgroundImage = `url(${data[i].image})`;
        i++;
    }
    for (let image_new of right_images) {
        image_new.style.backgroundImage = `url(${data[i].image})`;
        i++;
    }
    i = 0;
    for (let headline of left_headlines) {
        let headline_data = stringUpdate(data[i].headline);
        headline.innerHTML = headline_data
        i++;
    }
    for (let headline of right_headlines) {
        let headline_data = stringUpdate(data[i].headline);
        headline.innerHTML = headline_data
        i++;
    }

    // ---Additional Boxes----//
    i = 0;
    for (let section of left_sections) {
        section.addEventListener("click", () => {
            let section_id = section.getAttribute("name");
            section_id = parseInt(section_id);
            let data_text = document.querySelector("#data_text");
            data_text.innerHTML = data[section_id - 1].content;

            let img_text = document.querySelector(".data_text");
            img_text.style.backgroundImage = `url(${data[section_id-1].image})`;
            
            let content_date = document.querySelector(".content_date");
            content_date.innerHTML = formatDate(data[section_id-1].date);

            let content_category_1 = document.querySelector(".content_category_1");
            content_category_1.innerHTML= data[section_id-1].type;

            let content_headline_text = document.querySelector("#content_headline_text");
            content_headline_text.innerHTML = data[section_id-1].headline;

            let content_data = document.querySelector(".content_data");
            content_data.style.display = 'inline-flex';
            overlay.style.display = 'block';
            setTimeout(function () {
                content_data.style.opacity = '1';
            }, 10);
        });
        i++;
    }

    i = 0;
    for (let close_button of close_buttons) {
        close_button.addEventListener("click", () => {
            let content = document.querySelector(".content_data");
            content.style.opacity = '0';
            setTimeout(function () {
                content.style.display = 'none';
            }, 500);
            setTimeout(function () {
                overlay.style.display = 'none';
            }, 300);
        })
        i++;
    }

    // ---For Right Section Also-----
    i = 0;
    for (let section of right_sections) {
        section.addEventListener("click", () => {
            let section_id = section.getAttribute("name");
            section_id = parseInt(section_id);
            let data_text = document.querySelector("#data_text");
            data_text.innerHTML = data[section_id - 1].content;

            let img_text = document.querySelector(".data_text");
            img_text.style.backgroundImage = `url(${data[section_id-1].image})`;
            
            let content_date = document.querySelector(".content_date");
            content_date.innerHTML = formatDate(data[section_id-1].date);

            let content_category_1 = document.querySelector(".content_category_1");
            content_category_1.innerHTML= data[section_id-1].type;

            let content_headline_text = document.querySelector("#content_headline_text");
            content_headline_text.innerHTML = data[section_id-1].headline;

            let content_data = document.querySelector(".content_data");
            content_data.style.display = 'inline-flex';
            overlay.style.display = 'block';
            setTimeout(function () {
                content_data.style.opacity = '1';
            }, 10);
        });
        i++;
    }
}

window.addEventListener("load", () => {
    getData();
})

let home = document.querySelector("#HOME");
let options_all = document.querySelectorAll(".bar2_box");
let popular_box = document.querySelector("#popular_box");
let latest_box = document.querySelector("#latest_box");

for (let option of options_all) {
    option.addEventListener("mouseenter", () => {
        option.style.backgroundColor = '#140f09';
        option.style.color = 'white';
        home.style.backgroundColor = 'white';
        home.style.color = '#140f09';
    })
    option.addEventListener("mouseleave", () => {
        option.style.backgroundColor = 'white';
        option.style.color = '#140f09';
        home.style.backgroundColor = '#140f09';
        home.style.color = 'white';
    })
}

popular_box.addEventListener("mouseenter", () => {
    popular_box.style.backgroundColor = '#140f09';
    popular_box.style.color = 'white';
    popular_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.25)";
    latest_box.style.backgroundColor = 'white';
    latest_box.style.color = '#140f09';
    latest_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.1)";
})
popular_box.addEventListener("mouseleave", () => {
    popular_box.style.backgroundColor = 'white';
    popular_box.style.color = '#140f09';
    popular_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.1)";
    latest_box.style.backgroundColor = '#140f09';
    latest_box.style.color = 'white';
    latest_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.25)";
})