const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const key = "t7gc0osVWfwbRlvy8d-acj9miApyczsHKhtvXbu3N6M";

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(image);

        searchResult.appendChild(imgLink );

    })

    showMoreBtn.style.display = "block";
   

}


searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImage();
})
