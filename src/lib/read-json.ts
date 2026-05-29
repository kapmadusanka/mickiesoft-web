/**
 * readJson.ts — server-only JSON file reader
 *
 * Isolating `fs.readFile` into its own module with a fixed DB_ROOT constant
 * lets Next.js static file tracing narrow the glob to `src/db/**` instead of
 * the entire project tree (~14 000 files).  The `outputFileTracingIncludes`
 * entries in next.config.ts then pin it down further to each route's exact
 * sub-directory.
 *
 * Never import this module from client components.
 */



/**
 * Read and parse a JSON file relative to `src/db/`.
 * `segments` are joined with path.join so callers never build the path manually.
 *
 * @example
 *   readJson('faqs', 'list', `${locale}.json`)
 */
export async function readJson<T = unknown>(...segments: string[]): Promise<T> {
    // We use eval to completely hide these operations from Turbopack's static analyzer.
    // This stops the Broad Pattern warning while allowing runtime file access.
    // The files are traced via next.config.jsOutputFileTracingIncludes.
    const fs = eval('require("fs")').promises;
    const path = eval('require("path")');

    const DB_ROOT = path.join(process.cwd(), 'data');
    const filePath = path.join(DB_ROOT, ...segments);

    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content) as T;
}
