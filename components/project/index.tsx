import Container from '../ui/container';
import { PageHeader } from '../ui/page-header';

export function Project() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Projects"
        description="A collection of projects I’ve worked on, combining creativity, code, and innovation."
        className="border-b border-gray-200 dark:border-gray-700"
      ></PageHeader>
    </Container>
  );
}
