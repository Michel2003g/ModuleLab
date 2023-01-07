const a = document.querySelectorAll("a");

const getTitle = (url) => {  
    return fetch(`https://crossorigin.me/${url}`)
      .then((response) => response.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const title = doc.querySelectorAll('title')[0];
        return title.innerText;
    });
};

a.forEach( a => {

    console.log(a);
    console.log(a.innerText);
    console.log(a.href);

    if (a.innerText === "" && a.href !== undefined) {
        Promise.all(
        getTitle(a.href)
          ).then((title) => {
            a.innerText = title;
          });
    }
});