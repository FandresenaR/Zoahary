import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validation de base
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Tous les champs sont requis' 
      }, { status: 400 });
    }
    
    // Ici vous implémenteriez l'envoi d'email ou l'enregistrement en base de données
    console.log('Message reçu:', data);
    
    // Retourner une réponse de succès
    return NextResponse.json({ 
      success: true, 
      message: 'Votre message a été envoyé avec succès!' 
    });
    
  } catch (error) {
    console.error('Erreur de traitement:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Une erreur est survenue lors du traitement de votre demande' 
    }, { status: 500 });
  }
}
