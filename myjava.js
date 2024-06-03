let items  = document.querySelectorAll(".ani");

console.log(items);

for(let i = 0; i < items.length; i++)
{
      items[i].addEventListener("mouseover", mouseoverFn);
      items[i].addEventListener("mouseout", mouseoverFn);                  
}

function mouseoverFn(e)
{
      e.composedPath()[0].classList.toggle("on");
}


