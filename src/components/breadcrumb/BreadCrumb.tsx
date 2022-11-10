import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbComponent({ data }: BreadCrumbComponentProps) {
	return (
		<Breadcrumb>
			{data.map((d: any, index: number) => (
				<Breadcrumb.Item key={index} active={d?.isActive} href={d?.href}>
					{d?.title}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
}

interface BreadCrumbComponentProps {
	data: Array<{ isActive: boolean; href: string; title: string }>;
}

export default BreadcrumbComponent;
