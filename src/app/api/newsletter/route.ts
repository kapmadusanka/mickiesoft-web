import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email } = result.data;

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      // Check for unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email is already subscribed to the newsletter.' },
          { status: 409 }
        );
      }
      
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe to the newsletter. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
