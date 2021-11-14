import os
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/book', methods=['GET','POST'])
def book():
    if request.method == "POST":
        print("REQUESTED BY POST METHOD")
        bookUrl = request.form.get("bookUrl")
        return render_template("book.html", bookUrl=bookUrl)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('PORT'))
