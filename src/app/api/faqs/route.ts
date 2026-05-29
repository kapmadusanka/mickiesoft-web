import { NextResponse } from 'next/server';
import { readJson } from '@/lib/read-json';

export async function GET(request: Request) {
    try {
        // Catch language from API Header "lang", fallback to 'en'
        const lang = request.headers.get('lang') || 'en';

        // Use allowed languages to prevent issues, fallback to 'en' for unknown languages
        const locale = lang === 'si' ? 'si' : 'en';

        // Read the json file from src/db/faqs/list/{locale}.json
        const faqs = await readJson('faqs', 'list', `${locale}.json`);

      console.log("FAQ", faqs);
        return NextResponse.json({
            success: true,
            message: 'FAQs fetched successfully',
            data: faqs
        });
    } catch (error) {
        console.error('Error reading FAQs:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch FAQs',
            errors: error
        }, { status: 500 });
    }
}
