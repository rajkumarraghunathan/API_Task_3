async function book() {
  const response = await fetch("https://bible-api.com/john 3:16");
  const data = await response.json();
  console.log(data);
  bookName(data.verses);
}

function bookName(data) {
  console.log(data);
  let content = "";

  data.map((data) => {
    console.log(data);
    content += `
   <div class="card card1" style="width: 18rem;">
     <div class="card-body text-center "> 
       <p><b>${"BOOK ID"}</b><br>${data.book_id}</p>
       <p><b>${"BOOK NAME"}</b><br>${data.book_name}</p>
       <p><b>${"BOOK CHAPTER"}</b><br>${data.chapter}</p>
       <p><b>${"BOOK VERSE"}</b><br>${data.verse}</p>
       <p><b>${"BOOK TEXT"}</b><br>${data.text}</p>
    </div>
   </div>
   </div>
<div class="footer">
</div>`
    document.getElementById("demo").innerHTML = content;
  })

}



book()