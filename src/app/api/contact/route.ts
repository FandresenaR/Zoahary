import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message, token } = await request.json();

    // Vérification des champs obligatoires
    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Vérification du token reCAPTCHA
    const captchaResponse = await fetch(new URL('/api/verify-captcha', request.url).toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, message: 'Validation reCAPTCHA échouée' },
        { status: 400 }
      );
    }

    // Ici, vous pouvez traiter le message, par exemple l'envoyer par email
    // Exemple: await sendEmail({ name, email, message });

    // Pour cet exemple, simulons un délai
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors du traitement de la demande' },
      { status: 500 }
    );
  }
}
