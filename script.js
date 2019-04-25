fetch('https://newsapi.org/v2/top-headlines?country=pt&apiKey=c3ef7b42a9864de598988c751b9efa05')
.then( result =>  result.json())
.then( res => {
    const result =  res.articles;
    
function showcontent(){
  if(result[0].content === null){
    result[0].content = '<p style="color:red; font-size:20px">Infelizmente não há notícias para esta página.</p>'
  }
    const s = document.querySelector('.title');
    const content = document.querySelector('.cont1');
    s.innerHTML = `<p class="s">${result[0].title}</p>`;
    content.innerHTML = `<div class="image-title">
          <img class="image" src="${result[0].urlToImage}"></img>
          <p class="desc">${result[0].description}</p>
          <p class="publis">${result[0].publishedAt}</p>
        </div>
        <div class="content"><p class="context">${result[0].content}<br> <span>O resto das notícias não existe infelizmente.</p>
        <p class="author">Adicionado de: <span>${result[0].author}</span></p>
        </div>`
        
  }
  function showcontent1(){
    if(result[1].content === null){
      result[1].content = '<p style="color:red; font-size:20px">Infelizmente não há notícias para esta página.</p>'
    }
    const s = document.querySelector('.title1');
    const content = document.querySelector('.cont2');
    s.innerHTML = `<p class="s">${result[1].title}</p>`;
    content.innerHTML = `<div class="image-title">
          <img class="image" src="${result[1].urlToImage}"></img>
          <p class="desc">${result[1].description}</p>
          <p class="publis">${result[1].publishedAt}</p>
        </div>
        <div class="content"><p class="context">${result[1].content}<br> <span>O resto das notícias não existe infelizmente.</p>
        <p class="author">Adicionado de: <span>${result[1].author}</span></p>
        </div>`
        
  }
  function showcontent2(){
    if(result[1].content === null){
      result[1].content = '<p style="color:red; font-size:20px">Infelizmente não há notícias para esta página.</p>'
    }
    const s = document.querySelector('.title2');
    const content = document.querySelector('.cont3');
    s.innerHTML = `<p class="s">${result[2].title}</p>`;
    content.innerHTML = `<div class="image-title">
          <img class="image" src="${result[2].urlToImage}"></img>
          <p class="desc">${result[2].description}</p>
          <p class="publis">${result[2].publishedAt}</p>
        </div>
        <div class="content"><p class="context">${result[2].content}<br> <span>O resto das notícias não existe infelizmente.</p>
        <p class="author">Adicionado de: <span>${result[2].author}</span></p>
        </div>`
        
  }
  function showcontent3(){
    if(result[1].content === null){
      result[1].content = '<p style="color:red; font-size:20px">Infelizmente não há notícias para esta página.</p>'
    }
    const s = document.querySelector('.title3');
    const content = document.querySelector('.cont4');
    s.innerHTML = `<p class="s">${result[3].title}</p>`;
    content.innerHTML = `<div class="image-title">
          <img class="image" src="${result[3].urlToImage}"></img>
          <p class="desc">${result[3].description}</p>
          <p class="publis">${result[3].publishedAt}</p>
        </div>
        <div class="content"><p class="context">${result[3].content}<br> <span>O resto das notícias não existe infelizmente.</p>
        <p class="author">Adicionado de: <span>${result[3].author}</span></p>
        </div>`
        
  }

  
showcontent();
showcontent1();
showcontent2();
showcontent3();
})


