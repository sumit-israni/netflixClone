const img=[
    {
        src:"https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_.jpg"
    },
    {
        src :"https://www.dolby.com/siteassets/xf-site/content-detail-pages/ourplanetboxshot_1280x1920_en.jpg"
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lYT5K3BpbXtiEQrhMFqsOfLR6ifIEeyWOkD1COiZoW_gg5rCuYJTxALC7XkgBun5lAk&usqp=CAU"
    },
    {
        src:"https://m.media-amazon.com/images/M/MV5BYjA2M2YxMjQtOTIwOS00ODIyLThmYWEtM2Y1NGFkNjI1YmNkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
        src:"https://external-preview.redd.it/rqRAepJ8LSfprAOigv8GZz_CHQK7AHVih5luWQN3Quk.jpg?auto=webp&s=b520a6083695cadc60068fc1c6475ccb9463bff3"
    },
    {
        src:"https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        src:"https://flxt.tmsimg.com/assets/p12669880_v_v8_aa.jpg"
    },
    {
        src:"https://upload.wikimedia.org/wikipedia/en/6/6c/The_Crown_season_1.jpeg"
    },
    {
        src:"https://ceotudent.com/wp-content/uploads/2021/07/vc1bt5.jpg"
    },
    {
        src:"https://flxt.tmsimg.com/assets/p14413981_b_v8_ac.jpg"
    }
] 
const cont=document.querySelector(".imgcontainer")
var clutter=""
img.forEach((obj)=>{
    clutter+=`<div class="view">
    <img src=${obj.src}>
    </div>`
})
cont.innerHTML=clutter