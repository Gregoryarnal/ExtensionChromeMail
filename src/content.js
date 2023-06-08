
// import emailjs from '/node_modules/emailjs-com/cjs/index.js';
import emailjs from 'emailjs-com';
// const {emailjs} = require('/node_modules/emailjs-com/cjs/index.js')
{/* <script src="./main.js" type="module"></script> */}
// const { emailjs } = importVarsFrom('emailjs-com');

console.log('Extension chargée !');

// Recherche de l'élément spécifique sur la page
var targetElement = document.getElementById('question-header');

// Vérification de l'existence de l'élément
if (targetElement) {
  // Ajout d'un écouteur d'événement sur l'élément
  targetElement.addEventListener('click', function() {
    sendEmail();
    // chrome.runtime.sendMessage({ action: 'elementClicked' });    
  });
}


function sendEmail() {
    var userId = 'jb6fRN2kojZiE_17v'; // Remplacez par votre User ID EmailJS
    var serviceId = 'service_w1e5kf8'; // Remplacez par votre Service ID EmailJS
    var templateId = 'template_duw6lmp'; // Remplacez par votre Template ID EmailJS
  
    var templateParams = {
      to_name: 'gregory.arnal@hotmail.com', // Nom du destinataire
      message: 'Contenu de l\'e-mail' // Contenu de l'e-mail
    };
  
    // Envoyer l'e-mail via EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(function(response) {
        // E-mail envoyé avec succès
        alert('E-mail envoyé avec succès !');
      }, function(error) {
        // Erreur lors de l'envoi de l'e-mail
        alert('Erreur lors de l\'envoi de l\'e-mail.');
      });
  }
