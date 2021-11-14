  $(document).ready(function () {
    let outputList = "#output-list";
    let GoogleApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    let placeHolder = "/static/img/cover.png";
    let booksPerPage = 18; //default 10, maximum 40
    let paginationIndex;
    let searchBox = {};
    let searchInfo = {};

    $("#search").click(function () { 
      searchBox.input = $("#search-box").val();

      if (searchBox.input === "" || searchBox.input === null){
        return alert("Invalid Input");
      }
      
      paginationIndex = 0;

      searchBooks(paginationIndex);
    });

    $("#next").click(function () { 
      if ((searchInfo.booksFound -  paginationIndex) / booksPerPage < 1) {
        return
      }

      paginationIndex += booksPerPage-1;

      searchBooks(paginationIndex);
    });

    $("#previous").click(function () { 
      if (paginationIndex == 0) {
        return 
      }

      paginationIndex -= booksPerPage-1;

      searchBooks(paginationIndex);
    });

    $(document).ajaxStart(function(){
      $('#loading').show();
    }).ajaxStop(function(){
      $('#loading').hide();
    });
  
    function searchBooks(paginationIndex) {
      $(outputList).html("");

      let maxResults = booksPerPage.toString();
      let index = paginationIndex.toString();    

      $.ajax({
        type: "get",
        url: GoogleApiUrl + searchBox.input + "&maxResults=" + maxResults + "&startIndex=" + index,
        dataType: "json",
        success: function(response) {
          console.log(response);
          if (response.totalItems === 0) {  
            $("#next").attr("class", "page-item disabled")
            $("#previous").attr("class", "page-item disabled")
            $("#books-found").html("No books found");
          } else {
            $(".book-list").css({"visibility": "visible"});
            displayBooks(response);
            }
          },
          error: function() {
            alert("Something went wrong...") 
          }
        });
      $("#search-box").val("");
    }

    function displayBooks(response) {
      searchInfo.booksFound = response.totalItems;

      $("#books-found").html(`about <b>${searchInfo.booksFound}</b> books found`);

      if ((searchInfo.booksFound -  paginationIndex) / booksPerPage > 1) {
        $("#next").attr("class", "page-item");   
      } else {
        $("#next").attr("class", "page-item disabled");
      }

      if (paginationIndex != 0) {
        $("#previous").attr("class", "page-item");   
      } else {
        $("#previous").attr("class", "page-item disabled");
      }

      for (let i = 0; i < response.items.length; i+=3) {
        let columnsOutput = ('')
        for (let j = i; j < i+3; j++){
          columnsOutput += bookCard(response.items[j]);
        }
        $(outputList).append('<div class="row">' + columnsOutput + '</div>'); 
        console.log(outputList); 
      }
    }

    function bookCard(item){
      let book = {}
      book.title = (item.volumeInfo.title) ? item.volumeInfo.title : '';
      book.authors = (item.volumeInfo.authors) ? item.volumeInfo.authors : 'Unknown'
      book.publishedDate = (item.volumeInfo.publishedDate) ? item.volumeInfo.publishedDate : 'Unknown';
      book.publisher = (item.volumeInfo.publisher) ? item.volumeInfo.publisher : 'Unknown';
      book.imgSrc = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
      book.description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description available';
      book.url = item.selfLink;

      let htmlCard = `
      <div class="col-md-4 mb-3">
            <div class="card h-100">
                <div class="row g-0">
                    <div class="col-5">
                        <img src="${book.imgSrc}" class="card-img" id="img-cover" alt="">
                    </div>
                    <div class="col-7">
                        <div class="card-body">
                            <h6 class="card-title"><b>${book.title}</b></h6>
                            <p class="card-text"><b>Authors: </b>${book.authors}</p>
                            <p class="card-text"><b>Published Date: </b>${book.publishedDate}</p>
                            <p class="card-text"><b>Publisher: </b>${book.publisher}</p>
                            <form target="_blank" action="/book" method="post">
                              <button name="bookUrl" href="/book" target="blank" class="btn btn-primary" type="submit" value="${book.url}">More</button>      
                            </form> 
                        </div>
                    </div>
                </div>    
            </div>
        </div>`
      return htmlCard;
    }
  });
