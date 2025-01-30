document.addEventListener("DOMContentLoaded", () => {
    // Ayarlar Menüsünü Göster/Gizle
    const settingsIcon = document.getElementById("settings-icon");
    const settingsMenu = document.getElementById("settings-menu");

    settingsIcon.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
        settingsMenu.classList.toggle("show");
    });
    
    // Menü dışında bir yere tıklandığında menüyü kapat
    document.addEventListener("click", (e) => {
        if (!settingsIcon.contains(e.target) && !settingsMenu.contains(e.target)) {
            settingsMenu.classList.add("hidden");
            settingsMenu.classList.remove("show");
        }
    });
    

    // Dark Mode Aktif/Pasif
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        // Dark Mode'u Local Storage'a kaydet
        if (darkModeToggle.checked) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Sayfa Yüklendiğinde Dark Mode'u Kontrol Et
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    // Dil Değiştir
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("change", () => {
        const isEnglish = languageToggle.checked;

        if (isEnglish) {
            document.querySelector(".main-title").textContent = "Home Page";
            document.querySelector("p").textContent = "Welcome to the TurnThePage site.";
            document.querySelectorAll(".center-section a")[0].textContent = "Test Post 1";
            document.querySelectorAll(".center-section a")[1].textContent = "Test Post 2";
            document.querySelectorAll(".center-section a")[2].textContent = "Test Post 3";
            document.querySelectorAll(".center-section a")[3].textContent = "Test Post 4";
            document.querySelectorAll(".center-section a")[4].textContent = "Test Post 5";
            document.querySelectorAll(".center-section a")[5].textContent = "Test Post 6";
            document.querySelectorAll(".center-section a")[6].textContent = "Test Post 7";
        } else {
            document.querySelector(".main-title").textContent = "Ana Sayfa";
            document.querySelector("p").textContent = "TurnThePage sitesine hoş geldiniz.";
            document.querySelectorAll(".center-section a")[0].textContent = "Deneme yazisi 1";
            document.querySelectorAll(".center-section a")[1].textContent = "Deneme yazisi 2";
            document.querySelectorAll(".center-section a")[2].textContent = "Deneme yazisi 3";
            document.querySelectorAll(".center-section a")[3].textContent = "Deneme yazisi 4";
            document.querySelectorAll(".center-section a")[4].textContent = "Deneme yazisi 5";
            document.querySelectorAll(".center-section a")[5].textContent = "Deneme yazisi 6";
            document.querySelectorAll(".center-section a")[6].textContent = "Deneme yazisi 7";
        }
    });

    // Yeni Yazı Ekleme Modalını Göster/Gizle
    const newPostModal = document.getElementById("newPostModal");
    const newPostButton = document.getElementById("new-post-button"); // Yeni yazı ekle butonu
    const closeModalButton = document.getElementById("close-modal"); // Modalı kapatma butonu
    const newPostForm = document.getElementById("newPostForm"); // Form

    newPostButton.addEventListener("click", () => {
        newPostModal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        newPostModal.style.display = "none";
    });

    // Yeni Yazıyı Formdan Ekle
    newPostForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const postTitle = document.getElementById("postTitle").value;
        const postContent = document.getElementById("postContent").value;

        const postList = document.querySelector(".center-section");
        const newPost = document.createElement("a");
        newPost.href = "#";
        newPost.textContent = postTitle;

        postList.appendChild(newPost);

        newPostModal.style.display = "none";
        newPostForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "searchSuggestions";
    resultsContainer.style.position = "absolute";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.border = "1px solid #ccc";
    resultsContainer.style.maxHeight = "200px";
    resultsContainer.style.overflowY = "auto";
    const searchBar = document.getElementById("search-bar");
searchBar.appendChild(resultsContainer);


    // Yazıları içeren dizi
    const posts = [
        { title: "Kaderi Yeniden Yazmak: Olasılıkların Dansı", link: "denemeyazisi.html" },
        { title: "Time Lapse: Zamanla Oyun Olmaz", link: "denemeyazisi2.html" },
        { title: "You Talking to Me? Taxi Driver İnceleme/Felsefesi", link: "denemeyazisi3.html" },
        { title: "İyi'nin Ölçütü? - Suç ve Ceza İnceleme", link: "denemeyazisi4.html" },
        { title: "Sistem İçinde Kaldığın Müddetçe “Körsün” – Jose Saramago | Körlük", link: "denemeyazisi5.html" },
        { title: "Su ve Ateşin Karmaşası: Shutter Island Film İncelemesi", link: "denemeyazisi6.html" },
        { title: "Film Analizi: Otomatik Portakal", link: "denemeyazisi7.html" }
    ];

    function searchPosts(query) {
        resultsContainer.innerHTML = "";
        if (!query) return;

        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredPosts.length > 0) {
            filteredPosts.forEach(post => {
                const resultItem = document.createElement("div");
                resultItem.className = "suggestion-item";
                resultItem.style.padding = "10px";
                resultItem.style.cursor = "pointer";
                resultItem.innerHTML = `<a href="${post.link}"><strong>${post.title}</strong></a>`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "<p>Sonuç bulunamadı.</p>";
        }
    }

    searchInput.addEventListener("keyup", () => {
        searchPosts(searchInput.value.trim());
    });

    searchButton.addEventListener("click", () => {
        searchPosts(searchInput.value.trim());
    });
});

