from flask import Flask, render_template

from app import app, pages

@app.route('/')

def home():
    return render_template('index.html')

@app.route('/solution/')
def solution():
    return render_template('solution.html')

@app.route('/process/')
def process():
    return render_template('process.html')

@app.route('/team/')
def team():
    return render_template('team.html')

@app.route('/blog/')
def blog():
    return render_template('blog.html')

@app.route('/blog/week_1/')
def blog_week_1():
    return render_template('/blog_entries/week_1.html')

@app.route('/blog/week_2/')
def blog_week_2():
    return render_template('/blog_entries/week_2.html')

@app.route('/blog/week_3/')
def blog_week_3():
    return render_template('/blog_entries/week_3.html')

@app.route('/blog/week_4/')
def blog_week_4():
    return render_template('/blog_entries/week_4.html')

@app.route('/blog/week_5/')
def blog_week_5():
    return render_template('/blog_entries/week_5.html')

@app.route('/blog/week_6/')
def blog_week_6():
    return render_template('/blog_entries/week_6.html')

@app.route('/blog/week_7/')
def blog_week_7():
    return render_template('/blog_entries/week_7.html')

@app.route('/blog/week_8/')
def blog_week_8():
    return render_template('/blog_entries/week_8.html')

@app.route('/blog/week_9/')
def blog_week_9():
    return render_template('/blog_entries/week_9.html')

@app.route('/blog/week_10/')
def blog_week_10():
    return render_template('/blog_entries/week_10.html')



if __name__ == '__main__':
    app.run(debug=True)
