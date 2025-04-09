import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const data = await request.json();
    
    // Validation de base
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Tous les champs sont requis' 
      }, { status: 400 });
    }
    
    // Configuration de Nodemailer (service d'envoi d'emails)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou un autre service comme 'SendGrid', 'SMTP', etc.
      auth: {
        user: process.env.EMAIL_USER || 'zoahary.baobab01@gmail.com',
        pass: process.env.EMAIL_PASSWORD // Le mot de passe doit être configuré dans les variables d'environnement
      }
    });
    
    // Contenu de l'email
    const mailOptions = {
      from: `"Formulaire Zoahary Baobab" <${process.env.EMAIL_USER || 'zoahary.baobab01@gmail.com'}>`,
      to: 'zoahary.baobab01@gmail.com', // L'adresse email qui recevra les messages
      replyTo: data.email, // Pour que les réponses aillent directement au client
      subject: `Nouveau message de ${data.name}`,
      text: `
        Nom: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <h3>Nouveau message du site web</h3>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    
    // Réponse de succès
    return NextResponse.json({ 
      success: true, 
      message: 'Votre message a été envoyé avec succès!' 
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.' 
    }, { status: 500 });
  }
}
