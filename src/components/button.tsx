type Props = {
  label: string;
  onClick?: () => unknown;
};

export const Button = ({ label, onClick = () => null }: Props) => {
  return (
    <button
      onClick={onClick}
      className="transform rounded-md bg-blue-600 px-8 py-2 capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
    >
      {label}
    </button>
  );
};
