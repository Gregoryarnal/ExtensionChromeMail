import emailjs from 'emailjs-com';
import email from '../config.js';

console.log('Extension chargée !');

var targetElement = document.getElementById('question-header');

if (targetElement) {
  targetElement.addEventListener('click', function() {
    sendEmail();
  });
}


function sendEmail() {
    var userId = email.email.userId; // Remplacez par votre User ID EmailJS
    var serviceId = email.email.serviceId; // Remplacez par votre Service ID EmailJS
    var templateId = email.email.templateId; // Remplacez par votre Template ID EmailJS

    var templateParams = {
      to_name: 'gregory.arnal@hotmail.com', // Nom du destinataire
      message: 'Contenu de l\'e-mail' // Contenu de l'e-mail
    };
  
    // Envoyer l'e-mail via EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(function(response) {
        alert('E-mail envoyé avec succès !');
      }, function(error) {
        alert('Erreur lors de l\'envoi de l\'e-mail.');
      });
  }
