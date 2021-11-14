# Book Finder

###Run

- Run Service-API with Flask: ```flask run``` or as docker container: ```docker-compose up```

API will be available in http://localhost:5000


If not using docker:

Set virtual environment:
$ python3 -m venv env
$ source env/bin/activate
$ pip install --upgrade pip
$ pip install flask


Install requirements:
$ pip install -r requirements.txt

Before flask run:
$ export FLASK_APP=application.py
$ export FLASK_ENV=development
