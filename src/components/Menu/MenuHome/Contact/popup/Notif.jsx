export default function Notif() {
  return (
    <div
      role="alert"
      className="alert alert-success absolute bottom-0 right-0 mb-2 sm:mb-4 mr-2 sm:mr-4 w-[280px] sm:w-[340px] h-[45px] sm:h-[55px] text-[10px] sm:text-xs"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-6 sm:w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Your project inquiry has been sent successfully!</span>
    </div>
  );
}
