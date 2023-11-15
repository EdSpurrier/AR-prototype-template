import PixiTest from "@/components/PixiTest";
import { title } from "@/components/primitives";

export default function PixiPage() {
	return (
		<div>
			<h1 className={title()}>PixiJS</h1>
			<PixiTest />
		</div>
	);
}
