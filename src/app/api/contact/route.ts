import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Simulation d'une API fonctionnelle
    console.log('Message reçu:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Votre message a été envoyé avec succès!' 
    });
    
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Une erreur est survenue lors du traitement de votre demande' 
    }, { status: 500 });
  }
}
