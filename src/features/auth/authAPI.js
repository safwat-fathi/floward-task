export function fetchUser({ email, password, isLoggedIn }) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: { email, password, isLoggedIn } }), 500)
  );
}
