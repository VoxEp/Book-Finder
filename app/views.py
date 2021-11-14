from app import *

@app.route('/')
def index():
    return render_template('public/index.html')

@app.route('/book', methods=['GET','POST'])
def book():
    if request.method == "POST":
        print("REQUESTED BY POST METHOD")
        bookUrl = request.form.get("bookUrl")
        return render_template("public/book.html", bookUrl=bookUrl)