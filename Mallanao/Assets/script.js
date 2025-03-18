const data = [
    {title: "Luzon", url: `https://guidetothephilippines.ph/articles/what-to-experience/luzon-tourist-spots`},
    {title: "Visayas", url: `https://guidetothephilippines.ph/articles/what-to-experience/visayas-tourist-spots`},
    {title: "Mindanao", url: "  https://guidetothephilippines.ph/articles/what-to-experience/mindanao-tourist-spots"}

];


const results = document.getElementsByClassName('results')[0];
const searching = document.getElementsByClassName('search')[0];

searching.addEventListener('input', function(){
    results.innerHTML = ''; // for clear
    const searchTerm = searching.value.toLowerCase();

    data.forEach((item)=>{
        if(item.title.toLowerCase().includes(searchTerm)){
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.title;
            link.classList.add('resultss')
            results.appendChild(link);
            results.appendChild(document.createElement('br'))
        }
    })
})