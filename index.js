function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_9kqi0uh","template_nwo10w6", params).then(document.write("<h1> APPROVED </h1>")
        
    );
}
