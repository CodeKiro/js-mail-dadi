const allowedEmails = ['ciro@gmail.com',' mammt@gmail.com', 'luca@gmail.com',' ktm@gmail.com', 'sr1000@gmail.com', '2jz@gmail.com',]
const userMail = prompt('Scrivi la tua email');
if ( allowedEmails.includes(userMail) === true){
    console.log('Puoi accedere');
}   else{
    console.log('non fai parte della whitelist');
}