import { type RenderableTreeNodes, renderers } from "@markdoc/markdoc";
import React from "react";
import { type MetaFunction, data, useLoaderData } from "react-router";
import { parseMarkdown } from "~/server/markdown.server";

export const loader = async () => {
	return data({
		markdown: parseMarkdown({
			markdown: "# Hi Remix Team!\n\n## Is this type error still on?",
		}),
	});
};

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const { markdown } = useLoaderData<typeof loader>();
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
					Welcome to <span className="sr-only">Remix</span>
				</h1>
				<div>
					<MarkdocComponent content={markdown} />
				</div>
			</div>
		</div>
	);
}
const MarkdocComponent = ({ content }: { content: RenderableTreeNodes }) => {
	return <div>{renderers.react(content, React)}</div>;
};
