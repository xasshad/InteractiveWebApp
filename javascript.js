const buttons = document.querySelectorAll(".tab-button");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        // remove active from other buttons
        buttons.forEach(function(button) {
            button.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove("active")
        });

        const element = document.getElementById(id);
        element.classList.add("active");

    }
});