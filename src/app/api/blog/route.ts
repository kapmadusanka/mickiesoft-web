import { NextResponse } from 'next/server';
import { readJson } from '@/lib/read-json';

export async function GET(request: Request) {
    try {
        // Catch language from API Header "lang", fallback to 'en'
        const lang = request.headers.get('lang') || 'en';

        // Use allowed languages to prevent issues, fallback to 'en' for unknown languages
        const locale = lang === 'si' ? 'si' : 'en';

        // Read the json file from data/blog/list/{locale}.json
        const blogs = await readJson('blog', 'list', `${locale}.json`);

        return NextResponse.json({
            success: true,
            message: 'Blog posts fetched successfully',
            data: blogs
        });
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch blog posts',
            errors: error
        }, { status: 500 });
    }
}
