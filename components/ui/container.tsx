import clsx from 'clsx';

export default function Container({
  children,
  as: Component = 'section',
  className,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-12',
        className
      )}
    >
      {children}
    </Component>
  );
}
