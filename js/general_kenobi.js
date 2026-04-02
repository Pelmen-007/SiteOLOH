async function getSHA256Hash(str) {
  const buf = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
// Вот так можно этот код применить:
getSHA256Hash('example').then(console.log); // Выведет уникальный хеш для строки 'example'