#!/usr/bin/env python

import flask
import flask_socketio

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

@app.route("/")
def root():
	return flask.render_template("index.html")

@socketio.on("message")
def on_message(username, message):
	flask_socketio.send((username, message), broadcast=True)

if __name__ == "__main__":
	socketio.run(app)
