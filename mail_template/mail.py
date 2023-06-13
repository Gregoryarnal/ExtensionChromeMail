import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage

sender_email = ""
receiver_email = ""
password = ""

message = MIMEMultipart("alternative")
message["Subject"] = "OCSI a une opportunité pour vous !"
message["From"] = sender_email
message["To"] = receiver_email

# Create the plain-text and HTML version of your message

with open("mail_template/mail_template.html", "r") as file:
    html = file.read()

# Turn these into plain/html MIMEText objects
# part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

fp = open('mail_template/image.png', 'rb')
msgImage = MIMEImage(fp.read())
fp.close()

# msgImage.add_header('Content-ID', 'image')
message.attach(msgImage)
# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
# message.attach(part1)
message.attach(part2)

# Create secure connection with server and send email
context = ssl.create_default_context()
with smtplib.SMTP("smtp-mail.outlook.com", 587) as server:
    server.starttls()
    server.login(sender_email, password)
    server.sendmail(
        sender_email, receiver_email, message.as_string()
    )