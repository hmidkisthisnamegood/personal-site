<script>
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); 
                }
            });
        }, { threshold: 0.2 }); // Kích hoạt khi 20% phần tử xuất hiện trên màn hình

        elements.forEach(el => observer.observe(el));
    });
</script>
