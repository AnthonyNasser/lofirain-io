export const APP_STORE_URL =
  "https://apps.apple.com/us/app/ambient-focus-timer-lofirain/id6774655093";

export function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      className="app-store-button"
      target="_blank"
      rel="noreferrer"
    >
      <svg className="app-store-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.37 1.01c.08 1.03-.3 2.05-1.03 2.88-.78.9-2.05 1.58-3.16 1.49-.1-.99.32-2.04 1.02-2.8.79-.87 2.15-1.55 3.17-1.57ZM20.58 17.67c-.48 1.09-.71 1.58-1.33 2.54-.86 1.31-2.07 2.95-3.56 2.97-1.33.01-1.67-.86-3.48-.85-1.8.01-2.18.87-3.51.86-1.49-.02-2.63-1.49-3.49-2.8-2.4-3.67-2.65-7.98-1.17-10.27 1.05-1.62 2.7-2.57 4.25-2.57 1.58 0 2.57.87 3.88.87 1.27 0 2.05-.87 3.88-.87 1.39 0 2.86.76 3.91 2.06-3.44 1.89-2.88 6.8.62 8.06Z"
        />
      </svg>
      <span className="app-store-copy">
        <span className="app-store-small">Download on the</span>
        <span className="app-store-title">App Store</span>
      </span>
    </a>
  );
}
