# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/about')
# def about():
#     return render_template('index.html', section='about')

# @app.route('/projects')
# def projects():
#     return render_template('index.html', section='projects')

# @app.route('/contact')
# def contact():
#     return render_template('index.html', section='contact')

# if __name__ == '__main__':

#     app.run(debug=True)


from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/projects')
def projects():
    data = [
        {"id": 1, "title": "E-Commerce Platform", "desc": "Full-stack marketplace with payment integration", "tech": ["Python", "Django", "PostgreSQL"], "link": "#"},
        {"id": 2, "title": "AI Chat Dashboard", "desc": "Real-time analytics dashboard for LLM usage", "tech": ["React", "FastAPI", "Redis"], "link": "#"},
        {"id": 3, "title": "Mobile Banking App", "desc": "Secure fintech app with biometric auth", "tech": ["Flutter", "Go", "AWS"], "link": "#"},
        {"id": 4, "title": "Data Pipeline ETL", "desc": "Automated data processing for 10M+ records/day", "tech": ["Airflow", "Spark", "BigQuery"], "link": "#"},
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
