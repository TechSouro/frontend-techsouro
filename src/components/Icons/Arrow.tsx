export function Arrow({ active }: { active?: boolean }) {
  return (
    <svg
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.47737e-06 9.83671L19.543 9.83671L11.9525 2.35189L14.3376 -5.09779e-07L26 11.5L14.3376 23L11.9525 20.6481L19.543 13.1633L1.33196e-06 13.1633L1.47737e-06 9.83671Z"
        fill="#111111"
        fillOpacity={active ? "1" : "0.5"}
      />
    </svg>
  );
}
