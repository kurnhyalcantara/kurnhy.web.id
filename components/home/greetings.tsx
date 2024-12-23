import clsx from 'clsx';

export function Greetings() {
  return (
    <div
      className={clsx(
        'font-greeting font-extrabold tracking-tight',
        'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]',
        'bg-clip-text text-transparent',
        'bg-gradient-to-r from-blue-500 to-purple-500'
      )}
    >
      Welcome, friend!
    </div>
  );
}
