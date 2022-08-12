#!C:\Users\Venkitesh\AppData\Local\Programs\Python\Python310\python.exe


#import the module for CGI handling

import cgitb
cgitb.enable()

import cgi
import html
import os


try:
    import msvcrt
    #set mode for stdin and stdout
    msvcrt.setmode(0, os.O_BINARY) # setting std input to 0
    msvcrt.setmode(1, os.O_BINARY) # setting std output to 1
except ImportError:
    pass

print("content-type: text/html\n\n")

#create an instance of FieldStorage class
form = cgi.FieldStorage()

#get the data from the fields with default value if left blank
name = form.getvalue('name', 'No name')
email = form.getvalue('email', 'No email')
password = form.getvalue('password', 'No password')
emotion = form.getlist('emotion')
satisfaction = form.getvalue('satisfaction')
comments = form.getvalue('comments', 'No comments')
location = form.getvalue('location', 'Asia')


#Avoid script injection escaping the user input
name = html.escape(name)
email = html.escape(email)
password = html.escape(password)
comments = html.escape(comments)


#get the file from the nested Field storage
fileitem = form['file']

#checkin if a valid file is uploaded
if fileitem.filename:
    #get rid of the path and keep only the filename
    imagefilename = os.path.basename(fileitem.filename)
    open('files/' + imagefilename, 'wb').write(fileitem.file.read())
    message = "The file was uploaded to files/" + imagefilename
else:
    message = "No file was uploaded"


#The HTTP header which describes what content is being sent to the browser


print(f"""
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <title>Test title</title>
    </head>
    <body>
        <div class="myheadstyle">
            <h2 class="title">Feedback by {name}</h2><br>
            <h5 class="title"> {name} is {", ".join([html.escape(i) for i in emotion])} </h5><br>
            <h5 class="title">and is {satisfaction}<h5><br>
            <h5 class="title">{comments}</h5><br><br>
            <img src="files/{fileitem.filename}"> <br>
            <h5 class="title"> from {location} </h5>
        </div>
    </body>
</html>
""")