export const Cancel = ({ setToggleModal }) => {
  return (
    <button
      data-modal-toggle="popup-modal"
      type="button"
      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      onClick={() => setToggleModal((prev) => !prev)}
    >
      No, cancel
    </button>
  );
};
