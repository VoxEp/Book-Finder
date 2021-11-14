$(document).ready(function () {
    let bookInfo = "#book-info";
    let placeHolder = "/static/img/cover.png";
    let bookUrl = $(".bookUrl").text();

    $(document).ajaxStart(function(){
        $('#loading').show();
      }).ajaxStop(function(){
        $('#loading').hide();
      });

    $.ajax({
      type: "get",
      url: bookUrl,
      data: "data",
      dataType: "json",
      success: function (response) {
        $(bookInfo).append(bookCardDetailed(response));
      },
      error: function() {
        alert("Something went wrong...") 
      }
    }); 

    function bookCardDetailed(item) {
        let book = {}
        book.title = (item.volumeInfo.title) ? item.volumeInfo.title : '';
        book.subtitle = (item.volumeInfo.subtitle) ? item.volumeInfo.subtitle : ''
        book.authors = (item.volumeInfo.authors) ? item.volumeInfo.authors : 'Unknown'
        book.publishedDate = (item.volumeInfo.publishedDate) ? item.volumeInfo.publishedDate : 'Unknown';
        book.publisher = (item.volumeInfo.publisher) ? item.volumeInfo.publisher : 'Unknown';
        book.imgSrc = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
        book.pageCount = (item.volumeInfo.pageCount) ? item.volumeInfo.pageCount : 'Unknown';
        book.description = (item.volumeInfo.description) ? item.volumeInfo.description : 'No description available';
        book.sampleUrl = item.accessInfo.webReaderLink;
        book.buyUrl = item.saleInfo.buyLink;

        let htmlCard = `
        <div class="row">
            <div class="col-md-4" style="width=400px">
                 <div class="card" >
                    <img src="${book.imgSrc}" class="card-img img-align" alt=""> 
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title"><b>${book.title}</b></h5>
                        <h6 class="card-subtitle mb-2 text-muted"><b>${book.subtitle}</b></h6>
                        <p class="card-text"><b>Authors: </b>${book.authors}</p>
                        <p class="card-text"><b>Published Date: </b>${book.publishedDate}</p>
                        <p class="card-text"><b>Publisher: </b>${book.publisher}</p>
                        <p class="card-text"><b>Page Count: </b>${book.pageCount}</p> 
                        <div class="row align-self-end mt-auto">
                            <div class="col-8">
                                <a href="${book.sampleUrl}" target="blank">
                                    <button type="button" class="btn btn-primary">View Sample</button>
                                </a>
                            </div>
                            <div class="col-3">
                                <a href="${book.buyUrl}" target="blank">
                                    <button type="button" class="btn btn-primary">Buy</button>
                                </a>
                            </div>
                        </div>   
                    </div>       
                </div>    
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title"><b>Description:</b></h3>
                        <div class="scrollable">
                            <p class="card-text" style="font-size:20px">${book.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        return htmlCard;
      }
});