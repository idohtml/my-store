export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
