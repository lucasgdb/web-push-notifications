import { clsx } from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg disabled:opacity-30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out',
        className
      )}
      {...props}
    />
  );
}
