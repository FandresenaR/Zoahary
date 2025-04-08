import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, message: 'Token reCAPTCHA manquant' }, { status: 400 });
    }

    // Récupérer la clé secrète reCAPTCHA depuis les variables d'environnement
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('Clé secrète reCAPTCHA non configurée');
      return NextResponse.json({ success: false, message: 'Erreur de configuration serveur' }, { status: 500 });
    }

    // Envoi de la requête à l'API Google pour vérifier le token
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, score: data.score });
    } else {
      return NextResponse.json({ success: false, message: 'Validation reCAPTCHA échouée', errors: data['error-codes'] }, { status: 400 });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du reCAPTCHA:', error);
    return NextResponse.json({ success: false, message: 'Erreur serveur' }, { status: 500 });
  }
}
