function filterElements(category) {
    const elements = document.querySelectorAll(".box"); // TODOS os boxes

    elements.forEach((element) => {
        element.classList.remove("show"); // remove classe show
        if (category === "Todos" || element.classList.contains(category)) {
            element.classList.add("show"); // adiciona show se categoria combinar
        }
    });
}


