
# Book Finder

  

Book Finder is my cs50x (2021) final project and was inspired by florinpop17 [app ideas](https://github.com/florinpop17/app-ideas). To create this web page I decided to use Flask, Javascript and Google Books API. I chose this project to learn more about javascript and how to consume a external API.

  

## Video Demo: <https://www.youtube.com/watch?v=7Y2otvxnKmw>

  

## Description

This application allow users to search for books by entering a query (title, author, publisher, etc) and display all books found in a list on the page with corresponding data.

  

## Freatures

- User can search for a book

- User can see list of books appearing on the page

- Pagination index

- Responsive Design

- Loading Animations

- User can acess a secondary page for more book details

- If available, user can check a sample and buy the book (external link to google)

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
