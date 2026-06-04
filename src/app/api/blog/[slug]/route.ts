import { NextResponse } from 'next/server';
import { readJson } from '@/lib/read-json';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        // Catch language from API Header "lang", fallback to 'en'
        const lang = request.headers.get('lang') || 'en';

        // Use allowed languages to prevent issues, fallback to 'en' for unknown languages
        const locale = lang === 'si' ? 'si' : 'en';

        // Read the json file from data/blog/details/{slug}/{locale}.json
        const blogDetail = await readJson('blog', 'details', slug, `${locale}.json`);

        return NextResponse.json({
            success: true,
            message: 'Blog post fetched successfully',
            data: blogDetail
        });
    } catch (error) {
        console.error('Error reading blog post:', error);
        return NextResponse.json({
            success: false,
            message: 'Blog post not found',
            errors: error
        }, { status: 404 });
    }
}
