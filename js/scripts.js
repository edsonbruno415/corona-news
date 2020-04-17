const inputSearch = document.getElementById("input-search");

inputSearch.addEventListener("keyup",filterNews);

function filterNews(e){
    const keyWords = (inputSearch.value).toLowerCase();
    const news = document.getElementsByClassName("news-item");
    for(content of news){
        let title = content.getElementsByTagName("h3")[0].innerText;
        title = title.toLowerCase();
        if(title.indexOf(keyWords)===-1){
            content.hidden = true;
        }else{
            content.hidden = false;
        }
    }
}