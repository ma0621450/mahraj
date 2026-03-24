import PageHeader from "../../components/layout/PageHeader";
import ServiceCards from "./sections/ServiceCards";

export default function Services() {
    return (
        <>
            <PageHeader title="Our Services" breadcrumb="Our Services" />
            <ServiceCards />
        </>
    );
}
