"use strict";
// import setimmediate from 'setimmediate';
// const nodemailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail')
console.log('Extension chargée : ' + new Date());
// const util = require("util");
// const execFile = util.promisify(require("child_process").execFile);

// async function lsDir() {
//   const { error, stdout, stderr } = await execFile("ls", ["-l"]);
//   console.log(`External Program's output:\n ${stdout}`);
// }
// lsDir();
var targetElement = document.getElementById('grid_profile_mainactions_div');

// console.log('targetElement : ' + targetElement.textContent);

// fse.copySync('build/exe.macosx-10.9-universal2-3.9', '/test', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
console.log('Extension chargée : ' + new Date());
// });

if (targetElement) {
  targetElement.addEventListener('click', function() {
    setTimeout(scrapdata,3000);
  });
}

function scrapdata(){
  var iframe = document.querySelectorAll('[id^="ifr"]')[0];
  var frame_document = iframe.contentWindow.document;
  var statut = frame_document.getElementById("id_statut");
  
  var email = frame_document.getElementById("id_email");
  var save_btn = frame_document.getElementById("id_save");

  save_btn.addEventListener('click', function() {
    if (statut.selectedIndex==0){ // correspond au statut nouveau
      setTimeout(() => {  
        if (frame_document.getElementById("head_FormHrProfile").getElementsByClassName('errorboxtable').length==0){
          console.log("submitted");
          sendEmail(email.value);
        }else{
          console.log("failed");
        }
      }, 2000);
    }
  });

}

async function sendEmail(to_email) {
    console.log("Send mail to " + to_email);

    g = document.createElement('div');
    g.setAttribute("id", "tmp_email");
    document.body.appendChild(g)

    var html = '<a hidden id="submit_email" href="webrun:C://Users/gregoryarnal/Documents/dev/ExtensionChromeMail/dist/build/exe.macosx-10.9-universal2-3.9/mail" type="submit">';
    html += '<button type="submit" style="width:70px; height:70px;" class="white-button">';
    html += '</button>';
    html += '</a>';

    document.getElementById("tmp_email").innerHTML = html;

    document.getElementById("submit_email").click();
  }


