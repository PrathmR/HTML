


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Add blocks dynamically
    for (let i = 0; i < 50; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        container.appendChild(block);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => observer.observe(block));
});