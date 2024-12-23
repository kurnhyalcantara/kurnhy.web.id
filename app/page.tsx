import ThemeToggle from '@/components/ui/theme-toggle';
import Container from '@/components/ui/container';

export default function Home() {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <ThemeToggle />
      </div>
    </Container>
  );
}
