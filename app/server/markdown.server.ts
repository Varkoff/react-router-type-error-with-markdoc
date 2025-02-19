import { type RenderableTreeNodes, parse, transform } from "@markdoc/markdoc";

export function parseMarkdown({
	markdown,
}: { markdown: string }): RenderableTreeNodes {
	const ast = parse(markdown);

	return transform(ast);
}
