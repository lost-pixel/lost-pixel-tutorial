import clsx from "clsx";

type Props = {
  price: number;
  title: string;
  selected?: boolean;
  yearly?: boolean;
  onClick?: () => void;
};

export const PricingRow = ({
  price,
  title,
  selected,
  yearly,
  onClick,
}: Props) => {
  return (
    <div
      className={clsx(
        "mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4",
        {
          "border-gray-700": !selected,
          "border-blue-500": selected,
        }
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("h-5 w-5 sm:h-9 sm:w-9", {
            "text-gray-400": !selected,
            "text-blue-600": selected,
          })}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <div className="mx-5 flex flex-col  space-y-1">
          <h3 className="text-lg font-medium  text-gray-200 sm:text-2xl">
            {title}{" "}
          </h3>
          {yearly && (
            <div className="rounded-full bg-purple-500 px-2 text-xs text-white sm:px-4 sm:py-1 ">
              Save 20%
            </div>
          )}
        </div>
      </div>

      <h2
        className={clsx("text-2xl font-semibold sm:text-4xl", {
          "text-gray-300": !selected,
          "text-blue-600": selected,
        })}
      >
        ${price} <span className="text-base font-medium">/Month</span>
      </h2>
    </div>
  );
};
