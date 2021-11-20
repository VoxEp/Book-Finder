
# Book Finder

  
Book Finder was inspired by florinpop17 [app ideas](https://github.com/florinpop17/app-ideas). This application allow users to search for books by entering a query (title, author, publisher, etc) and display all books found in a list on the page with corresponding data.

## Freatures

- Book Finder allow users to **search for books** by multiple criteria (title, author, publisher, etc) 

- The web page **display all books** found in a list on the page with corresponding data. 

- Since Google Books API only admit at maximum 40 books per request, the webpage offers a **pagination index** that allows user to look all books found

- The webpage offers a **responsive design** fitting at most screen sizes. 

- When the site searches for books, a **loading animation** is shown.

- User can access a secondary page for **more book details**

- If available, user can **check a sample and buy the book** (external link to google)

 ## Possible improvements
As all applications this one can also be improved. Possible improvements:

 - Have database for user account allowing users to: 
	 - Score books
	 - Add book to a personal wish list
	 - Personal profile dashboard 
 - Allow users to post a comment (review) for a specific book
 - Show random books at index  

## Installation
### Using docker container (recommended)

 1. Install docker and docker-compose - [External Link](https://docs.docker.com/compose/install/)
 2.  Run the app as docker-container: ```docker-compose up```
 
### Using flask Locally

 1. Setup virtual environment:
	```

	$ python3 -m venv env

	$ source env/bin/activate

	$ pip install --upgrade pip

	$ pip install flask

	```
 2. Install requirements:
	```

	$ pip install -r requirements.txt

	```


 3. Define flask app
	```

	$ export FLASK_APP=application.py

	```

   4. Run the app with Flask: ```flask run```

## Authors

-  [Vinícius Rodrigues](https://www.linkedin.com/in/vinicius-rodrigues-silva-96007b192/)

  

## License

Usage is provided under the [MIT License](https://mit-license.org/). See LICENSE for full details.
